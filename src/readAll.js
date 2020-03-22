import mockData from "./data";
import purchaseOrder from "./purchaseOrder";
import orderDetail from "./orderDetail";
import costDetail from "./costDetail";
import itemDetail from "./itemDetail";

function readAll() {
  let readData = [];
  console.log("readAll", mockData);

  for (let i = 0; i < mockData.length; i++) {
    const element = mockData[i];
    const order = new orderDetail(
      element.order.name,
      element.order.id,
      element.order.summary
    );

    const cost = new costDetail(
      element.cost.subtotal,
      element.cost.tax,
      element.cost.shipping
    );

    let itemDetails = [];
    for (let index = 0; index < element.items.length; index++) {
      const item = element.items[index];
      itemDetails.push(
        new itemDetail(item.quantity, item.id, item.description)
      );
    }

    const currentPurchaseOrder = new purchaseOrder(
      order,
      cost,
      element.shippingAddress,
      element.raisedBy,
      element.creationDate,
      element.modifiedDate,
      element.comments,
      itemDetails
    );

    console.log("readAll 1", element.comments, currentPurchaseOrder.comments);

    readData.push(currentPurchaseOrder);
  }

  return readData;
}

export default readAll;
