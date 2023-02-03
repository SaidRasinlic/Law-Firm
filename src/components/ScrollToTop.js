import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => (
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false)
    );

    window.addEventListener('scroll', handleScrollButtonVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  }, []);

  return (
    showButton && (
      <div id="arrow-bg" role="presentation" onClick={handleScrollToTop}>
        <div className="arrow animated" />
      </div>
    )
  );
};

export default ScrollToTop;
