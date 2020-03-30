import React, { Component } from "react";
// import components
import Answer from "./Answer";

class Question extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.questiontext} </h1>
        <div>
          <Answer
            answertext={this.props.questionInfo.choices[0]}
            isCorrect={this.props.questionInfo.correct_choice_index === 0}
            handleAnswerClick={this.props.handleAnswerClick}
          />
          <Answer
            answertext={this.props.questionInfo.choices[1]}
            isCorrect={this.props.questionInfo.correct_choice_index === 1}
            handleAnswerClick={this.props.handleAnswerClick}
          />
          <Answer
            answertext={this.props.questionInfo.choices[2]}
            isCorrect={this.props.questionInfo.correct_choice_index === 2}
            handleAnswerClick={this.props.handleAnswerClick}
          />
          <Answer
            answertext={this.props.questionInfo.choices[3]}
            isCorrect={this.props.questionInfo.correct_choice_index === 3}
            handleAnswerClick={this.props.handleAnswerClick}
          />
        </div>
      </div>
    );
  }
}

export default Question;
