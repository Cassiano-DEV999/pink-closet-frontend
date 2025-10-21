import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-(--color-background) text-(--color-foreground) py-10 mt-10 border-t border-(--color-border)">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Sobre */}
        <div>
          <h3 className="text-lg font-semibold text-(--color-primary) mb-4">Pink Closet</h3>
          <p className="text-sm">Moda feminina, delicada e sofisticada. Descubra nossas coleções e encontre seu estilo.</p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold text-(--color-primary) mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2"><Mail size={16} /><span>contato@pinkcloset.com</span></li>
            <li className="flex items-center space-x-2"><Phone size={16} /><span>(11) 99999-9999</span></li>
            <li className="flex items-center space-x-2"><MapPin size={16} /><span>São Paulo, SP</span></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold text-(--color-primary) mb-4">Siga-nos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-600"><Instagram size={24} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-(--color-primary)">
        &copy; {new Date().getFullYear()} Pink Closet. Todos os direitos reservados.
      </div>
    </footer>
  );
}
