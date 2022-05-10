import CreateNote from "./components/CreateNote/CreateNote";
import NoteListing from "./components/NoteListing/NoteListing";
import './App.css';
function App() {
  return (
    <div className="App">
      
      <CreateNote/>
      <NoteListing></NoteListing>
    </div>
  );
}

export default App;
