import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question";
import { buildFirebase, getRandomQuestion } from "../clients/firebase.js";
import Answer from "./Answer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionInfo: null,
      data: null
    };
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(data =>
      this.setState({
        questionInfo: getRandomQuestion(data.val()),
        data: data.val()
      })
    );
    // console.log(this.state.questionInfo);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  handleAnswerClick() {
    console.log("Correct answer! Refresh");
    /* logic to fetch new question */
    this.setState(prevState => ({
      questionInfo: getRandomQuestion(prevState.data)
    }));
  }

  render() {
    if (this.state.questionInfo === null) {
      return <div />;
    }

    console.log(this.state.questionInfo);
    return (
      <div className="app">
        <Question
          questiontext={this.state.questionInfo.question_text}
          questionInfo={this.state.questionInfo}
          handleAnswerClick={this.handleAnswerClick}
        />
      </div>
    );
  }
}

export default App;
