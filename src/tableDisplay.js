import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import ItemDisplay from "./itemDisplay";
import OrderDisplay from "./OrderDisplay";
import CostDisplay from "./CostDisplay";
import ShippingAddressDisplay from "./ShippingaddressDisplay";
import RaisedByDisplay from "./RaisedByDisplay";
import CreationDateDisplay from "./CreationDateDisplay";
import LastModifiedDateDisplay from "./LastModifiedDateDisplay";
import CommentsDisplay from "./CommentsDisplay";

function tableDisplay(props) {
  console.log("tableDisplay 1", props.data);
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <OrderDisplay data={props.data} />
          <CostDisplay data={props.data} />
          <ItemDisplay data={props.data} />
          <ShippingAddressDisplay data={props.data} />
          <RaisedByDisplay data={props.data} />
          <CreationDateDisplay data={props.data} />
          <LastModifiedDateDisplay data={props.data} />
          <CommentsDisplay data={props.data} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default tableDisplay;
