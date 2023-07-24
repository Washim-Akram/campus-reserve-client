const SearchField = () => {
  return (
    <div className="mt-20 md:mt-40 flex items-center justify-center p-5">
      <input
        type="text"
        placeholder="Search College"
        className="input input-bordered input-info w-full max-w-md"
      />
    </div>
  );
};

export default SearchField;
