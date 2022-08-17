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

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);

  // get data from database
  useEffect(() => {
    fetch("https://intense-forest-82602.herokuapp.com/manageService")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isDeleted]);

  // delete product
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to Delete");
    if (proceed) {
      fetch(
        `https://intense-forest-82602.herokuapp.com/alService/service/delete/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            alert("delete success");
            // const remaining = products.filter(product => product._id !== id);
            // setProducts(remaining)
            setIsDeleted(true);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };

  return (
    <div>
      <Container>
        <h3>All Services {services.length}</h3>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.map((service, index) => (
                <TableRow
                  key={service._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell> {index + 1} </TableCell>
                  <TableCell> {service.name} </TableCell>
                  <TableCell> {service.price} </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleDelete(service?._id)}
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

export default ManageProducts;
