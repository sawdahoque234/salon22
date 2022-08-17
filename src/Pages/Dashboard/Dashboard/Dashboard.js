import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { Outlet, Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const drawerWidth = 240;

const Dashboard = (props) => {
  const { logOut, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List sx={{ marginLeft: "20px" }}>
        {admin ? (
          <Box>
            <Link to={`/dashboard/manageOrders`}>
              {" "}
              <Button
                style={{
                  color: "black",
                  fontWeight: "200",
                  fontSize: "20px",
                }}
              >
                Manage Orders
              </Button>{" "}
            </Link>{" "}
            <br />
            <Link to={`/dashboard/manageProducts`}>
              {" "}
              <Button
                style={{
                  color: "black",
                  fontWeight: "200",
                  fontSize: "20px",
                }}
              >
                Manage Service
              </Button>{" "}
            </Link>{" "}
            <br />
            <Link to={`/dashboard/makeAdmin`}>
              {" "}
              <Button
                style={{
                  color: "black",
                  fontWeight: "200",
                  fontSize: "20px",
                }}
              >
                Make Admin
              </Button>{" "}
            </Link>{" "}
            <br />
            <Link to={`/dashboard/addService`}>
              {" "}
              <Button
                style={{
                  color: "black",
                  fontWeight: "200",
                  fontSize: "20px",
                }}
              >
                Add Service
              </Button>{" "}
            </Link>{" "}
            <br />
          </Box>
        ) : (
          <Box>
            <Link to={`/dashboard/myOrder`}>
              {" "}
              <Button
                style={{
                  color: "black",
                  fontWeight: "200",
                  fontSize: "20px",
                }}
              >
                My Order
              </Button>{" "}
            </Link>{" "}
            <br />
            <Link to={`/dashboard/review`}>
              {" "}
              <Button
                style={{
                  color: "black",
                  fontWeight: "200",
                  fontSize: "20px",
                }}
              >
                Review
              </Button>{" "}
            </Link>{" "}
            <br />
          </Box>
        )}
        <Link to="/">
          {" "}
          <Button
            style={{
              color: "black",
              fontWeight: "200",
              fontSize: "20px",
            }}
          >
            Home
          </Button>{" "}
        </Link>{" "}
        <br />
        <Button onClick={logOut} variant="contained">
          LogOut
        </Button>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#ef5350",
        }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            style={{
              backgroundColor: "#ef5350",
              marginTop: "20px",
            }}
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Dashboard;
