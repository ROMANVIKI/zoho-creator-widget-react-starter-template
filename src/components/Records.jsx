import React, { useEffect, useState } from "react";

const Records = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState()

  const exampleID = "4464954000001415005";

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
          const data = response.data;
          setRecords(data);

          try {
            const fileResponse = await ZOHO.CREATOR.FILE.readFile({
              app_name: config.app_name,
              report_name: config.report_name,
              id: exampleID,
              field_name: "Profile_Picture",
            });
            setImage(fileResponse)
            console.log(fileResponse, "fileResponse data")
          } catch (err) {
            console.warn(`Failed to load image for ID ${rec.ID}:`, err);
            return { id: rec.ID, url: null };
          }

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
            <pre>{JSON.stringify(rec, null, 2)}</pre>

          </li>
        ))}
        <img
          src={image}
          alt="profile"
          className="w-24 h-24 mt-2 object-cover rounded"
        />

      </ul>
    </div>
  );
};

export default Records;

