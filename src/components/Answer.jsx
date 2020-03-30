import React, { Component } from "react";
import "../css/App.css";

class Answer extends Component {
  render() {
    return (
      <div className="answer">
        <button
          onClick={() => {
            if (this.props.isCorrect === true) {
              alert("Correct!");
              console.log("Correct");
              /*refresh logic to get to next question
                call click answer handler
               */
              this.props.handleAnswerClick();
            } else {
              alert("Incorrect!");
              console.log("Incorrect");
            }
          }}
        >
          {" "}
          {this.props.answertext}{" "}
        </button>
      </div>
    );
  }
}

export default Answer;
