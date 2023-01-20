import React from "react";
import PropTypes from "prop-types";
import Button from "./button";

const Pagination = ({ onPageChange, currentPage, pageSize, itemsCount }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);

    return (
        <div className="flex gap-1 justify-center mb-2">
            <Button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                prev
            </Button>
            <span className="p-1">
                {currentPage} / {pagesCount}
            </span>
            <Button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === pagesCount}
            >
                next
            </Button>
        </div>
    );
};

Pagination.propTypes = {
    onPageChange: PropTypes.func,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    itemsCount: PropTypes.number,
};

export default Pagination;
