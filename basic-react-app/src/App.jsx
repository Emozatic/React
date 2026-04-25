import './App.css'
import Title from "./Title";

// function Title(){
//   return (
//     <h1>This is title</h1>
//   )
// }

let name="Lucky";
function App() {
  return (
    //<div className='mainBox'>
    <>
      <Title/>
      <Title/>
      <h1>This is first heading</h1>
      <h2>This is second heading</h2>
      <p>This is paragraph</p>
      <p>This is {name}</p>
    </>
  )
}

export default App
