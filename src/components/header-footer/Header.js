import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";
import Hidden from "@material-ui/core/Hidden";

export default class Header extends Component {
  state = {
    drawerOpen: false
  };
  // This works great for a single page.  IF you have routes, use componentDidUnmount
  // to remove the eventListener when the user navigates to a new page
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        showHeader: true
      });
    } else {
      this.setState({
        showHeader: false
      });
    }
  };
  toggleDrawer = value => {
    this.setState({
      drawerOpen: value,
      showHeader: false
    });
  };
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.showHeader ? "#2f2f2f" : "transparent",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          {/* <Hidden xsDown> */}
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">
              The Genrose Concert Hall
            </div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          {/* </Hidden> */}

          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}
