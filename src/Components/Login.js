import React from "react";
import backgroundImage from "../Images/login-bg.svg";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import LoginLogo from "../Images/taxcpc-logo.svg";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          backgroundColor: "transparent",
          padding: 3,
          paddingRight: "10%",
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
            width: "25%",
            height: "75vh",
            overflow: "hidden",
            marginTop: "20px"
          }}
        >
          <img src={LoginLogo} alt="Logo" style={{ marginBottom: "10px", height: "90px", width: "170px" }} />
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
              sx={{ mt: 2 }}
            >
              Login Now
            </Button>
            <Typography variant="body2" sx={{ paddingTop: "10px" }}>
              Don’t have an account yet?{" "}
              <Link href="#" color="primary">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Login;
