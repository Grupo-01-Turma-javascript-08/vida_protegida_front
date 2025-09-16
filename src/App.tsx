import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { HomePage } from "./pages/home/Home";
import { SobrePage } from "./pages/sobre/Sobre";
import Cadastro from "./pages/cadastro/Cadastro";
import Categorias from "./pages/categorias/Categorias";
import ListaUsuario from "./components/usuario/listausuario/ListaUsuario";
import { AuthProvider } from "./contexts/AuthContext";
import DeletarProduto from "./components/produtos/deletaproduto/DeletarProduto";
import FormProduto from "./components/produtos/formproduto/FormProduto";
import ProdutosPage from "./pages/produtos/Produtos";
import Login from "./pages/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
	const [currentPage, setCurrentPage] = useState<string>("home");
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navbar />
				<ToastContainer position="top-right" autoClose={3000} />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/sobre" element={<SobrePage />} />
						<Route path="/cadastro" element={<Cadastro setCurrentPage={setCurrentPage} />} />
						<Route path="/login" element={<Login setCurrentPage={setCurrentPage} />} />
						
						<Route path="/cadastrarproduto" element={<FormProduto />} />
						<Route path="/editarproduto/:id" element={<FormProduto />} />
						<Route path="/deletarproduto/:id" element={<DeletarProduto />} />
						<Route path="/categorias" element={<Categorias />} />
						<Route path="/usuarios" element={<ListaUsuario />} />
						<Route path="/produtos" element={<ProdutosPage />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
