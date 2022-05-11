import "./App.css";
import Search from "./components/searchBar";
import { StorageProvider } from "./contexts";

function App() {
  return (
    <div className="container">
      <StorageProvider>
        <Search />
      </StorageProvider>
    </div>
  );
}

export default App;
