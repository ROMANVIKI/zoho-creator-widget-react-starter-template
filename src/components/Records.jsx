import React, { useEffect, useContext, useState } from "react";

const Records = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const config = {
      app_name: "vchat-social-media-application-vikraman",
      report_name: "All_Users",
    };

    const getFunc = async () => {
      try {
        const response = await ZOHO.CREATOR.DATA.getRecords(config);
        console.log("Records fetched:", response);

        if (response.code === 3000) {
          setRecords(response.data);
        } else {
          console.warn("Unexpected response:", response);
        }
      } catch (err) {
        console.error("Error fetching records:", err);
      } finally {
        setLoading(false);
      }
    };

    getFunc();
  }, []);

  if (loading) return <p>Loading records...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Records</h2>
      <ul className="space-y-2">
        {records.map((rec, idx) => (
          <li
            key={idx}
            className="p-2 border rounded bg-gray-100 text-sm text-gray-800"
          >
            {JSON.stringify(rec)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Records;

