import { useState } from "react";

const paginate = (currentPage, pageSize) => (items) => {
    const startIndex = (currentPage - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
};

const usePaginate = ({ pageSize = 20, currentPage: cp } = {}) => {
    const [currentPage, setCurrentPage] = useState(cp ?? 1);

    return {
        currentPage,
        setCurrentPage,
        pageSize,
        paginate: paginate(currentPage, pageSize),
    };
};

export default usePaginate;
