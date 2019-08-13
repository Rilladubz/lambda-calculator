import React, { useState } from "react";
import OperatorButton from './OperatorButton';

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data';

// console.log(operators);

 export default function Operators(){
  // STEP 2 - add the imported data to state

  const [operatorsState, setoperatorState] = useState(operators);
  // console.log(operatorsState);

  return (
    <div>
       {operatorsState.map((eaOp) => <OperatorButton eaprops={eaOp}/>)}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
