import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[var(--color-background)] text-[var(--color-foreground)] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
          Pink Closet
        </Link>

        <nav className="flex items-center space-x-6">
          <Link to="/login" className="hover:text-pink-600">
            Login
          </Link>
          <Link to="/cadastro" className="hover:text-pink-600">
            Cadastre-se
          </Link>
          <Link to="/produtos" className="hover:text-pink-600">
            Produtos
          </Link>
          <Link to="/sobre" className="hover:text-pink-600">
            Sobre
          </Link>
          <Link to="/contato" className="hover:text-pink-600">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
