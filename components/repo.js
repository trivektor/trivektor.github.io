const Repo = ({ repo }) => {
  return (
    <div className="p-4 border bg-black text-white rounded-xl">
      <div className="text-emerald-500 font-bold">{repo.full_name}</div>
      <div className="text-stone-400">{repo.language}</div>
    </div>
  );
};

export default Repo;
