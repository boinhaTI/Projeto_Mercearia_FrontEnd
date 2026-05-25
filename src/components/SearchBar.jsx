export default function SearchBar({search, setSearch}) {

  return (
    <input type="text" placeholder="Pesquisar produto..." value={search} onChange={(e) =>
        setSearch(e.target.value)}className="w-full p-4 rounded-2xl border mb-6 bg-white shadow-md"/>
  );
}