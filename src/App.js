import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='TextUtils' items={['Home', 'About', 'Contact']}/>
      <TextForm heading='Enter Text to Analyze'/>
      {/* <About /> */}
    </>
  );
}

export default App;
