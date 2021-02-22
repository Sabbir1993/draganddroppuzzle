# Description 
This a funny puzzle game. Only adding one image your can slice it into what ever pieces you want to make it more complex.

# Installation 
`npm i @sabbir1055/drag-drop-puzzle --save`

````````````Then````````````

import Puzzle from '@sabbir1055/drag-drop-puzzle'

<Puzzle imgUrl = 'https://cdn.britannica.com/68/6268-050-04FB8622/Bangladesh.jpg'/>

## Options 

drag-drop-puzzle support many options like 

width = your total canvas width ( numeric value default 600 )
height = your total canvas height (numeric value default 600 )
XLength = How many pieces do yout need for X axis (numeric value default 4 )
YLength = How many pieces do yout need for Y axis (numeric value default 4 )
imgUrl = Image url that will be splices into (XLength * YLength default 'https://cdn.britannica.com/68/6268-050-04FB8622/Bangladesh.jpg')
getResult = callback function that return the result ('success' or 'keep trying')