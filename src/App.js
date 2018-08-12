import React from 'react';
import Headline from './components/Headline';
import Subheadline from './components/Subheadline';
import Card from './components/Card';
import ClassGroup from './components/ClassGroup';
import './App.css';
import './styles/container.css';


class App extends React.Component {

  state = {
    warriors:     [], 
    paladins:     [],
    hunters:      [],
    rogues:       [],
    priests:      [],
    deathKnights: [],
    shamans:      [],
    mages:        [],
    warlocks:     [],
    monks:        [],
    druids:       [],
    demonHunters: [],
  }

  componentDidMount() {

    // pass in server
    // pass in guild name
    // pass in locale
    const fetchGuildFromBlizzard = () => {
      return new Promise((resolve, reject) => {
        resolve(fetch('https://us.api.battle.net/wow/guild/Mal\'Ganis/step%20dad?fields=members&locale=en_US&apikey=vz94hxhka4gy4tv2sjvgdfty9673by82'))
        reject(Error('Promise failed to return'));
      });
    }
    
    const setCharacterInformation = async () => {
      const warriors     = [];
      const paladins     = [];
      const hunters      = [];
      const rogues       = [];
      const priests      = [];
      const deathKnights = [];
      const shamans      = [];
      const mages        = [];
      const warlocks     = [];
      const monks        = [];
      const druids       = [];
      const demonHunters = [];
      const res = await fetchGuildFromBlizzard();
      const data = await res.json();
      for(let i = 0; i < data.members.length; i+=1) {
        if(data.members[i].character.level >= 110 && data.members[i].character.class === 1) {
          warriors.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 2) {
          paladins.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 3) {
          hunters.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 4) {
          rogues.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 5) {
          priests.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 6) {
          deathKnights.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 7) {
          shamans.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 8) {
          mages.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 9) {
          warlocks.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 10) {
          monks.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 11) {
          druids.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 110 && data.members[i].character.class === 12) {
          demonHunters.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        }
      }

      this.setState({ warriors, paladins, hunters, rogues, priests, deathKnights, shamans, mages, warlocks, monks, druids, demonHunters });
    }
    setCharacterInformation();
  }

  render() {
    const { warriors, paladins, hunters, rogues, priests, deathKnights, shamans, mages, warlocks, monks, druids, demonHunters } = this.state;
    
    const generateCharacters = wowClass => {
      const chars = wowClass.map(item => item.characterName);
      chars.sort();
      return chars; 
    }



    return (
      <div className="">
        <div className="">
          <Headline
            content="Raid Builder"
          />
          <Subheadline
            content="A Flexible Strategy Tool"
          />
          <Card
            buttonContent="Go!"
            headlineContent="Custom."
            content="Import your guild members, straight from Blizzard."
          />
          <Card
            buttonContent="Go!"
            headlineContent="Filtering."
            content="Filter by class, spec, role and/or attack type."
          />
          <Card
            buttonContent="Go!"
            headlineContent="Smart."
            content="Set a raid composition per boss, per raid."
          />
          <div className="container">
            <div className="container__wrapper">
              <ClassGroup
                characters={ generateCharacters(warriors) }
                characterClass="Warriors"
              />
              <ClassGroup
                characters={ generateCharacters(paladins) }
                characterClass="Paladins"
              />
              <ClassGroup
                characters={ generateCharacters(hunters) }
                characterClass="Hunters"
              />
              <ClassGroup
                characters={ generateCharacters(rogues) }
                characterClass="Rogues"
              />
              <ClassGroup
                characters={ generateCharacters(priests) }
                characterClass="Priests"
              />
              <ClassGroup
                characters={ generateCharacters(deathKnights) }
                characterClass="Death Knights"
              />
              <ClassGroup
                characters={ generateCharacters(shamans) }
                characterClass="Shamans"
              />
              <ClassGroup
                characters={ generateCharacters(mages) }
                characterClass="Mages"
              />
              <ClassGroup
                characters={ generateCharacters(warlocks) }
                characterClass="Warlocks"
              />
              <ClassGroup
                characters={ generateCharacters(monks) }
                characterClass="Monks"
              />
              <ClassGroup
                characters={ generateCharacters(druids) }
                characterClass="Druids"
              />
              <ClassGroup
                characters={ generateCharacters(demonHunters) }
                characterClass="Demon Hunters"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
