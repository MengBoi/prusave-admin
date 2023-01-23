const stripHtmlString = (str) => {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
};
export default stripHtmlString;
