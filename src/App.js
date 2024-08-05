import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [darkColor, setDarkColor] = useState('#042743'); // Default dark color

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  const toggleDarkColor = (color) => {
    if (mode === 'dark') {
      setDarkColor(color); // Update dark color state
    }
  };

  useEffect(() => {
    // Apply the background color based on mode and darkColor
    document.body.style.backgroundColor = mode === 'dark' ? darkColor : 'white';
    showAlert(`Mode set to ${mode} with ${mode === 'dark' ? (darkColor === '#042743' ? 'default dark' : darkColor) : 'default light'} background`, "success");
  }, [mode, darkColor]);

  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} toggleDarkColor={toggleDarkColor} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} heading='Enter Text to Analyze' mode={mode} />
    </>
  );
}

export default App;