import './App.css';
import Header from './components/Header/Header';
import ShoppingList from './components/ShoppingList/ShoppingList';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="listContainer">
        <ShoppingList/>
      </div>
    </div>
  );
}

export default App;
