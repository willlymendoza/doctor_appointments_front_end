import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dateService from "../../services/dateService";

const Table = ({ labels, data, actions }) => {
  return (
    <Fragment>
      <div className="table-grid table-header">
        {labels.map((item, index) => (
          <label key={index}>{item.label}</label>
        ))}

        {actions ? <label>Actions</label> : ""}
      </div>

      {(!data || !data.length) && (
        <div className="table-grid full-width">No records found</div>
      )}

      {data.map((item) => (
        <div key={item._id} className="table-grid table-content">
          {labels.map((label, index) => (
            <Fragment key={index}>
              <span className="responsive-label">{label.label}</span>
              {label.type === "object" ? (
                <Fragment>
                  {Array.isArray(label.child) ? (
                    <Fragment>
                      <span>
                        {label.child.map((child, i) => (
                          <Fragment key={i}>
                            {label.type === "date"
                              ? dateService(item[label.value][child]) + " "
                              : item[label.value][child]}
                          </Fragment>
                        ))}
                      </span>
                    </Fragment>
                  ) : (
                    <span key={index}>
                      {label.type === "date"
                        ? dateService(item[label.value][label.child])
                        : item[label.value][label.child]}
                    </span>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {Array.isArray(label.value) ? (
                    <Fragment>
                      <span>
                        {label.value.map((value, ix) => (
                          <Fragment key={ix}>
                            {label.type === "date"
                              ? dateService(item[value])
                              : item[value]}
                          </Fragment>
                        ))}
                      </span>
                    </Fragment>
                  ) : (
                    <span key={index}>
                      {label.type === "date"
                        ? dateService(item[label.value])
                        : item[label.value]}
                    </span>
                  )}
                </Fragment>
              )}
            </Fragment>
          ))}

          {actions ? (
            <Fragment>
              <span className="actions">
                <Link to={`${actions.link}/${item._id}`} className="view_item">
                  <i className="fas fa-eye"></i>
                </Link>
              </span>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default Table;

Table.propTypes = {
  labels: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  actions: PropTypes.object,
};
