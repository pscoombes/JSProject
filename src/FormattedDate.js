import React from "react";

function FormattedDate(props) {
  const { value } = props;
  console.log("FormattedDate 1 value", value);
  const day = value.getDate() < 10 ? "0" + value.getDate() : value.getDate();
  const adjustedMonth = value.getMonth() + 1;
  const month = adjustedMonth < 10 ? "0" + adjustedMonth : adjustedMonth;
  const year = 1900 + value.getYear();
  const formattedDate = day + "/" + month + "/" + +year;
  return <span>{formattedDate}</span>;
}

export default FormattedDate;
