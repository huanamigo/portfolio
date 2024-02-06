import React from 'react';

const NavigationBtn = ({ label, link, styleName }) => {
  return (
    <>
      <a
        aria-label={`${label} link`}
        target="_blank"
        href={link}
        rel="noreferrer"
      >
        <i className={styleName}></i>
      </a>
    </>
  );
};

export default NavigationBtn;
