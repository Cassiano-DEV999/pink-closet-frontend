import { Link } from "react-router-dom";

export default function CollectionSection() {
  const produtos = [
    { id: 1, nome: "Vestido Rosa", preco: 199.9, imagem: "/produtos/vestido1.jpg" },
    { id: 2, nome: "Saia Midi", preco: 149.9, imagem: "/produtos/saia1.jpg" },
    { id: 3, nome: "Blusa Floral", preco: 99.9, imagem: "/produtos/blusa1.jpg" },
    { id: 4, nome: "Calça Jeans", preco: 129.9, imagem: "/produtos/calca1.jpg" },
  ];

  return (
    <section className="py-16 bg-(--color-background-light)">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-(--color-primary)">
          Novidades da Coleção
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {produtos.map((produto) => (
            <div key={produto.id} className="card flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
              <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col grow">
                <h3 className="text-lg font-semibold text-(--color-foreground) mb-2">{produto.nome}</h3>
                <p className="text-(--color-primary) font-semibold mb-4">R$ {produto.preco.toFixed(2)}</p>
                <Link to={`/produto/${produto.id}`} className="mt-auto btn-primary text-center">
                  Ver Produto
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
