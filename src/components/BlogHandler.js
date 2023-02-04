import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import '../assets/styles/blog_handler.scss';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const BlogHandler = ({ editorStateProp }) => {
  const [img, setImg] = useState('');
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [category, setCategory] = useState('');
  const [blogId, setBlogId] = useState('');

  const imgNotify = () => toast.error('Polje za sliku ne može biti prazno.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const dateNotify = () => toast.error('Polje za datum ne može biti prazno.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const subjectNotify = () => toast.error('Polje za naslov ne može biti prazno', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const bodyNotify = () => toast.error('Polje za sadržaj ne može biti prazno.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const categoryNotify = () => toast.error('Polje za kategoriju ne može biti prazno.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const deleteNotify = () => toast.error('Polje za Blog ID ne može biti prazno.', {
    position: toast.POSITION.TOP_CENTER,
    theme: 'dark',
  });

  const handleSubmit = () => {
    const URL = 'https://advokat-rasinlic.com/api/blogs';

    if (img.length === 0) {
      imgNotify();
      return;
    }

    if (date.length === 0) {
      dateNotify();
      return;
    }

    if (subject.length === 0) {
      subjectNotify();
      return;
    }

    if (category.length === 0) {
      categoryNotify();
      return;
    }

    // eslint-disable-next-line react/prop-types
    if (editorStateProp.trim() === '<p></p>' || editorStateProp.trim() === '') {
      bodyNotify();
      return;
    }

    // setPropState(editorStateProp);
    fetch(URL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        credentials: 'include',
      },
      body: JSON.stringify({
        blog_img: img,
        blog_date: date,
        blog_subject: subject,
        blog_body: editorStateProp,
        blog_category: category,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success('Uspješno ste kreirali blog.', {
          position: toast.POSITION.TOP_CENTER,
        });
        setImg('');
        setDate('');
        setSubject('');
        setCategory('');
      });
  };

  const handleDelete = () => {
    if (blogId.length === 0) {
      deleteNotify();
      return;
    }

    const URL = 'https://advokat-rasinlic.com/api/blogs/blog';

    fetch(`${URL}/${blogId}`, {
      method: 'DELETE',
    })
      .then(() => {
        toast.success(`Blog s ID-om (${blogId}) je uspješno obrisan.`, {
          position: toast.POSITION.TOP_CENTER,
        });
        setBlogId('');
      });
  };

  return (
    <>
      <section className="blog-handler">
        <div className="blog-handler-form">
          <div className="blog-handler-inner">
            <h2>Blog Menadžment</h2>

            <input
              type="text"
              placeholder="Slika (link)"
              className="blog-handler-input"
              value={img}
              onChange={(e) => { setImg(e.target.value); }}
            />
            <input
              className="blog-handler-input"
              type="text"
              placeholder="Datum"
              value={date}
              onChange={(e) => { setDate(e.target.value); }}
              onFocus={(e) => { e.target.type = 'date'; }}
              onBlur={(e) => { e.target.type = 'text'; }}
            />
            <input
              type="text"
              placeholder="Naslov"
              className="blog-handler-input"
              value={subject}
              onChange={(e) => { setSubject(e.target.value); }}
            />
            <input
              type="text"
              placeholder="Kategorija"
              className="blog-handler-input"
              value={category}
              onChange={(e) => { setCategory(e.target.value); }}
            />
            <input type="button" onClick={handleSubmit} value="DODAJ BLOG" className="blog-handler-btn" />

            <div>
              <input
                type="number"
                placeholder="Blog ID"
                className="blog-handler-input nmbr-inpt"
                value={blogId}
                onChange={(e) => { setBlogId(e.target.value); }}
              />
              <input type="button" onClick={handleDelete} value="OBRIŠI BLOG" className="blog-handler-btn" />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default BlogHandler;
