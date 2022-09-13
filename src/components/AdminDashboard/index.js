import React from "react";
import DrawerLeft from "./DrawerLeft";
import AdminNavbar from "./AdminNavbar";
import Main from "./MainContent";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

const AdminDashboard = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const drawerWidth = 240;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

  return (
    <Box sx={{ display: "flex",pt:'3rem' }}>
      <CssBaseline/>
      {/* <AdminNavbar handleDrawerToggle={handleDrawerToggle} /> */}
      <DrawerLeft open={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor:'#F9FAFC'
        }}
      >
        <Toolbar/>
        <Main/>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
