import moment from "moment";

const dateFormat = (date) => {
  return moment(date).format("yyyy-MM-DD");
};

export default dateFormat;
