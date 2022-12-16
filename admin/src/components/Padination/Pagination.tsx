import React from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};
const Pagintation = ({ handlePageClick, pageCount }: PaginationProps) => {
  console.log(pageCount);
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        containerClassName="pagination-list"
        pageClassName="pagination-list__item"
        activeClassName="pagination-list__active-item"
        previousClassName="pagination-list__previous-item"
        nextClassName="pagination-list__next-item"
        disabledClassName="pagination-list__disabled-item"
        disabledLinkClassName="pagination-list__disabled-link"
        breakClassName="pagination-list__ellipses-item"
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={() => {}}
      />
    </>
  );
};

export default Pagintation;
