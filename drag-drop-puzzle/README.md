# Description 
This a funny puzzle game. Only adding one image your can slice it into what ever pieces you want to make it more complex.

# Installation 
>`npm i @sabbir1055/drag-drop-puzzle --save`
## Uses 

```
import React from 'react'
import Puzzle from '@sabbir1055/drag-drop-puzzle'
function App() {

  const finalResult = (data) => {
    console.log(data)
  }

  return (
      <>
        <Puzzle imgUrl = 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg' getResult = {finalResult}/>
      </>
  )
}

export default App;

```

## Options 

drag-drop-puzzle support many options. These are :  

Option name | Description | Data Type | Default
--- | --- |--- | ---
width| _your full canvas width_ | `numeric` | 600
height| _your full canvas height_ | `numeric` | 600
XLength| _How many pieces do yout need for X axis_ | `numeric` | 4
YLength| _How many pieces do yout need for Y axis_ | `numeric` | 4
imgUrl| _Image url that will be splices into_ ` XLength * YLength ` _pieces_ | `string` | ![alt text](https://cdn.britannica.com/68/6268-050-04FB8622/Bangladesh.jpg?raw=true)
parentClass| _Style your outer canvas_  | `string` | `null`
childClass| _Style your inner elements of canvas_  | `string` | `null`
getResult| _callback function that return the result_ | `string` | _return_ `success` or `keep trying`

## Git repository 
If you want to contribute [click](https://github.com/Sabbir1993/draganddroppuzzle.git) here
