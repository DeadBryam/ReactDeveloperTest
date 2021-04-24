export default function DataTable({ data, filter }) {
  return (
    <div className="my-4">
      <table className="table-auto text-white text-center w-full">
        <thead className="bg-gray-700">
          <tr className="h-16">
            {filter?.map(
              (item, index) =>
                item.isChecked && (
                  <th key={index}>
                    {item.name}
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((value, index) => (
            <tr className="bg-gray-600 h-9" key={index}>
              {filter?.map(
                (item, filterIndex) =>
                  item.isChecked && (
                    <td key={filterIndex}>{value[item.name.toLowerCase()]}</td>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
