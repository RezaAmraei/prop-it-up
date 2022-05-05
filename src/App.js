import "./App.css";
import "./components/NewComponent";
import NewComponent from "./components/NewComponent";
function App() {
  return (
    <div className="App">
      <NewComponent
        firstName="Reza"
        lastName="Amraei"
        age={22}
        hairColor="Black"
      />

      <NewComponent
        firstName="Rex"
        lastName="Amraei"
        age={21}
        hairColor="Blonde"
      />

      <NewComponent
        firstName="Craig"
        lastName="Amraei"
        age={2}
        hairColor="Black"
      />

      <NewComponent
        firstName="Maria"
        lastName="Smith"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

export default App;
