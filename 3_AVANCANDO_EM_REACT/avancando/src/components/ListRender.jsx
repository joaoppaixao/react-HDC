import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["João", "Bruna", "Barata", "Ana"]);

  return (
  <div>
    <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
  </div>
  );
};

export default ListRender