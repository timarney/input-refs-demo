import { RefsProvider } from "./RefsContext";
import "./App.css";
import { Items } from "./Items";

function App() {
  return (
    <RefsProvider>
      <Items />
    </RefsProvider>
  )
}

export default App;
