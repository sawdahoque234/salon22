import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAddAdmin = (e) => {
    const user = { email };
    fetch("https://sallonserver.onrender.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuccess(true);
      });
    e.preventDefault();
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
            <div style={{ textAlign: "center" }}>
              {success && (
                <Alert severity="success">create admin successful</Alert>
              )}
            </div>

            <form onSubmit={handleAddAdmin}>
              <TextField
                type="email"
                name="email"
                onBlur={handleOnBlur}
                label="New Admin Email"
                variant="standard"
                sx={{ my: 1 }}
                fullWidth
              />
              <br />

              <Button variant="contained" sx={{ my: 1 }} type="submit">
                Add Admin
              </Button>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
