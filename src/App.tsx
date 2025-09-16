import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { HomePage } from "./pages/home/Home";
import { SobrePage } from "./pages/sobre/Sobre";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./contexts/AuthContext";
import DeletarProduto from "./components/produtos/deletaproduto/DeletarProduto";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import ListarProduto from "./components/produtos/listaproduto/ListarProduto";
import Login from "./pages/login/Login";



function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/sobre" element={<SobrePage />} />
						<Route path="/cadastro" element={<Cadastro setCurrentPage={() => { }} />} />
						<Route path="/produtos" element={<ListarProduto />} />
						<Route path="/cadastrarproduto" element={<FormProduto />} />
						<Route path="/editarproduto/:id" element={<FormProduto />} />
						<Route path="/deletarproduto/:id" element={<DeletarProduto />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
