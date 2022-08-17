import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import logo from "../../../images/Image/Logo.png";
import google from "../../../images/Icon/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { singInUsingGoogle, loginWithEmailPass, isLoading, authError } =
    useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginWithEmailPass(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  const googleSingIn = () => {
    singInUsingGoogle(location, navigate);
  };
  return (
    <Container>
      <Box sx={{ my: 5 }}>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <img style={{ width: "300px" }} src={logo} alt="" />
        </div>
        <div>
          <div>
            <div>
              <div style={{ margin: "0 auto" }}>
                <h3
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    color: " #c51162",
                  }}
                >
                  Login
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
                    <form onSubmit={handleLoginSubmit}>
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

                      <Button
                        variant="contained"
                        sx={{ my: 1 }}
                        type="submit"
                        style={{
                          backgroundColor: "#ef5350",
                          marginTop: "20px",
                        }}
                      >
                        Login
                      </Button>
                    </form>
                    <p style={{ textAlign: "center" }}>
                      Don't have an account?
                      <Link to="/register">Go to Register</Link>
                    </p>
                    <br />
                    {isLoading && (
                      <div style={{ textAlign: "center" }}>
                        <CircularProgress color="success" />
                      </div>
                    )}

                    {authError && <Alert severity="error">{authError}</Alert>}
                  </Box>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: "15px 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button className="google-button" onClick={googleSingIn}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img style={{ width: "20px" }} src={google} alt="" />
                  </div>
                  <div style={{ margin: "0 7px" }}>Continue with Google</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Login;
