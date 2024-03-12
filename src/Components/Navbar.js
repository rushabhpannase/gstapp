import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import Logo from "../Images/taxcpc-logo.svg";
import InfoIcon from "@mui/icons-material/Info";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const NavBar = () => {
  // State for handling selects
  const [financialYear, setFinancialYear] = React.useState("23-24");
  const [timePeriod, setTimePeriod] = React.useState("Apr 21 - Feb 22");
  const [bankName, setBankName] = React.useState("BUPGB");

  const handleFinancialYearChange = (event) => {
    setFinancialYear(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const handleBankNameChange = (event) => {
    setBankName(event.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <img src={Logo} alt="Logo" style={{ height: "45px", width: "150px", paddingTop: "7px" }} />
        </Typography>

        <Select
          value={financialYear}
          onChange={handleFinancialYearChange}
          displayEmpty
          sx={{ mr: 1, height: "40px" }}
        >
          <MenuItem value="23-24">FY: 23 - 24</MenuItem>
          <MenuItem value="22-23">FY: 22 - 23</MenuItem>
        </Select>

        <Select
          value="Regular"
          onChange={handleFinancialYearChange}
          displayEmpty
          sx={{ mr: 1, height: "40px" }}
        >
          <MenuItem value="Regular">Regular</MenuItem>
        </Select>

        <Select
          value="Apr 21"
          onChange={handleTimePeriodChange}
          displayEmpty
          sx={{ mr: 1, height: "40px" }}
        >
          <MenuItem value="Apr 21">Apr 21</MenuItem>
          <MenuItem value="Mar 21">Mar 21</MenuItem>
        </Select>

        <Typography sx={{ m: "auto", color: "grey" }}>to</Typography>

        <Select
          value="Feb 22"
          onChange={handleTimePeriodChange}
          displayEmpty
          sx={{ ml: 1, height: "40px" }}
        >
          <MenuItem value="Feb 22">Feb 22</MenuItem>
          <MenuItem value="Mar 22">Mar 22</MenuItem>
        </Select>

        <IconButton
          style={{
            border: "black",
            backgroundColor: "lightblue",
            borderRadius: "5px",
            height: "100%",
            marginRight: "15px",
            marginLeft: "15px",
          }}
        >
          <InfoIcon />
        </IconButton>

        <Select
          value={bankName}
          onChange={handleBankNameChange}
          displayEmpty
          endAdornment={<AccountBalanceIcon />}
          sx={{ height: "40px" }}
        >
          <MenuItem value="BUPGB">BUPGB</MenuItem>
          <MenuItem value="OtherBank">Other Bank</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
