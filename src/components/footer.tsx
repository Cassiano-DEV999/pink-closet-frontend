import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-200 text-black py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Pink Closet. Todos os direitos reservados.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 hover:text-pink-500" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-5 h-5 hover:text-pink-500" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5 hover:text-pink-500" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
