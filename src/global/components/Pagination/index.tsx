import React, { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { StyledPagination } from "./StyledPagination";

interface IPagination {
  countOfPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ countOfPages, setCurrentPage }: IPagination) => {
  const handlePageChange = (e: any) => {
    setCurrentPage(e.selected + 1);
  };

  return (
    <StyledPagination>
      <ReactPaginate
        pageCount={countOfPages}
        nextLabel={<BsChevronDoubleRight />}
        previousLabel={<BsChevronDoubleLeft />}
        onPageChange={handlePageChange}
        className='paginateClass'
        pageClassName='pageClass'
      />
    </StyledPagination>
  );
};
