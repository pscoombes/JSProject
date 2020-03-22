function purchaseOrder(
  orderDetails,
  costDetails,
  shippingAddress,
  raisedBy,
  creationDate,
  modifiedDate,
  comments,
  ...itemDetails
) {
  console.log("purchaseOrder 1", comments);
  this.order = orderDetails;
  this.cost = costDetails;
  this.items = itemDetails;
  this.shippingAddress = shippingAddress;
  this.raisedBy = raisedBy;
  this.creationDate = creationDate;
  this.modifiedDate = modifiedDate;
  this.comments = comments;
}

export default purchaseOrder;
