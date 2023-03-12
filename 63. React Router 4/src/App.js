import Welcome from './Welcome';
import ClickCounter from './ClickCounuter';
import GithubUser from './GithubUser';
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/users/ovdanalo'>Github User</Link>
      <Routes>
        <Route path='/' element={<Welcome name='Franco' />} />
        <Route path='/counter' element={<ClickCounter />} />
        <Route path='/users/:username' element={<GithubUser />} />
      </Routes>
    </div>
  )
}

export default App;