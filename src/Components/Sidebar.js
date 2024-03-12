import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";

const sidebarWidth = "10vw"; 

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
              paddingLeft: "16px",
              "&:hover": {
                backgroundColor: "#6274d9", // Change to the desired hover background color
                borderBottom: "3px solid yellow", // Add border on hover
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                marginBottom: "4px",
                alignItems: "center",
                fontSize: "1rem",
                paddingLeft: "35px",
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
              sx={{ fontSize: '12px', marginTop: 0, alignSelf: "center" }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
