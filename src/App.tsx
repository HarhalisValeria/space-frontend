import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "Kyiv"];

  const handleSelectItem = (item: string) => {
    //write logic separately to component
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Text on button
      </Button>
    </div>
  );
}

export default App;
