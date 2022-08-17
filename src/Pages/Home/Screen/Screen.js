import { Container, Grid } from "@mui/material";
import React from "react";
import screen from "../../../images/screen.avif";

const Screen = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "30px",
        color: "white",
        marginTop: "20px",
      }}
    >
      <Container>
        <Grid
          container
          sx={{
            mt: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <div data-aos="zoom-in">
              <img
                style={{ width: "70%", borderRadius: "10px" }}
                height="450px"
                src={screen}
                alt=""
              />
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div data-aos="fade-down" data-aos-duration="1000">
              <h3 style={{ fontWight: "bold", fontSize: "3em" }}>
                Let us handle you <br /> More{" "}
                <span style={{ color: "red" }}> Stylish</span>.{" "}
              </h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                ipsa atque. Autem numquam, voluptate impedit laborum ab quidem
                ut dolore fuga at enim quasi reprehenderit amet! Aliquam
                laudantium dolor amet atque, similique vitae dolorem earum
                accusamus, at ex adipisci aut, ab nostrum maxime. Veritatis
                porro laboriosam autem quaerat impedit dolores! Earum, fugit
                commodi. Neque, illum laudantium ab at ipsam nam, totam placeat
                excepturi officia commodi doloremque voluptatem molestiae culpa
                fuga. Nostrum, ut quam? Minima ullam iste et in nulla nobis sunt
                voluptatum quasi. Cum nesciunt dolores aperiam eius commodi
                dolor consequuntur atque eaque dolorem. Temporibus veritatis qui
                odit culpa iure.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1 style={{ color: "red", fontSize: "3rem" }}>500+</h1>
                  <p>Happy Customer</p>
                </div>
                <div>
                  <h1 style={{ color: "red", fontSize: "3rem" }}>16+</h1>
                  <p>Total Services</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Screen;
