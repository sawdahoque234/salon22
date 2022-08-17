import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Service from "../Home/Service/Service";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";

const AllServices = () => {
  const [services, setServices] = useState([]);

  // get data from database
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <h3 style={{ textAlign: "center", fontSize: "3rem" }}>
            {" "}
            Our All <span style={{ color: "red" }}>Services</span>
          </h3>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Service service={service} key={service.id}></Service>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AllServices;
