import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <>
      -----------------
      <Welcome name={<strong>Felice</strong>} age="18" />
      -----------------
      <Welcome name={<strong>Felice</strong>} age="65" />
      -----------------
      <Welcome name={<strong>Felice</strong>} age="17" />
      -----------------
      <Welcome name={<strong>Felice</strong>} age="66" />
      -----------------
    </>
  );
}

export default App;
