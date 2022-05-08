import React from "react";
import { Route, Routes, NativeRouter } from "react-router-native";
import { Exercise } from "./src/screens/Exercise";
import { Home } from "./src/screens/Home";

export default function App() {
	return (
		<NativeRouter >
			<Routes >
				<Route path='/' element={<Home />} />
				<Route path='/exercise' element={<Exercise />} />
			</Routes>
		</NativeRouter>
	);
}
