import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/**
 * NavBar:
 *
 * Displays top navbar with links to Home, Snacks, Drinks, & Add Item
 */
function NavBar() {
  return (
		<div>
			<Navbar expand="md">
				<NavLink to="/" className="navbar-brand">Snack or Booze</NavLink>

				<Nav
					className="ml-auto"
					navbar
				>
					<NavItem>
						<NavLink to="/snacks">Snacks</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/drinks">Drinks</NavLink>
					</NavItem>

					<NavItem>
						<NavLink to="/new">Add Item</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
}

export default NavBar;
