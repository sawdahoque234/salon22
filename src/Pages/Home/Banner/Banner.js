import { Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.avif";
const Banner = () => {
  return (
    <div style={{ backgroundColor: "#111111", color: "white" }}>
      <Container>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <div data-aos="fade-right">
              <h1 style={{ fontWight: "bold", fontSize: "3em" }}>
                BEAUTY SALON FOR <br /> MEN
              </h1>
              <p style={{ paddingRight: "10rem" }}>
                A beauty salon or beauty parlor is an establishment dealing with
                cosmetic treatments for men .
              </p>

              <Link to="/allServices" style={{ textDecoration: "none" }}>
                <Button
                  sx={{ padding: "10px" }}
                  variant="contained"
                  style={{ backgroundColor: "red", marginTop: "20px" }}
                >
                  Get Appointment
                </Button>
              </Link>
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div
              style={{ textAlign: "center", marginTop: "20px" }}
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <img style={{ width: "80%" }} src={banner} alt="" />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
