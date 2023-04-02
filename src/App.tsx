import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "Kyiv"];

  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
    </div>
  );
}

export default App;
