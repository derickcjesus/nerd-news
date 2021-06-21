import React from "react";

import './styles.css';

import vector from '../../assets/vector.svg';

const NameBlog = () => {
  return (
    <>
      <div className="texto-blog">
        <h1>Blog</h1>
        <img src={vector} alt="vector" />
      </div>
    </>
  );
};

export default NameBlog;
