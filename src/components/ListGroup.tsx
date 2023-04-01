import { Fragment } from "react";

function ListGroup() {
  let cities = ["New York", "San Francisco", "Tokyo", "Kyiv"];
  cities = [];

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No cities</p>}
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
