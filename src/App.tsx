import { ItemsProvider } from "./ItemsContext";
import "./App.css";
import { Items } from "./Items";

function App() {
  return (
    <ItemsProvider>
      <Items />
    </ItemsProvider>
  )
}

export default App;
