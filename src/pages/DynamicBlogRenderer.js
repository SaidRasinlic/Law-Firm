import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import { MdArrowBackIos } from 'react-icons/md';
import { FcCalendar } from 'react-icons/fc';

import '../assets/styles/blog_renderer.scss';
import SEO from '../components/SEO';

const DynamicBlogRenderer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogItems, setBlogItems] = useState();

  const URL = '/api/blogs/blog';

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((res) => setBlogItems(res));
  }, [URL, id]);

  return (
    <article className="dynamic-blog">
      <SEO
        title={typeof blogItems !== 'undefined' && `Advokat Senad Rašinlić | ${blogItems[0].blog_subject} | Advokat Sarajevo |`}
        keywords={typeof blogItems !== 'undefined' && `${blogItems[0].blog_subject}, advokati sarajevo, senad rasinlic, najbolji advokati sarajevo`}
        description={typeof blogItems !== 'undefined' && `${blogItems[0].blog_subject} | Blog | Advokat Senad Rašinlić, Advokati Sarajevo, Najbolji advokati Sarajevo, poznati advokati Sarajevo`}
        name="Advokat Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija Rašinlić"
        type="website"
      />
      <h1 className="dynamic-blog-title" id="opsirnije">{blogItems && `${blogItems[0].blog_subject}`}</h1>
      {blogItems && blogItems.map((item) => (
        <div className="dynamic-blog-inner-container" key={item.id}>
          <img src={item.blog_img} alt={item.blog_subject} />
          {HTMLReactParser(item.blog_body)}
          <div className="dynamic-blog-elements">
            <button type="button" onClick={() => navigate(-1)}>
              <MdArrowBackIos />
              {' '}
              Nazad
            </button>
            <div className="dynamic-blog-date">
              <FcCalendar style={{ width: '25px', height: '25px' }} />
              {`${moment(item.blog_date).format('DD.MM.YYYY.')}`}
            </div>
          </div>
        </div>
      ))}
    </article>
  );
};

export default DynamicBlogRenderer;
