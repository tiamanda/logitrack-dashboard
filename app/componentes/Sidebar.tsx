export default function Sidebar() {
    return (
        <aside className="flex min-h screen w-64 flex-col border-r bg-white p-6">
            <div className="mb-10">
                <h1 className="text-2x1 font-bold text-slate-900">
                    LogiTrack
                </h1>

                <p className="text-sm text-slate-500">
                    Logistics Analytics
                </p>
            </div>

            <nav className="space-y-2">
                <a 
                href="#"
                className="block rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white" 
                >
                    Dashboard 
                </a>

                <a 
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                    Pedidos
                </a>

                <a 
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                    Relatórios
                </a>

                <a 
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                    Configurações
                </a>
            </nav>
        </aside>
    );
}