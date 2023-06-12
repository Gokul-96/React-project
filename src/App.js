// function App () {

//   const now =new Date()

//   const a = 20;
//   const b = 50;


// console.log(now, a+b);
//   return (
//    <div>Let's Do
//     <p>{now.toString()}</p>
//     <p>{a} plus {b} is {a+b}</p>
//    </div>
//   );
// }


// export default App;

import React from 'react'

function Hello(props){
  //console.log(props);
  return(
    <div>
      <h1>Hello{props.name}{props.age}</h1>
      
    </div>
  )
}

function App() {
  const age =18;
  return (
    <div>
      <h1>welcome</h1>
      <Hello name='gokul' age={10+30}/>
      <Hello name="Gok" age={age}/>
      <Hello />
    </div>
  )
}

export default App
