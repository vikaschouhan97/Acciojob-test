
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
