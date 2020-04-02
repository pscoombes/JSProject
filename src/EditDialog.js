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

function collateData() {
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
    items: [
      {
        quantity: 100,
        id: "AABBCC1",
        description: "The AABBCC1 stuff"
      }
    ],
    shippingAddress: document.querySelector("#shippingaddress").value,
    raisedBy: document.querySelector("#raisedby").value,
    creationDate: new Date(document.querySelector("#creationdate").value),
    modifiedDate: new Date(document.querySelector("#modifieddate").value),
    comments: document.querySelector("#comments").value
  };
  return data;
}

function EditDialog(props) {
  const { data, open, handleClose, uniqueKey } = props;

  return (
    <Dialog open={open} maxWidth="md" fullWidth={true}>
      <DialogTitle>Edit Purchase Order</DialogTitle>

      <DialogContent>
        <OrderEdit order={data.order} />
        <CostEdit cost={data.cost} />
        <ItemEdit items={data.items} />
        <ShippingAddressEdit shippingAddress={data.shippingAddress} />
        <RaisedByEdit raisedBy={data.raisedBy} />
        <CreationDateEdit creationDate={data.creationDate} />
        <LastModifiedDateEdit modifiedDate={data.modifiedDate} />
        <CommentsEdit comments={data.comments} />
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={event => {
            handleClose(collateData(), uniqueKey, event);
          }}
        >
          Cancel
        </Button>

        <Button
          variant="outlined"
          onClick={event => {
            handleClose(collateData(), uniqueKey, event);
          }}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;
