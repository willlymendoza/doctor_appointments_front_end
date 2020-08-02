import React from "react";
import PropTypes from "prop-types";
import Pagination from "react-js-pagination";

import "./styles.scss";

const CustomPagination = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  color,
  handlePageChange,
}) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={pageRangeDisplayed}
      onChange={handlePageChange}
      firstPageText={<i className="fa fa-angle-double-left" />}
      lastPageText={<i className="fa fa-angle-double-right" />}
      nextPageText={<i className="fa fa-chevron-right" />}
      prevPageText={<i className="fa fa-chevron-left" />}
      innerClass={`pagination ${color}`}
      linkClassPrev={`chevron ${color}`}
      linkClassNext={`chevron ${color}`}
      linkClassFirst={`chevron ${color}`}
      linkClassLast={`chevron ${color}`}
    />
  );
};

export default CustomPagination;

CustomPagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  itemsCountPerPage: PropTypes.number.isRequired,
  totalItemsCount: PropTypes.number.isRequired,
  pageRangeDisplayed: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};
