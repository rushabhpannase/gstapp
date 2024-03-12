import React from "react";
import { Typography, Box, TextField, Button, Link, Paper } from "@mui/material";
import LoginLogo from "../Images/taxcpc-logo.svg";
import backgroundImage from "../Images/login-bg.svg";
import LoginPageImage from "../Images/loginpage-image.svg";
import { Link as RouterLink } from 'react-router-dom';

const ResetPasswordForm = () => {
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
              height: "75vh",
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
              Reset Your Password{" "}
            </Typography>
            <Box component="form" sx={{ mt: 1 }} noValidate autoComplete="off">
              <TextField
                margin="normal"
                required
                fullWidth
                id="Enter Branch Name"
                label="Enter Branch Name"
                name="Enter Branch Name"
                autoComplete="Enter Branch Name"
                autoFocus
                sx={{ backgroundColor: "#DCF4FE" }} 
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Enter Branch Code"
                label="Enter Branch Code"
                type="Enter Branch Code"
                id="Enter Branch Code"
                autoComplete="current-password"
                sx={{ backgroundColor: "#DCF4FE" }} 
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, borderRadius: 2 }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: "12px", padding: "9px" }}
                >
                  Send Request To Reset Password
                </Typography>
              </Button>

              <Typography
                variant="body2"
                sx={{ paddingTop: "20px", textAlign: "center" }}
              >
                <Link href="#" color="primary" underline="none">
                  Back to Login
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

export default ResetPasswordForm;
