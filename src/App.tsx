import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { HomePage } from "./pages/home/Home";
import { SobrePage } from "./pages/sobre/Sobre";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="min-h-[80vh]">
				<Routes>
					<Route path="/home" element={<HomePage />} />
					<Route path="/sobre" element={<SobrePage />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
