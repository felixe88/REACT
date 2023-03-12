import Welcome from './Welcome';
import ClickCounter from './ClickCounter';
import GithubUser from './GithubUser';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Welcome name='Franco' />} />
      <Route path='/counter' element={<ClickCounter />} />
      <Route path='/users/:username' element={<GithubUser />} />
    </Routes>
  )
}

export default App;