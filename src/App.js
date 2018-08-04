import React from 'react';
import './App.css';
import './styles/wrappers.css';
import './styles/containers.css';
import './styles/headings.css';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container container--w container--jcc">
          <h1 className="headline headline--regular headline--lg">Raid Builder</h1>
        </div>
      </div>
    );
  }
}

export default App;
