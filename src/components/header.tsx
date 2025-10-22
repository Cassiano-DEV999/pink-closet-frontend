import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-pink-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold">
          Pink Closet
        </Link>
        <nav className="flex gap-6 items-center">
          <Link to="/products" className="hover:underline">Produtos</Link>
          <Link to="/about" className="hover:underline">Sobre</Link>
          <Link to="/contact" className="hover:underline">Contato</Link>
          <ShoppingCart className="w-6 h-6 cursor-pointer" />
          <User className="w-6 h-6 cursor-pointer" />
        </nav>
      </div>
    </header>
  );
}
