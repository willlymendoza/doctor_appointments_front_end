import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Table = ({ labels, data, actions }) => {
  return (
    <Fragment>
      <div className="table-grid table-header">
        {labels.map((item, index) => (
          <label key={index}>{item.label}</label>
        ))}

        {actions ? <label>Actions</label> : ""}
      </div>

      {data.map((item) => (
        <div key={item._id} className="table-grid table-content">
          {labels.map((label, index) => (
            <Fragment key={index}>
              {label.type === "object" ? (
                <Fragment>
                  {Array.isArray(label.child) ? (
                    <Fragment>
                      <span>
                        {label.child.map((child, i) => (
                          <Fragment key={i}>
                            {item[label.value][child]}{" "}
                          </Fragment>
                        ))}
                      </span>
                    </Fragment>
                  ) : (
                    <span key={index}>{item[label.value][label.child]}</span>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {Array.isArray(label.value) ? (
                    <Fragment>
                      <span>
                        {label.value.map((value, ix) => (
                          <Fragment key={ix}>{item[value]} </Fragment>
                        ))}
                      </span>
                    </Fragment>
                  ) : (
                    <span key={index}>{item[label.value]}</span>
                  )}
                </Fragment>
              )}
            </Fragment>
          ))}

          {actions ? (
            <span className="actions">
              <Link to={`${actions.link}/${item._id}`} className="view_item">
                <i className="fas fa-eye"></i>
              </Link>
            </span>
          ) : (
            ""
          )}
        </div>
      ))}
    </Fragment>
  );
};

export default Table;
