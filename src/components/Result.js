import React from 'react';
  
const Result = ({ swing , pitchNum }) => {
  let result;
  let result2;
  let result3;
  let outcome;
  if(swing){
    if(pitchNum > swing){
      if((pitchNum - swing) <= 5){
        outcome = "That's a dinger!";
      } else if ((pitchNum - swing) <= 10){
        outcome = "Wow great hit! That's a triple!";
      } else if ((pitchNum - swing) <= 15){
        outcome = "And it's off the wall for a double!";
      } else if ((pitchNum - swing) <= 20){
        outcome = "Small ball baby! Way to leg out a single";
      } else {
        outcome = "You're out!";
      };
      result = "Pitcher number: " + pitchNum;
      result2 = " Swing number: " + swing;
      result3 = " Difference: " + (pitchNum - swing);
    }
    else if(pitchNum < swing){
      result = "Pitcher number: " + pitchNum;
      result2 = " Swing number: " + swing;
      result3 = " Difference: " + Math.abs(pitchNum - swing);
      if((swing - pitchNum) <= 5){
        outcome = "That's a dinger!";
      } else if ((swing - pitchNum) <= 10){
        outcome = "Wow great hit! That's a triple!";
      } else if ((swing - pitchNum) <= 15){
        outcome = "And it's off the wall for a double!";
      } else if ((swing - pitchNum) <= 20){
        outcome = "Small ball baby! Way to leg out a single";
      } else {
        outcome = "You're out!";
      };
    }
    else{
      result = "Pitcher number: " + pitchNum;
      result2 = " Swing number: " + swing;
      result3 = " Difference: " + (pitchNum - swing);
      outcome = "That's A Goner!"
    }
  }
  return <h3>{result}<br />{result2}<br />{result3}<br />{outcome}</h3>
}

export default Result