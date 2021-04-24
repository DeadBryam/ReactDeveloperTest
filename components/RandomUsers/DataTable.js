export default function DataTable({ data }) {
  return (
    <div className="my-4 ali">
      <table className="table-fixed text-white text-center">
        <thead className="bg-gray-700">
          <tr className="h-16">
            <th className="w-2/12">NAME</th>
            <th className="w-1/12">AGE</th>
            <th className="w-2/12">EMAIL</th>
            <th className="w-1/12">USERNAME</th>
            <th className="w-1/12">PASSWORD</th>
            <th className="w-2/12">ADDRESS</th>
            <th className="w-2/12">PHONE</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((value, index) => (
            <tr className="bg-gray-600 h-9" key={index}>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.email}</td>
              <td>{value.username}</td>
              <td>{value.password}</td>
              <td>{value.address}</td>
              <td>{value.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
