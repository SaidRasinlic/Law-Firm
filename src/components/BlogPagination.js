/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import {
  React,
  useEffect,
  useState,
} from 'react';
import ReactPaginate from 'react-paginate';
import HTMLReactParser from 'html-react-parser';
import moment from 'moment';
import { AttentionSeeker } from 'react-awesome-reveal';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const BlogPagination = () => {
  const [blogData, setBlogData] = useState([]);
  const URL = 'https://advokat-rasinlic.com/api/blogs';

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setBlogData(res));
  }, [URL]);

  function Items({ currentItems }) {
    return (
      <div className="blogs-container" id="blog-lista">
        <h1
          style={{
            padding: '50px 0', margin: '0', fontSize: '46px', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'fangsong',
          }}
        >
          Blogovi
        </h1>
        <AttentionSeeker effect="shakeX" triggerOnce delay={300}>
          {currentItems === null || currentItems === 'undefined' || currentItems.length === 0 ? <p className="author-blog-alert-cont"><span>Autor trenutno nema objavljenih blogova.</span></p>
            : (
              <div className="blog-grid">
                {currentItems && currentItems.map((item) => (
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
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(blogData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(blogData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % blogData.length;
      setItemOffset(newOffset);
      document.getElementById('blog-lista').scrollIntoView();
    };

    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          nextLabel={<MdArrowForwardIos className="pagin-icon" />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel={<MdArrowBackIos className="pagin-icon" />}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
        />
      </>
    );
  }

  return (
    <PaginatedItems itemsPerPage={6} />
  );
};

export default BlogPagination;
