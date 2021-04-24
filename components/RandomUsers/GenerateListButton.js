export default function GenerateListButton({ onInputHandler, onClickHandler }) {
  return (
    <div className="w-1/3 h-full grid place-items-center">
      <input
        className="text-black h-8 w-28 px-4 rounded focus:outline-none focus:ring focus:border-gray-400 text-center font-bold"
        type="number"
        onChange={onInputHandler}
      />
      <button
        className="text-white h-8 w-28 py-1 px-4 rounded bg-gray-600 hover:bg-red-100 hover:text-black"
        onClick={onClickHandler}
      >
        GENERATE
      </button>
    </div>
  );
}
