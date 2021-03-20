import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Authorization route for pages only unauthenticated users can access
const authRoute = ({ component: Component, authenticated, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === false ? (
					<Redirect to="/login" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

const mapStateToProps = (state) => ({
	authenticated: state.data.authenticated,
});

authRoute.propTypes = {
	authenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(authRoute);
