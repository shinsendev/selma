import React, { useState } from "react";
import PaginationElement from "../../components/atoms/PaginationElement";
import containerStyle from  "../../styles/modules/pagination.module.css";

const Pagination = ({ current, max, size }) => {

  function displayElements() {
    const elements =  [];

    const pageNumber = Math.ceil(max / size);

    for (let i = 0; i < pageNumber; i++) {
      elements.push(<PaginationElement value={i+1} key={i} current={pageNumber === i+1}/>);
    }

    return elements;
  }

  return (
    <div className={containerStyle.container}>
      {displayElements()}
    </div>
  );
}

export default Pagination;