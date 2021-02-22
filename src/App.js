import React from 'react'
import Puzzle from 'drag-drop-puzzle'
function App() {

  const finalResult = (data) => {
    console.log(data)
  }

  return (
      <>
        <Puzzle width = {600} height = {600} XLength = {4} YLength = {4} imgUrl = 'https://cdn.britannica.com/68/6268-050-04FB8622/Bangladesh.jpg' getResult = {finalResult}/>
      </>
  )
}

export default App;
