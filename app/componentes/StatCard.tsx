interface StatCardProps {
    title: string;
    value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <div className="rounded-x1 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
                {title}
            </p>

            <p className="mt-2 text-3x1 font-bold text-slate-900">
                {value}
            </p>
        </div>

    );
    
}