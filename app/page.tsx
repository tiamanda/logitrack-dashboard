import StatCard from "./componentes/StatCard";
import Sidebar from "./componentes/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-100">
      <Sidebar />

        <section className="flex-1 p-8">
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