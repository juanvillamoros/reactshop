import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import Home from "@pages/Home";
import AppContext from "@context/AppContext";
import useInitialState from "../hooks/useInitailState";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import NewPassword from "@pages/NewPassword";
import MyAccount from "@pages/MyAccount";
import CreateAccount from "@pages/CreateAccount";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import NotFound from "@pages/NotFound";
import "@styles/global.scss";

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/" element={<Login />}></Route>
						<Route path="/" element={<PasswordRecovery />}></Route>
						<Route path="/" element={<SendEmail />}></Route>
						<Route path="/" element={<NewPassword />}></Route>
						<Route path="/" element={<MyAccount />}></Route>
						<Route path="/" element={<CreateAccount />}></Route>
						<Route path="/" element={<Checkout />}></Route>
						<Route path="/" element={<Orders />}></Route>
						<Route path="*" element={<NotFound />}></Route>
					</Routes>
				</Layout>
			</Router>
		</AppContext.Provider>
	);
}

export default App;