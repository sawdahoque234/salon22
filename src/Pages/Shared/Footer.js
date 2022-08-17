import { Button, Container, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "20px" }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "2em" }}>
            <h3>Help</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Linkedin</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "2em" }}>
            <h3>Company</h3>
            <p>Emergency Services</p>
            <p>Checkup</p>
            <p>Treatment of Personal Diseases</p>
            <p>Tooth Extraction</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "2em" }}>
            <h3 className="footer-title">Quick Links</h3>
            <p>Terms & Condition</p>
            <p>Sales</p>
            <p>Contact</p>
            <p>Blogs</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "2em" }}>
            <h3 className="footer-title">Our Address</h3>
            <p>
              Anderkilla,Chittagong
              <br />
              Bangladesh. <br />
              salon22@gmail.com <br />
              <br />
              From 9AM to 9PM .
            </p>
            <div style={{ marginTop: "3em" }}>
              <p>Call Now</p>
              <Button variant="contained" style={{ backgroundColor: "red" }}>
                0198888888888
              </Button>
            </div>
          </Grid>
        </Grid>
        <p style={{ textAlign: "center", paddingBottom: "20px" }}>
          Copyright @2021 All Right Reserved || salon22
        </p>
      </Container>
    </div>
  );
};

export default Footer;
