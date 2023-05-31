import CarouselComponent from './components/CarouselComponent/CarouselComponent'
import Header from './components/Header/Header';
import HeaderLinks from './components/HeaderLinks/HeaderLinks'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <HeaderLinks/>
    <CarouselComponent/>
    </div>
  );
}

export default App;
