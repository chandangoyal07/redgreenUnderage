import './App.css';

function App() {
  const age=29;
  const isGreen =false;
  return (
    <div className="App">
      {age >21 ?  <h1>overage</h1> :  <h1>Underage</h1>}
      <h1 style={{color:isGreen ? 'red' : 'green'}}>This has color</h1>
    </div>
  );

  // if(age>18){
  //   return <h1>Overage</h1>  
  // }else{
  //   return <h2>Underage</h2>
  // }
}

export default App;
