import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import OrderEdit from "./OrderEdit";
import CostEdit from "./CostEdit";
import ItemEdit from "./ItemEdit";
import ShippingAddressEdit from "./ShippingaddressEdit";
import RaisedByEdit from "./RaisedByEdit";
import CreationDateEdit from "./CreationDateEdit";
import LastModifiedDateEdit from "./LastModifiedDateEdit";
import CommentsEdit from "./CommentsEdit";

function collateData(itemsLength) {
  let creationDateParts = document
    .querySelector("#creationdate")
    .value.split("/");
  let modifiedDateParts = document
    .querySelector("#modifieddate")
    .value.split("/");

  let newItems = [];
  for (let index = 0; index < itemsLength; index++) {
    if (document.querySelector("#delete" + index).checked == false) {
      if (
        !(
          document.querySelector("#quantity" + index).value == "" &&
          document.querySelector("#productid" + index).value == "" &&
          document.querySelector("#productdescription" + index).value == ""
        )
      ) {
        newItems.push({
          quantity: document.querySelector("#quantity" + index).value,
          productId: document.querySelector("#productid" + index).value,
          productDescription: document.querySelector(
            "#productdescription" + index
          ).value
        });
      }
    }
  }

  const data = {
    order: {
      name: document.querySelector("#name").value,
      id: document.querySelector("#orderid").value,
      summary: document.querySelector("#summary").value
    },
    cost: {
      subtotal: document.querySelector("#subtotal").value,
      tax: document.querySelector("#tax").value,
      shipping: document.querySelector("#shipping").value
    },
    items: newItems,
    shippingAddress: document.querySelector("#shippingaddress").value,
    raisedBy: document.querySelector("#raisedby").value,
    creationDate: new Date(
      creationDateParts[2],
      creationDateParts[1] - 1,
      creationDateParts[0]
    ),
    modifiedDate: new Date(
      modifiedDateParts[2],
      modifiedDateParts[1] - 1,
      modifiedDateParts[0]
    ),
    comments: document.querySelector("#comments").value
  };
  return data;
}

function EditDialog(props) {
  const { data, open, handleNewItem, handleClose, cardKey } = props;

  const addItem = itemsLength => {
    const dialogData = collateData(itemsLength);
    dialogData.items.push({
      quantity: null,
      productId: null,
      productDescription: null
    });
    handleNewItem(dialogData);
  };

  return (
    <Dialog open={open} maxWidth="md" fullWidth={true}>
      <DialogTitle>Edit Purchase Order</DialogTitle>
      <DialogContent>
        <OrderEdit order={data.order} />
        <CostEdit cost={data.cost} />
        <ItemEdit items={data.items} addItem={addItem} />
        <ShippingAddressEdit shippingAddress={data.shippingAddress} />
        <RaisedByEdit raisedBy={data.raisedBy} />
        <CreationDateEdit creationDate={data.creationDate} />
        <LastModifiedDateEdit modifiedDate={data.modifiedDate} />
        <CommentsEdit comments={data.comments} />
      </DialogContent>
      <DialogActions>
        <Button
          type="reset"
          variant="outlined"
          onClick={event => handleClose(null, cardKey, event)}
        >
          Cancel
        </Button>

        <Button
          variant="outlined"
          onClick={event => {
            handleClose(collateData(data.items.length), cardKey, event);
          }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;
