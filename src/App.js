import "./App.css";
import Card from "./components/Card";
import Katie from "./images/profil-photo.png";
import wedding from "./images/wedding-photography 1.png"
import bike from "./images/mountain-bike 1.png"

function App() {
  return (
    <div className="App">
     
      <div className="cards">
        <Card
          img={Katie}
          rating="5.0"
          scope={6}
          country="USA"
          author="Life lessons with Katie Zaferes"
          price={136}
        />

        <Card
          img={wedding}
          rating="5.0"
          scope={30}
          country="USA"
          author="Learn wedding photography"
          price={125}
        />

        <Card
          img={bike}
          rating="4.8"
          scope={2}
          country="USA"
          author="Group Mountain Biking"
          price={50}
        />
      </div>
    </div>
  );
}

export default App;
