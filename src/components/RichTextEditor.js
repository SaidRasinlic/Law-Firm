/* eslint-disable no-constant-condition */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { Navigate } from 'react-router-dom';
import BlogHandler from './BlogHandler';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <div>
      {
        localStorage.getItem('token') === null
          || localStorage.getItem('token') === 'undefined'
          || localStorage.getItem('token') === ''
          || localStorage.getItem('token').length < 100
          ? <Navigate to="/" /> : ''
      }
      <BlogHandler
        editorStateProp={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        placeholder="Kreiraj svoj blog..."
      />
      <textarea
        style={{
          width: '100%', border: '2px solid red', margin: '50px 0', resize: 'vertical',
        }}
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default RichTextEditor;
