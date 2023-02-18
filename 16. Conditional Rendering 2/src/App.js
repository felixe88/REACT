import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <>
      <Welcome name={<strong>Felice</strong>} age="21" showAge={false}/>
      --------
      <Welcome name={<strong>Felice</strong>} age="21" showAge={true}/>
    </>
  );
}

export default App;
