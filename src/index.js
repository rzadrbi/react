import React from 'react';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));


class Hello extends React.Component {
  render(){
    return(
      <h1>Time is :</h1>
    )
  }
}





class Timer extends React.Component {
  render(){
    return(
      <h2>{new Date().toLocaleTimeString()}</h2>
    )
  }
}


class App extends React.Component {
  render(){
    return (
      <div>
        <Hello/>
        <Timer/>
      </div>
    )
  }
}


// const Timer = ()=>{
  // const elem = (
  // <div>
  {/*  */}
  {/*  */}
  {/* </div> */}
  // );
  // root.render(elem);
// }
const render_instance = ()=>{
  root.render(<App/>);
}

setInterval(()=>{
  render_instance();
}, 1000)

// createRoot(document.getElementById('root'), render(elem));


