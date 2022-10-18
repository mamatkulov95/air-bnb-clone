import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";
import data from "./components/Card/CardDate";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="cards">{cards}</div>
    </div>
  );
}

export default App;
