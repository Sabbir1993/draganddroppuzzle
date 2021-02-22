# Description 
This a funny puzzle game. Only adding one image your can slice it into what ever pieces you want to make it more complex.

# Installation 
`npm i dragdroppuzzle --save`

Then ...........

```````` 
import dragdroppuzzle from 'dragdroppuzzle'

<dragdroppuzzle></dragdroppuzzle>

## Options 
width = 600, height = 600, XLength = 4, YLength= 4, imgUrl = 'https://cdn.britannica.com/68/6268-050-04FB8622/Bangladesh.jpg',getResult
dragdroppuzzle support many options like 

width = your total canvus width (numeric value)
height = your total canvus height (numeric value)
XLength = How many pieces do yout need for X axis (numeric value)
YLength = How many pieces do yout need for Y axis (numeric value)
imgUrl = Image url that be splices
getResult = callback function this carry the result ('success' || 'keep trying')