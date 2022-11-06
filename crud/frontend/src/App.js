import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
         <Logo/>
         <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
