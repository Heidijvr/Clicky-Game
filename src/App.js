import React, { Component } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import face from "./face.json";
import "./App.css";

// Setting this.state cards to 0 or empty
class App extends Component {
  state = {
    face,
    clickedFace: [],
    score: 0
  };

  
//when you click on a card ... the face is taken out of the array
imageClick = event => {
  const currentFace = event.target.alt;
  const FaceAlreadyClicked =
    this.state.clickedFace.indexOf(currentFace) > -1;

  //if you click on a card that has already been selected, the game is reset and cards reordered
  if (FaceAlreadyClicked) {
    this.setState({
      face: this.state.face.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedFace: [],
      score: 0
    });
      alert("You lose. Play again?");
//if you click on an available face, your score is increased and cards reordered
  } else {
    this.setState(
      {
        face: this.state.face.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFace: this.state.clickedFace.concat(
          currentFace
        ),
        score: this.state.score + 1
      },
  //if you get all 12 animals correct you get a congratulations message and the game resets        
      () => {
        if (this.state.score === 12) {
          alert("You Win!!!");
          this.setState({
            face: this.state.face.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedFace: [],
            score: 0
          });
        }
      }
    );
  }
};

//the order of components to be rendered: navbar, jumbotron, image card, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
          <div className="wrapper">
            {this.state.face.map(face => (
              <Card
                imageClick={this.imageClick}
                id={face.id}
                key={face.id}
                image={face.image}
              />
            ))}
          </div>
        <Footer />
      </div>
    );
  }
}
export default App;