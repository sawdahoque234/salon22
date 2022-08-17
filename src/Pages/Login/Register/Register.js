import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/Image/Logo.png";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, userRegister, isLoading, authError } = useAuth();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData };
    newLoginData[field] = value;
    setRegisterData(newLoginData);
  };

  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("password did not matched");
      return;
    }
    userRegister(
      registerData.email,
      registerData.password,
      registerData.name,
      navigate
    );
    e.preventDefault();
  };

  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <img style={{ width: "300px" }} src={logo} alt="" />
        </div>
        <div>
          <div style={{ margin: "0 auto" }}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "30px",
                color: " #c51162",
              }}
            >
              Register
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                className="form-login"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5px",
                  padding: "20px 30px",
                }}
              >
                <form onSubmit={handleRegisterSubmit}>
                  <TextField
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                    label="Your Name"
                    variant="standard"
                    sx={{ my: 1 }}
                    fullWidth
                  />
                  <br />
                  <TextField
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                    label="Email"
                    variant="standard"
                    sx={{ my: 1 }}
                    fullWidth
                  />
                  <br />

                  <TextField
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    label="Password"
                    variant="standard"
                    sx={{ my: 1 }}
                    fullWidth
                  />
                  <br />
                  <TextField
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    label="Retype Password"
                    variant="standard"
                    sx={{ my: 1 }}
                    fullWidth
                  />
                  <br />

                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#ef5350", marginTop: "20px" }}
                    sx={{ my: 1 }}
                    type="submit"
                  >
                    Register
                  </Button>
                </form>
                <p style={{ textAlign: "center" }}>
                  Already have an account?
                  <Link to="/login">Go to Login</Link>
                </p>
                <br />
                {isLoading && (
                  <div style={{ textAlign: "center" }}>
                    <CircularProgress color="success" />
                  </div>
                )}
                {user?.email && (
                  <Alert severity="success">User Register successful</Alert>
                )}
                {authError && <Alert severity="error">{authError}</Alert>}
              </Box>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Register;
