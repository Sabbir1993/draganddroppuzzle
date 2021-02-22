import React, { useState, useEffect } from 'react'
import './puzzle.css'

export default function DragAndDrop({width = 600, height = 600, XLength = 4, YLength= 4, imgUrl = '',parentClass, childClass, getResult}) {

    const [tiles, setTiles] = useState([])
    const [shuffleTiles, setShuffleTiles] = useState([])

    const splitImage = () => {
        var img = new Image();
        img.onload = function() {
            var _length = -XLength,
                i, j;
            var dataSet = []
            for (i = 0; i > _length; i--) {
                for (j = 0; j > _length; j--) {
                    dataSet.push({
                        style: {
                            backgroundPosition: `${width/XLength * j}px ${height/YLength * i}px`,
                            backgroundImage: `url('${img.src}')`,
                            width: width/XLength,
                            height: height/YLength,
                            backgroundSize: `${width}px ${height}px`
                        },
                        id: create_UUID()
                    })
                }
            }
            var dataShuffleSet = [...dataSet]
            setTiles(dataSet)
            setShuffleTiles(dataShuffleSet.sort(() => Math.random() - 0.5))
        }
        img.src = imgUrl;

    }

    const create_UUID = () => {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    const allowDrop = (ev) => {
        ev.preventDefault();
    }

    const drag = (ev) => {
        let data = {
            text: ev.target.id,
            parentNode: ev.target.parentElement.id
        }
        ev.dataTransfer.setData("text", JSON.stringify(data));
    }

    const drop = async (ev) => {
        ev.preventDefault();
        var dataFromTransfer = ev.dataTransfer.getData("text") ? JSON.parse(ev.dataTransfer.getData("text")) : null
        if (dataFromTransfer){
            // parent Elements
            var curParentElement = ev.target.parentElement.id
            var parentNode = dataFromTransfer.parentNode
            // child content
            var curChildElement = new XMLSerializer().serializeToString(document.getElementById(ev.target.id))
            var oldChildElement = new XMLSerializer().serializeToString(document.getElementById(dataFromTransfer.text))

            if (oldChildElement && parentNode){

                document.getElementById(parentNode).innerHTML = curChildElement
                document.getElementById(curParentElement).innerHTML = oldChildElement
                var list = document.querySelectorAll('*[id*=div] *[id*="drag"]')

                var dataSet = await list.forEach(function(el) {
                    el.addEventListener("dragstart", function (ev) {
                        drag(ev)
                    })
                })
                findResult()
            }
        }
    }

    const findResult = async () => {
        var key = 0, resultSuccess = 0
        var list = document.querySelectorAll('*[id*=div] *[id*="drag"]')
        var dataSet = await list.forEach(function(el) {
            if(tiles[key].id === el.dataset.index){
                resultSuccess += 1
            }
            key ++
        });
        key = 0
        if(resultSuccess === (XLength*YLength)){
            getResult('success')
        } else {
            getResult('keep trying')
        }
    }

    useEffect(async () => {
        splitImage()
        findResult()
    },[1])

    return (
        <>
            <div id="puzzleMain" style={{width: width, height: height}}>
                {
                    shuffleTiles.length ? shuffleTiles.map( (tilesData, key) => {
                            return(
                                <div id={'div'+(key+1)} className={parentClass} onDrop={drop} onDragOver={allowDrop} key={key} style={{width: width/XLength, height: height/YLength}}>
                                    <div id={"drag"+(key+1)} className={childClass} draggable={true} onDragStart={drag} style={{...tilesData.style}} data-index={tilesData.id}></div>
                                </div>
                            )
                        })
                        : null
                }
            </div>
        </>
    )
}
