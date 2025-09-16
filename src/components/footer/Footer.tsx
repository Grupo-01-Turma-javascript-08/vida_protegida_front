
import { Mail,} from 'lucide-react';
import { XLogoIcon, RedditLogoIcon, FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react"

function Footer() {
  return (
    <footer className="bg-[#f0f9ff] border-t border-[#bae6fd] text-[#334155] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        <div>
          <h4 className="font-semibold text-[#38bdf8] mb-2">Telefone</h4>
          <a href="#" className="hover:underline block">0800 123 4567</a>
        </div>

        <div>
          <h4 className="font-semibold text-[#38bdf8] mb-2">Contato</h4>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#38bdf8]" />
            <a href="mailto:dpo@vidaprotegida.com.br" className="hover:underline">
              dpo@vidaprotegida.com.br
            </a>
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#38bdf8] mb-2">Redes Sociais</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#0ea5e9] transition-colors">
              <LinkedinLogoIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#0ea5e9] transition-colors">
              <FacebookLogoIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#0ea5e9] transition-colors">
              <InstagramLogoIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-[#0ea5e9] transition-colors">
              <XLogoIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Grupo-01-Turma-javascript-08/vida_protegida_front"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0ea5e9] transition-colors"
            >
              <GithubLogoIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.reddit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0ea5e9] transition-colors"
            >
              <RedditLogoIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-xs text-[#334155]/70">
          <p className="mb-2">© 2025 Vida Protegida. Todos os direitos reservados.</p>
          <p>Rua Exemplo, 123 - São Paulo, SP - 00000-000</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;