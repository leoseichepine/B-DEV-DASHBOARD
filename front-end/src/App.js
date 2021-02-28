import "react-perfect-scrollbar/dist/css/styles.css";
import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import "./mixins/chartjs";
import theme from "./theme";
import routes from "./routes";
import UserProfile from "./UserProfile.js";

const App = () => {
	const [isLoggedIn, setLoggedIn] = useState(UserProfile.isLoggedIn());

	const loginHandler = (val) => {
		setLoggedIn(val);
		if (val === false) {
			UserProfile.disconnect();
		} else {
			UserProfile.setLoggedIn(val);
		}
	};

	const routing = useRoutes(routes(isLoggedIn, loginHandler));

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{routing}
		</ThemeProvider>
	);
};

export default App;
