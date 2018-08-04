import React from 'react';
import Headline from './components/Headline';
import Subheadline from './components/Subheadline';
import Card from './components/Card';
import './App.css';
import './styles/wrappers.css';


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container container--w container--jcsb">
          <Headline
            content="Raid Builder"
            styles="headline headline--reg headline--lg ttu tac pb1"
          />
          <Subheadline
            content="A Flexible Strategy Tool"
            styles="headline headline--bold headline--md headline--pseudo ttu tac pb5"
          />
          <Card
            buttonContent="Go!"
            headlineContent="Custom."
            headlineStyles="headline headline--reg headline--sm headline--bb ttu tac pb1 mb1"
            content="Import your guild members, straight from Blizzard."
          />
          <Card
            buttonContent="Go!"
            headlineContent="Filtering."
            headlineStyles="headline headline--reg headline--sm tac headline--bb ttu pb1 mb1"
            content="Filter by class, spec, role and/or attack type."
          />
          <Card
            buttonContent="Go!"
            headlineContent="Smart."
            headlineStyles="headline headline--reg headline--sm tac headline--bb ttu pb1 mb1"
            content="Set a raid composition per boss, per raid."
          />
        </div>
      </div>
    );
  }
}

export default App;
