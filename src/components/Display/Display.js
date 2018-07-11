import React, { Component } from 'react';
import './Display.css';
import data from '../../data/gameplay.json';
import Card from '../Card/Card';

// to procedurally generate the chapters:

// make a chapterCounter that starts at 0  - intro and ends at last number - finale start and end always the same

// between the start and end, we want to randomly display chapters AS LONG AS THEY'VE NOT JUST BEEN DISPLAYED

// can do this with object.keys[Math.random] * length of storyBoard

// strip intro and end off storyboard and put in own object

// TO IMPLEMENT:

// store current key on state

class Display extends Component {
  state = {
    storyBook: data.storyBoard.intro,
    turnCount: 1,
    chapterCount: 0
  };
  render() {
    console.log(this.state.storyBook);
    return (
      <section className="display__container">{this.storyRevealer()}</section>
    );
  }

  storyRevealer = () => {
    const storyLines = [];
    const { storyBook, turnCount } = this.state;
    for (let i = 0; i < turnCount; i++) {
      storyLines.unshift(<p>{storyBook[i].text}</p>);
    }
    const buttons = (
      <div>
        {storyBook[turnCount - 1].choices ? (
          storyBook[turnCount - 1].choices.forEach(choice => {
            switch (choice) {
              case 'Card':
                storyLines.unshift(<Card />);
                break;
              default:
                console.log('dummy text');
            }
          })
        ) : (
          <button onClick={this.nextClickHandler}>next</button>
        )}
      </div>
    );
    storyLines.unshift(buttons);
    return storyLines;
  };

  nextClickHandler = () => {
    this.setState({
      turnCount: this.state.turnCount + 1
    });
  };
}

export default Display;
