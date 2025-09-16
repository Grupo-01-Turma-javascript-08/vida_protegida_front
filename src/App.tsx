import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { HomePage } from "./pages/home/Home";
import { SobrePage } from "./pages/sobre/Sobre";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";



function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/cadastro" element={<Cadastro setCurrentPage={() => {}} />}/>
						<Route path="/" element={<HomePage />} />
						<Route path="/cadastro" element={<Cadastro setCurrentPage={() => {}} />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/sobre" element={<SobrePage />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
