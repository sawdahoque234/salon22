import {
  Alert,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const Order = ({ id }) => {
  // all State
  const [newServiceData, setNewServiceData] = useState({});
  const [success, setSuccess] = useState("");

  const [services, setServices] = useState([]);
  const [exactServices, setExactServices] = useState({});
  const { user } = useAuth();

  // get data from database
  useEffect(() => {
    fetch("https://sallonserver.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // get single data-----------
  useEffect(() => {
    if (services.length) {
      const exactDestination = services.find((service) => service._id == id);
      setExactServices(exactDestination);
    }
  }, [services, id]);
  const { name, price, image, description } = exactServices;

  // get data from form
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    newServiceData[field] = value;
    setNewServiceData(newServiceData);
  };

  // send data backend
  const handleServiceSubmit = (e) => {
    e.preventDefault();
    newServiceData.price = price;
    newServiceData.serviceName = name;
    newServiceData.status = "pending";

    axios
      .post("https://sallonserver.onrender.com/addOrder", newServiceData)
      .then((res) => {
        const success = res.data.insertedId;
        if (success) {
          setSuccess("Order Complete");
        }
      });
  };

  return (
    <div style={{ margin: "5rem 0" }}>
      <h3 style={{ textAlign: "center", fontSize: "2rem" }}>
        {" "}
        Confirm Your <span style={{ color: "#F63E7B" }}>Order</span>
      </h3>

      <Container>
        <Box sx={{ textAlign: "center" }}>
          {success && <Alert severity="success">{success}</Alert>}
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Card
              sx={{ minWidth: 200, border: 0, boxShadow: 3, marginTop: "40px" }}
            >
              <CardMedia
                component="img"
                style={{ width: "90%", margin: "10px auto" }}
                image={image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                  gutterBottom
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    textAlign: "center",
                    color: "#F63E7B",
                    fontWeight: "bold",
                  }}
                  gutterBottom
                >
                  $ {price}
                </Typography>

                <Typography
                  sx={{ fontSize: 14, mb: 1.5, textAlign: "center" }}
                  color="text.secondary"
                >
                  {description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div style={{ margin: "0 auto" }}>
              <h3 style={{ textAlign: "center", fontSize: "30px" }}>
                {" "}
                <span style={{ color: "#F63E7B" }}>Order Details</span>
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "20px 30px",
                    width: "70%",
                  }}
                >
                  <form onSubmit={handleServiceSubmit}>
                    <TextField
                      type="text"
                      name="CustomerName"
                      defaultValue={user?.displayName}
                      variant="standard"
                      sx={{ my: 1 }}
                      fullWidth
                      onBlur={handleOnBlur}
                      autoFocus
                    />
                    <br />
                    <TextField
                      type="email"
                      name="CustomerEmail"
                      defaultValue={user?.email}
                      variant="standard"
                      sx={{ my: 1 }}
                      fullWidth
                      onBlur={handleOnBlur}
                      autoFocus
                    />
                    <br />
                    <TextField
                      type="number"
                      name="PhoneNumber"
                      label="Phone Number"
                      variant="standard"
                      sx={{ my: 1 }}
                      fullWidth
                      onBlur={handleOnBlur}
                    />
                    <br />
                    <TextField
                      type="text"
                      name="City"
                      label="City"
                      variant="standard"
                      sx={{ my: 1 }}
                      fullWidth
                      onBlur={handleOnBlur}
                    />
                    <br />

                    <br />
                    <Button variant="contained" sx={{ my: 1 }} type="submit">
                      Place Order
                    </Button>
                  </form>
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Order;
