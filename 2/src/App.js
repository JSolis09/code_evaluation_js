import './styles/app.scss';
import { CurrentStats } from './components';


function App() {
  return (
    <div className="App">
      <nav className="menu">Navigation</nav>
      <header className="header"></header>
      <div className="body">
        <div className="sidebar"></div>
        <main className="main">
          <CurrentStats />
          <div className="content"></div>
        </main>
      </div>
    </div>
  );
}

export default App;
