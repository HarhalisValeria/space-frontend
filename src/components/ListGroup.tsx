import { useState } from "react";
import { MouseEvent } from "react";
// { items: [], heading: string } //we should create an interface

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // event handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState(""); // for string

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
