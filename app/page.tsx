import StatCard from "./componentes/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100">
      <header className="border-b bg-white px-8 py-5">
        <h1 className="text-2x1 font-bold text-slate-900">
          LogiTrack
        </h1>

        <p className="text-sm text-slate-500">
          Logistics Analytics Dashboard
        </p>
        </header>

        <section className="p-8">
          <h2 className="mb6 text-2x1 font-semibold text-slate-900">
            Dashboard
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <StatCard
              title="Pedidos"
              value="12.450"
            />

            <StatCard 
              title="Divergências"
              value="328"
            />

            <StatCard
              title="Qualidade"
              value="94,7%"
            />

            </div>
          </section>  
      </main>
  );
}