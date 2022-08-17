import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  const [isUpdated, setIsUpdated] = useState(null);

  // get data from database
  useEffect(() => {
    fetch("http://localhost:5000/manageOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [isDeleted, isUpdated]);

  // delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to Delete");
    if (proceed) {
      fetch(`http://localhost:5000/allOrders/order/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            alert("delete success");
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };

  // // update
  const handleUpdateStatus = (id) => {
    fetch(`http://localhost:5000/orderStatus/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      // .then()

      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order Approved");
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
  };

  return (
    <div>
      <Container>
        <h3>All Order {allOrders.length}</h3>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((order, index) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell> {index} </TableCell>
                  <TableCell> {order.CustomerName} </TableCell>
                  <TableCell> {order.PhoneNumber} </TableCell>
                  <TableCell> {order.serviceName} </TableCell>
                  <TableCell> {order.price} </TableCell>
                  <TableCell> {order.status} </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleUpdateStatus(order?._id)}
                      variant="outlined"
                      color="error"
                    >
                      {order?.status === "Confirm" ? "Updated " : "Update"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelete(order?._id)}
                      variant="outlined"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default ManageOrders;
