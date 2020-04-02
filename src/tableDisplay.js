import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import ItemDisplay from "./ItemDisplay";
import OrderDisplay from "./OrderDisplay";
import CostDisplay from "./CostDisplay";
import ShippingAddressDisplay from "./ShippingaddressDisplay";
import RaisedByDisplay from "./RaisedByDisplay";
import CreationDateDisplay from "./CreationDateDisplay";
import LastModifiedDateDisplay from "./LastModifiedDateDisplay";
import CommentsDisplay from "./CommentsDisplay";

function TableDisplay(props) {
  const { data } = props;

  return (
    <TableContainer>
      <Table>
        <TableBody>
          <OrderDisplay order={data.order} />
          <CostDisplay cost={data.cost} />
          <ItemDisplay items={data.items} />
          <ShippingAddressDisplay shippingAddress={data.shippingAddress} />
          <RaisedByDisplay raisedBy={data.raisedBy} />
          <CreationDateDisplay creationDate={data.creationDate} />
          <LastModifiedDateDisplay modifiedDate={data.modifiedDate} />
          <CommentsDisplay comments={data.comments} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableDisplay;
