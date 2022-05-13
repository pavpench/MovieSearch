import Gallery from "./components/Gallery";
import Search from "./components/SearchBar";
import { StorageProvider } from "./contexts";

function App() {
  return (
    <div className="vw-100 d-flex">
      <StorageProvider>
        <Search />
        <Gallery />
      </StorageProvider>
    </div>
  );
}

export default App;
