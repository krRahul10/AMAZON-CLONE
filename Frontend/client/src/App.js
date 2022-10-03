import logo from './logo.svg';
import './App.css';
import Navbar from './Components/header/Navbar';
import Newnav from './Components/newnavbaar/Newnav';
import Maincomp from './Components/home/Maincomp';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <Navbar/>
     <Newnav/>
     <Maincomp/>
    </div>
  );
}

export default App;
