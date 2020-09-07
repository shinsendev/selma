import React, { useState } from "react";
import PaginationElement from "../../components/atoms/PaginationElement";
import containerStyle from  "../../styles/modules/pagination.module.css";

const Pagination = ({ current, max, size, changePage }) => {
  const [currentState, setCurrentState] = useState(current);

  function displayElements() {
    const elements =  [];
    const pageNumber = Math.ceil(max / size);

    // function localChangePage(i) {
    //   setCurrentState(i+1);
    //   changePage(i+1);
    // }

    for (let i = 0; i < pageNumber; i++) {
      elements.push(
        //todo: add css for float
        <span onClick={() => {changePage(i+1)}}>
          <PaginationElement value={i+1} key={i} current={currentState === i+1} />
        </span>);
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