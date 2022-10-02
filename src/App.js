import './App.css';
import Wgame from './components/w_game/Wgame';
import Upload from './components/file_upload/Upload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wgame/>
        <Upload/>
      </header>
    </div>
  );
}

export default App;
