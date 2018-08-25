import React from 'react';
import Headline from './components/Headline';
import Subheadline from './components/Subheadline';
import Card from './components/Card';
import ClassGroup from './components/ClassGroup';
import SelectedChars from './components/SelectedChars';
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
    selectedChars: {},
    displayChars: []
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
        if(data.members[i].character.level >= 120 && data.members[i].character.class === 1) {
          warriors.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 2) {
          paladins.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 3) {
          hunters.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 4) {
          rogues.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 5) {
          priests.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 6) {
          deathKnights.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 7) {
          shamans.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 8) {
          mages.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 9) {
          warlocks.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 10) {
          monks.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 11) {
          druids.push({
            characterName: data.members[i].character.name,
            characterClass: data.members[i].character.class
          });
        } else if(data.members[i].character.level >= 120 && data.members[i].character.class === 12) {
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
    const { warriors, paladins, hunters, rogues, priests, deathKnights, shamans, mages, warlocks, monks, druids, demonHunters, selectedChars, displayChars } = this.state;

    const generateCharacters = wowClass => {
      const chars = wowClass.map(item => item.characterName);
      chars.sort();
      return chars;
    }

    const monitorCheck = (character, check) => {

      const activeCharacters = { selectedChars }
      activeCharacters[`${character}`] = character

      this.setState({
        selectedChars: activeCharacters
      });

      const copiedChars = [ ...displayChars ];
      const charSet = new Set(copiedChars);

      if(!charSet.has(character)) {
        charSet.add(character);
      }

      if(charSet.has(character) && check === true) {
          charSet.delete(character);
        }

      this.setState({
        displayChars: charSet
      });
    }

    return (
      <div className="">
        <div className="container">
          <div className="container__wrapper">
            <Headline
              content="Raid Builder"
            />
            <Subheadline
              content="A Flexible Strategy Tool"
            />
          </div>
        </div>

        <div className="container">
          <div className="container__wrapper">
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
          </div>
        </div>

        <div className="container">
          <div className="container__wrapper">
            <SelectedChars
              headlineContent="Selected Characters"
              characters={ displayChars }
            />
          </div>
        </div>

        <div className="container">
          <div className="container__wrapper">
            <ClassGroup
              characters={ generateCharacters(warriors) }
              characterClass="Warriors"
              monitorCheck={ monitorCheck }
              classColor='warrior'
            />
            <ClassGroup
              characters={ generateCharacters(paladins) }
              characterClass="Paladins"
              monitorCheck={ monitorCheck }
              classColor='paladin'
            />
            <ClassGroup
              characters={ generateCharacters(hunters) }
              characterClass="Hunters"
              monitorCheck={ monitorCheck }
              classColor='hunter'
            />
            <ClassGroup
              characters={ generateCharacters(rogues) }
              characterClass="Rogues"
              monitorCheck={ monitorCheck }
              classColor='rogue'
            />
            <ClassGroup
              characters={ generateCharacters(priests) }
              characterClass="Priests"
              monitorCheck={ monitorCheck }
              classColor='priest'
            />
            <ClassGroup
              characters={ generateCharacters(deathKnights) }
              characterClass="Death Knights"
              monitorCheck={ monitorCheck }
              classColor='death-knight'
            />
            <ClassGroup
              characters={ generateCharacters(shamans) }
              characterClass="Shamans"
              monitorCheck={ monitorCheck }
              classColor='shaman'
            />
            <ClassGroup
              characters={ generateCharacters(mages) }
              characterClass="Mages"
              monitorCheck={ monitorCheck }
              classColor='mage'
            />
            <ClassGroup
              characters={ generateCharacters(warlocks) }
              characterClass="Warlocks"
              monitorCheck={ monitorCheck }
              classColor='warlock'
            />
            <ClassGroup
              characters={ generateCharacters(monks) }
              characterClass="Monks"
              monitorCheck={ monitorCheck }
              classColor='monk'
            />
            <ClassGroup
              characters={ generateCharacters(druids) }
              characterClass="Druids"
              monitorCheck={ monitorCheck }
              classColor='druid'
            />
            <ClassGroup
              characters={ generateCharacters(demonHunters) }
              characterClass="Demon Hunters"
              monitorCheck={ monitorCheck }
              classColor='demon-hunter'
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
