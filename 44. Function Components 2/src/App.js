import React from "react";
import Welcome from './Welcome';
import Sum from './Sum';

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name='Pippo' />
        <Sum numbers={[8, 7, 6, 2]} />
      </div>
    )
  }
}

export default App;