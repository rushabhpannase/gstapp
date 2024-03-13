import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from "@mui/icons-material/Assessment";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
// import { Typography } from "@mui/material";

const sidebarWidth = "6vw"; 

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: sidebarWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sidebarWidth,
          boxSizing: "border-box",
          backgroundColor: "#3F51B5", // Replace with the color you want
          color: "white",
          marginTop: "4rem", // Add marginTop here
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List
    
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {[
          "Dashboard",
          "GST Reconciliation",
          "Check Vendor Status",
          "Reports",
          "Settings",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: "Auto",
            
              "&:hover": {
                backgroundColor: "#6274d9", // Change to the desired hover background color
                borderBottom: "3px solid yellow", // Add border on hover
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                marginBottom: "2px",
                alignItems: "center",
                fontSize: "0.1rem",
                paddingLeft: "20px",
              }}
            >
              {index === 0 && <DashboardIcon fontSize="small" />}
              {index === 1 && <AssessmentIcon fontSize="small" />}
              {index === 2 && <FactCheckIcon fontSize="small" />}
              {index === 3 && <ArticleIcon fontSize="small" />}
              {index === 4 && <SettingsIcon fontSize="small" />}
            </ListItemIcon>
            <ListItemText
              primary={text}
              primaryTypographyProps={{ variant: "body2", fontSize: "9px" }} // Adjust fontSize here
              sx={{ alignSelf: "center" }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;

