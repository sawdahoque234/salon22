import { Alert, Box, Button, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import "./Media.css";

const AddService = () => {
  // all State
  const [newServiceData, setNewServiceData] = useState({});
  const [success, setSuccess] = useState("");

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
    axios
      .post("http://localhost:5000/addService", newServiceData)
      .then((res) => {
        const success = res.data.insertedId;
        console.log(success);
        if (success) {
          setSuccess("Add Service Success");
        }
      });
    window.location.reload();
  };

  return (
    <div>
      <div style={{ margin: "0 auto" }}>
        <h3 style={{ textAlign: "center", fontSize: "30px" }}>
          Add New Service
        </h3>
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

            <form onSubmit={handleServiceSubmit}>
              <TextField
                type="text"
                name="name"
                onBlur={handleOnBlur}
                label="Service Name"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />
              <TextField
                type="number"
                name="price"
                onBlur={handleOnBlur}
                label="Price"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />

              <TextField
                type="text"
                name="image"
                onBlur={handleOnBlur}
                label="Image Link"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />

              <TextareaAutosize
                onBlur={handleOnBlur}
                name="description"
                aria-label="minimum height"
                minRows={5}
                placeholder="Description....."
                style={{ width: "100%", marginTop: "10px", fontSize: "17px" }}
              />
              <br />
              <Button variant="contained" sx={{ my: 1 }} type="submit">
                Add Service
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AddService;
