import Search from "./components/SearchBar";
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
