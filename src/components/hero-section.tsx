export default function HeroSection() {
  return (
    <section className="py-16 bg-(--color-background)">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-(--color-primary)">
          Descubra a nova coleção Pink Closet
        </h1>
        <p className="text-(--color-foreground) text-lg mb-8">
          Moda feminina, delicada e sofisticada, direto pra você.
        </p>
        <img
          src="/banners/banner-home.jpg"
          alt="Banner principal"
          className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
