
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Texto principal */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Vida Protegida. Todos os direitos reservados.
        </p>

        {/* Links sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <GithubLogo size={22} weight="bold" />
          </a>

          <a
            href="https://linkedin.com/in/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
          >
            <LinkedinLogo size={22} weight="bold" />
          </a>

          <a
            href="mailto:seuemail@exemplo.com"
            className="hover:text-gray-200 transition-colors"
          >
            <Envelope size={22} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer