import { Alert, Box, Button, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Review = () => {
  // all State
  const [newReviewData, setNewReviewData] = useState({});
  const [success, setSuccess] = useState("");

  // get data from form
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    newReviewData[field] = value;
    setNewReviewData(newReviewData);
  };

  // send data backend
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://intense-forest-82602.herokuapp.com/addReview",
        newReviewData
      )
      .then((res) => {
        const success = res.data.insertedId;

        if (success) {
          setSuccess("Add Review Success");
        }
      });
  };

  return (
    <div>
      <div style={{ margin: "0 auto" }}>
        <h3 style={{ textAlign: "center", fontSize: "30px" }}>Review</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            className="form-width"
            sx={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "20px 30px",
            }}
          >
            {success && <Alert severity="success">{success}</Alert>}
            <form onSubmit={handleReviewSubmit}>
              <TextField
                type="text"
                name="name"
                onBlur={handleOnBlur}
                label="Customer Name"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />
              <TextField
                type="text"
                name="designation"
                onBlur={handleOnBlur}
                label="Designation"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />
              <TextField
                type="number"
                name="rating"
                onBlur={handleOnBlur}
                label="Rating"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />

              <TextField
                type="text"
                name="image"
                onBlur={handleOnBlur}
                label="Profile Image"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />

              <TextareaAutosize
                aria-label="minimum height"
                onBlur={handleOnBlur}
                name="description"
                minRows={5}
                placeholder="Description....."
                style={{ width: "100%" }}
              />

              <br />
              <Button variant="contained" sx={{ my: 1 }} type="submit">
                Send Review
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Review;
