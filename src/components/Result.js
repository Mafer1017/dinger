import React from 'react'
 
const Result = ({ swing , pitchNum }) => {
  let result;
  let result2;
  let result3;
  if(swing){
    if(pitchNum > swing){
      result = "Pitcher number: " + pitchNum;
      result2 = " Swing number: " + swing;
      result3 = " Difference: " + (pitchNum - swing);
    }
    else if(pitchNum < swing){
      result = "Pitcher number: " + pitchNum;
      result2 = " Swing number: " + swing;
      result3 = " Difference: " + Math.abs(pitchNum - swing);
    }
    else{
      result = "Pitcher number: " + pitchNum;
      result2 = " Swing number: " + swing;
      result3 = " Difference: " + (pitchNum - swing);
    }
  }
  return <h3>{result}<br />{result2}<br />{result3}</h3>
}

export default Result