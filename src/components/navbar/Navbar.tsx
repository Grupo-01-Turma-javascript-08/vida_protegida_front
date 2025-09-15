import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Cadastro</Link>
				</li>
				<li>
					<Link to="/home">Home</Link>
				</li>

				<li>
					<Link to="/produtos">Produtos</Link>
				</li>

				<li>
					<Link to="/categorias">Categorias</Link>
				</li>

			</ul>
		</nav>
	)
}

export default Navbar;
