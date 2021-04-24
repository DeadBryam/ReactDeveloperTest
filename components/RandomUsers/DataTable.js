export default function DataTable({ data, filter }) {
  console.log(data[0]["AGE"]);
  return (
    <div className="my-4 ali">
      <table className="table-fixed text-white text-center">
        <thead className="bg-gray-700">
          <tr className="h-16">
            {filter?.map(
              (item) =>
                item.isChecked && <th className="w-1/12">{item.name}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data?.map((value, index) => (
            <tr className="bg-gray-600 h-9" key={index}>
              {filter?.map(
                (item) =>
                  item.isChecked && <td>{value[item.name.toLowerCase()]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
