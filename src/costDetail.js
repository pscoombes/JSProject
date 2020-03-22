function costDetail(subTotal, tax, shipping) {
  this.subTotal = subTotal.toFixed(2);
  this.tax = tax.toFixed(2);
  this.shipping = shipping.toFixed(2);
  this.total = (subTotal + tax + shipping).toFixed(2);
}

export default costDetail;
