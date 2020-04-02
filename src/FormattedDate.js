function formattedDate(date) {
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  const adjustedMonth = date.getMonth() + 1;
  const month = adjustedMonth < 10 ? "0" + adjustedMonth : adjustedMonth;
  const year = 1900 + date.getYear();
  const formattedDate = day + "/" + month + "/" + +year;

  return formattedDate;
}

export default formattedDate;
