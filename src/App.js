import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

import Landing from "./pages/landing/landing";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser } from "./redux/actions/data_actions";

import "./App.css";

axios.defaults.baseURL = "http://localhost:5000";

const token = localStorage.MercToken;

//Check validity of JWT token
if (token) {
	const decodedToken = jwtDecode(token);
	//Check if token is expired
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutUser());
		window.location.href = "/login";
	} else {
		store.dispatch({ type: SET_AUTHENTICATED });
		axios.defaults.headers.common["Authorization"] = token;
	}
}

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
					</Switch>
				</Router>
			</Provider>
		</>
	);
}

export default App;
