import './App.css'
import Title from "./Title";
import ProductTab from './ProductTab';
import Message from "./Message";

// function Title(){
//   return (
//     <h1>This is title</h1>
//   )
// }

// let name="Lucky";
// function App() {
//   return (
//     //<div className='mainBox'>
//     <>
//       <Title/>
//       <Title/>
//       <h1>This is first heading</h1>
//       <h2>This is second heading</h2>
//       <p>This is paragraph</p>
//       <p>This is {name}</p>
//     </>
//   )
// }

function App() {
  return (
    <>
      <Message username="lucky" textColor="yellow"/>
      <ProductTab/>
    </>
  )
}

export default App; 
