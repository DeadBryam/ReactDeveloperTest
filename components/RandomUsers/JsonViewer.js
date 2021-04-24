import { useEffect, useState } from "react";

export default function JsonViewer({ data, filter }) {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    let temp;
    temp = filter
      ?.filter((filterItem) => filterItem.isChecked)
      ?.map((item) => item.name.toLowerCase());

    setFields(temp);
  }, [filter]);

  return (
    <div className="w-full bg-gray-600 text-white font-bold">
      <pre className="p-10">
        <code>{JSON.stringify(data, fields, 3)}</code>
      </pre>
    </div>
  );
}
