import React, { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { StyledPagination } from "./StyledPagination";
import {useHistory, useRouteMatch} from "react-router-dom";

interface IPagination {
  countOfPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination = ({ countOfPages, setCurrentPage }: IPagination) => {
const url = useRouteMatch()
  const history = useHistory();

  const handlePageChange = (e: any) => {
    const page = e.selected + 1;
    setCurrentPage(e.selected + 1);
  };

  return (
    <StyledPagination>
      <ReactPaginate
        pageCount={countOfPages}
        nextLabel={<BsChevronDoubleRight className="prev-next" />}
        previousLabel={<BsChevronDoubleLeft className="prev-next" />}
        onPageChange={handlePageChange}
        className="paginateClass"
        pageClassName="pageClass"
        activeClassName="activePage"
      />
    </StyledPagination>
  );
};
