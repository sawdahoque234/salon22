import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

const Testimonial = ({ review }) => {
  const { name, image, rating, description, designation } = review;
  return (
    <Grid item xs={4} sm={4} md={4} sx={{ marginBottom: "40px" }}>
      <Card
        sx={{ minWidth: 275, border: 0, boxShadow: 3 }}
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <CardMedia
          component="img"
          height="200"
          style={{
            borderRadius: "50%",
            width: "60%",
            display: "block",
            margin: "auto",
          }}
          image={image}
          alt="green iguana"
        />

        <CardContent>
          <Typography sx={{ textAlign: "center" }} gutterBottom>
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: 12, textAlign: "center" }}
            color="text.secondary"
            gutterBottom
          >
            {designation}
          </Typography>

          <Typography
            sx={{ fontSize: 14, mb: 1.5, textAlign: "center" }}
            color="text.secondary"
          >
            {description?.slice(0, 125)}
          </Typography>
          <div style={{ textAlign: "center" }}>
            <Rating
              name="half-rating-read"
              defaultValue={parseInt(rating)}
              readOnly
            />
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Testimonial;
