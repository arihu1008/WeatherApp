import logo from './logo.svg';
import './App.css';
import City from './components/City.js'

function App() {
  const new_york = 'New York';
  const dallas = 'Dallas';
  const chicago = 'Chicago'
  return (
    <div className='App'>
      <header className='App-header'>
        How's the weather today?
        <div className='container'>
          <City location={new_york} lat={40.71} lon={-74.00} />
          <City location={dallas} lat={32.77} lon={-96.79} />
          <City location={chicago} lat={41.87} lon={-87.62} />
        </div>
      </header>
    </div>
  );
}

export default App;
