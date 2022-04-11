import { useEffect, useState } from "react";
import axios from "axios";

export default function useEffectCallApi() {
  const listStyle = { height: "150px", overflow: "auto" };

  const [searchList, setSearchList] = useState({ hits: [] });
  const [filterItem, setFilterItem] = useState("linux");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${filterItem}`
      );

      setSearchList(result.data);
    }

    fetchData();
  }, [filterItem]);

  return (
    <div>
      <input
        type="text"
        name="item"
        onChange={(e) => setFilterItem(e.target.value)}
      />
      <br />
      <br />
      <br />
      <ul style={listStyle}>
        {searchList.hits.map((e) => (
          <li key={e.objectID}>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}
