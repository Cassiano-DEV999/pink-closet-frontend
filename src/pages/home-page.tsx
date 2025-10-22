import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Exemplo de produtos
const produtos = [
  { id: 1, nome: "Vestido Floral", img: "https://via.placeholder.com/300x400" },
  { id: 2, nome: "Blusa Rosa", img: "https://via.placeholder.com/300x400" },
  { id: 3, nome: "Saia Jeans", img: "https://via.placeholder.com/300x400" },
  { id: 4, nome: "Bolsa Chic", img: "https://via.placeholder.com/300x400" },
  { id: 5, nome: "Sapato Fashion", img: "https://via.placeholder.com/300x400" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Seção de produtos com Carousel */}
      <section className="flex flex-col items-center mt-10 px-4 md:px-20 w-full">
        <h2 className="text-2xl font-semibold mb-6">Produtos em Destaque</h2>

        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-6xl relative"
        >
          <CarouselContent className="gap-4">
            {produtos.map((produto) => (
              <CarouselItem key={produto.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-2">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="flex flex-col items-center justify-center p-2">
                      <img
                        src={produto.img}
                        alt={produto.nome}
                        className="w-full h-64 object-cover rounded-md"
                      />
                      <h3 className="mt-2 font-medium text-lg text-center">{produto.nome}</h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-pink-100 transition">
            ◀
          </CarouselPrevious>
          <CarouselNext className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-pink-100 transition">
            ▶
          </CarouselNext>
        </Carousel>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
