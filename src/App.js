import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './pages/Home';
        
function App() {
  return (
    <div>
      <Header />
      <Home />
      {/* <Spacer/> */}
      <Footer />
    </div>
  );
}

export default App;
