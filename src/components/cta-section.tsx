export default function CTASection() {
  return (
    <section className="py-16 bg-(--color-primary) text-white text-center">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-semibold mb-4">Quer receber novidades exclusivas?</h2>
        <p className="mb-6">Assine nossa newsletter e fique por dentro das novas coleções e promoções.</p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input 
            type="email" 
            placeholder="Digite seu e-mail" 
            className="p-3 rounded-md grow text-(--color-foreground)"
          />
          <button type="submit" className="btn-primary px-6 py-3 rounded-md bg-white text-(--color-primary) font-semibold hover:bg-gray-100">
            Assinar
          </button>
        </form>
      </div>
    </section>
  );
}
