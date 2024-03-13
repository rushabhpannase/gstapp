import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Paper,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginLogo from "../Images/taxcpc-logo.svg";
import backgroundImage from "../Images/login-bg.svg";
import LoginPageImage from "../Images/loginpage-image.svg";
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start", // Align items at the start of the cross axis
      }}
    >
      {/* Left section */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="50%" // Adjusted width to take up half of the viewport
        p={2}
      >
        {/* Left side with graphics and TDS message */}
        <Box>
          <Typography
            style={{ paddingLeft: "60px", marginBottom: "0.25rem" }}
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "Bold", color: "#C7F9FF", fontSize: "50px" }}
          >
            TaxCPC
          </Typography>
          <Typography
            style={{ letterSpacing: "3.5px", paddingLeft: "60px" }}
            variant="subtitle1"
            sx={{ fontSize: "20px", color: "#C7F9FF" }}
          >
            TDS Excellence Redefined: Introducing <br />
            TaxCPC Innovative TDS Software for <br />
            Enterprises
          </Typography>
          {/* Placeholder for graphics */}
          <Box my={1} display="flex" justifyContent="center">
            <img
              src={LoginPageImage}
              alt="TDS Graphics"
              style={{ width: "450px", height: "330px", paddingLeft: "50px" }}
            />
          </Box>
        </Box>
      </Box>

      {/* Right section */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="50%" // Adjusted width to take up half of the viewport
        p={2}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%", // Adjusted width to fit the right section
          }}
        >
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 3,
              borderRadius: 5,
              width: "100%", // Adjusted width to fit the right section
              height: "80vh",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >
            <img
              src={LoginLogo}
              alt="Logo"
              style={{ marginBottom: "10px", height: "90px", width: "170px" }}
            />
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold", color: "black" }}
            >
              Login{" "}
              <Typography variant="h6" component="span" sx={{ color: "grey" }}>
                to your account
              </Typography>
            </Typography>
            <Box component="form" sx={{ mt: 1 }} noValidate autoComplete="off">
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                sx={{ backgroundColor: "#DCF4FE" }} 
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handlePasswordVisibilityToggle}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
                sx={{ backgroundColor: "#DCF4FE" }} 
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "0.5rem",
                }}
              >
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={
                    <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                      Remember me
                    </Typography>
                  }
                  sx={{ fontSize: "0.8rem", float: "left" }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.8rem", float: "right" }}
                >
                  <Link href="#">Forgot Password?</Link>
                </Typography>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, borderRadius: 2 }}
              >
                Login Now
              </Button>
              <Typography variant="body2" sx={{ paddingTop: "10px", textAlign: "center" }}>
                Don't have an account yet?{" "}
                <Link href="#" color="primary">
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Paper>
          {/* Additional text */}
          <Typography
            variant="body2"
            sx={{ color: "#78A2E8", marginTop: "20px", fontSize: "11px" }}
          >
            Copyright © TaxCPC 2024. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
