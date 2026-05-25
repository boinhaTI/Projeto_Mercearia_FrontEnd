export default function DashboardCard({titulo, valor}) {
  return (
    <div className="bg-white flex-1 p-6 rounded-3xl shadow-lg">
      <h2 className="text-gray-500 mb-2">{titulo}</h2>
      <p className="text-4xl font-bold text-orange-600">{valor}</p>
    </div>
  );
}