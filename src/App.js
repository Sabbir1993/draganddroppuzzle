import React from 'react'
import Puzzle from '@sabbir1055/drag-drop-puzzle'
import './App.css'
function App() {

  const finalResult = (data) => {
    console.log(data)
  }

  return (
      <>
        <Puzzle width = {600} height = {600} XLength = {4} YLength = {4} imgUrl = 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' parentClass={'abc'} getResult = {finalResult}/>
      </>
  )
}

export default App;
