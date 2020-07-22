import React from "react";
import Pagination from "react-js-pagination";

import "./styles.scss";

const CustomPagination = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  color,
}) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
      totalItemsCount={totalItemsCount}
      pageRangeDisplayed={pageRangeDisplayed}
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
