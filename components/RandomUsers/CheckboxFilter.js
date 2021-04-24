export default function CheckboxFilter({ checkboxList, onCheckboxChange }) {
  return (
    <div className="w-2/3 h-full text-white">
      <p className="font-bold text-2xl text-center">FILTERS</p>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-1">
        {checkboxList?.map((item, index) => (
          <div className="h-9" key={index}>
            <label className="text-lg">
              <input
              className="h-5 w-5 my-2 mx-5"
                type="checkbox"
                id={index}
                value={item.name}
                checked={item.isChecked}
                onChange={onCheckboxChange}
              />
              {item.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
