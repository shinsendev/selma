import React from "react";
import containerStyle from  "../../styles/modules/paginationElement.module.css";

const PaginationElement = ({value, current}) => {

    function getClasses() {
        if (current === true) {
            return containerStyle.current;
        }

        else {
            return containerStyle.simple;
        }
    }

    return (
        <div className={getClasses()} >
            {value}
        </div>
    )
}

export default PaginationElement;