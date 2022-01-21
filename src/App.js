const Square = () => {
  return (
    <button className="square">gimme tacos</button>
  )
}

const App = () => {
  // cannot use this keyword
  return (
    <>
      <h1>tacos are better than Hello World</h1>
      <Square />
    </>
  )
};

// function App() {
//   // can use this keyword
// }

export default App;
