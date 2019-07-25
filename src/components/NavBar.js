import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="subtitle1" color="inherit">
					Re-Forkit
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
