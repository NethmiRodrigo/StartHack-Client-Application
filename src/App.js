import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navbar/navbar";
import Landing from "./pages/landing/landing";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Landing} />
			</Switch>
		</Router>
	);
}

export default App;
