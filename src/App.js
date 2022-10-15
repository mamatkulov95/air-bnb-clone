import "./App.css";
import Card from "./components/Card";
import data from "./components/CardDate";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <div className="App">
      <div className="cards">{cards}</div>
    </div>
  );
}

export default App;
