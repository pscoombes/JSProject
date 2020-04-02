function costDetail(subtotal, tax, shipping) {
  this.subtotal = subtotal.toFixed(2);
  this.tax = tax.toFixed(2);
  this.shipping = shipping.toFixed(2);
  // this.total = (subtotal + tax + shipping).toFixed(2);
}

export default costDetail;
