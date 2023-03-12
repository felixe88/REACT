import Tracker from './Tracker';

const App = () => {
  const { username, password, onTrackData } = Tracker('', '')

  return (
    <div>
      <input name='username' type='text' value={username} onChange={onTrackData}/>
      <input name='password' type='password' value={password} onChange={onTrackData}/>
      <h1>Username: {username}</h1>
      <h1>Password: {password}</h1>
    </div>
  )
}

export default App;