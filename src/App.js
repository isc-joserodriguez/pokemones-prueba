import Navigation from './components/Navigation/Navigation';
import PokemonList from './containers/PokemonList/PokemonList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PokemonList />

    </div>
  );
}

export default App;
