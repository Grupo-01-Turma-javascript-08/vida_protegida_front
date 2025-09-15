import React from 'react';
import { Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#f0f9ff] border-t border-[#bae6fd] py-6 text-center text-[#334155]">
      <div className="flex justify-center items-center gap-4 mb-2">
        <a
          href="https://github.com/Grupo-01-Turma-javascript-08/vida_protegida_front"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#38bdf8] hover:text-[#0ea5e9] transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
      <p className="text-sm text-[#334155]/70">
        © 2025 Vida Protegida. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;