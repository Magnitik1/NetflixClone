import React, { useState } from "react";
import "./mainPageQuestions.css";

let answerPositions = [false, false, false, false, false, false];

export function MainPageQuestions(props) {
  let [_, update] = useState(true);

  let QuestionContent = [15, 16, 17, 18, 19, 20].map((e) => {
    return (
      <>
        <li
          onClick={() => {
            answerPositions[e - 15] = !answerPositions[e - 15];
            update(!_);
          }}>
          <a>{props.lang[e]}</a>
          <a className="plus" style={answerPositions[e - 15]?{marginRight:"10px"}:{}}>{answerPositions[e - 15]?'-':'+'}</a>
        </li>
        {answerPositions[e - 15] ? (
          <div className="questionContent">
            {props.lang[e+6]}
          <br/>
          <br/>
          </div>
        ) : (
          ""
        )}
      </>
    );
  });
  return (
    <div className="MainPageQuestions">
      <br />
      <br />
      <br />
      <br />
      <a className="questions">{props.lang[14]}</a>
      <br />
      <br />
      <br />
      <ul style={{ padding: "0" }}>{QuestionContent}</ul>
      <br/>
      <br/>
      <a>{props.lang[43]}</a>
      <br/>
      <br/>
      <form className="email-adress2">
        <input className="place-to-write" placeholder={props.lang[5]} type="text" />
        <button className="place-for-button" style={{backgroundColor:"#595959", marginLeft:"1px", position:"inherit"}}>{props.lang[4]}</button>
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <hr className="myLine2" />
    </div>
  );
}
