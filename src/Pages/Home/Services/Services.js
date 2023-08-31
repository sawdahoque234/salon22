import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  // get data from database
  useEffect(() => {
    fetch("https://sallonserver.onrender.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: "3rem" }}>
        {" "}
        Our Awesome <span style={{ color: "red" }}>Services</span>
      </h3>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.slice(0, 3).map((service) => (
              <Service service={service} key={service.id}></Service>
            ))}
          </Grid>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Link to="/allServices" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "red",
                color: "white",
                marginTop: "10px",
                padding: "18px",
              }}
            >
              Explore More
            </Button>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Services;
