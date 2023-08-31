import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // get data from database
  useEffect(() => {
    fetch("https://sallonserver.onrender.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center", fontSize: "3rem" }}> Testimonials </h3>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {reviews.slice(2, 5).map((review) => (
              <Testimonial review={review} key={review._id}></Testimonial>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Reviews;
