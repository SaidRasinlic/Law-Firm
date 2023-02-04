import React, { useState, useEffect } from 'react';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import { AttentionSeeker } from 'react-awesome-reveal';
import '../assets/styles/blog.scss';
import SEO from './SEO';

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const URL = 'https://advokat-rasinlic.com/api/recent-blogs';

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setBlogData(res))
      .catch((err) => err);
  }, [URL]);

  return (
    <section id="home-blogs" className="blog-section">
      <SEO
        title={blogData.length !== 0 && `Advokat Senad Rašinlić | ${blogData[0].blog_subject} | Advokat Sarajevo |`}
        keywords={blogData.length !== 0 && `${blogData[0].blog_subject}, advokati sarajevo, senad rasinlic, najbolji advokati sarajevo`}
        description={blogData.length !== 0 && `${blogData[0].blog_subject} | Blog | Advokat Senad Rašinlić, Advokati Sarajevo, Najbolji advokati Sarajevo, poznati advokati Sarajevo`}
        name="Advokat Senad Rašinlić | Advokat Sarajevo | Advokatska Kancelarija Rašinlić"
        type="website"
      />
      <div className="blogs-container">
        <h1 className="blogs-title" style={{ textAlign: 'center' }}>Recentni Blogovi</h1>
        <AttentionSeeker effect="shakeX" triggerOnce delay={300}>
          {blogData === null || blogData === 'undefined' || blogData.length === 0 ? <p className="author-blog-alert-cont"><span>Autor trenutno nema objavljenih blogova.</span></p>
            : (
              <div className="blog-grid">
                {blogData && blogData.map((item) => (
                  <a href={`${item.blog_subject.toLowerCase().split(' ').join('-')}/${item.id}#opsirnije`} key={item.id} className="blog-grid__item span-col-2 span-row-2">
                    <img src={item.blog_img} alt={item.blog_subject} />
                    <p className="blog-category">
                      {item.blog_category}
                    </p>
                    <p className="text w-desktop-75">
                      <small className="d-block date">{moment(item.blog_date).format('DD.MM.YYYY.').toString()}</small>
                      {item.blog_subject}
                    </p>
                    <div className="blog-body-text">
                      {HTMLReactParser(item.blog_body.substring(0, 100))}
                    </div>
                  </a>
                ))}
              </div>
            )}
        </AttentionSeeker>
      </div>
    </section>
  );
};

export default Blogs;
