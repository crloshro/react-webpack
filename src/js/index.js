import 'babel-polyfill'
import '../css/estilos.css'
import {firstMessage,delayedMessage} from './message.js'
import platziImg from '../images/platzi.png'
import data from './teachers.json'
// const data=require('./teachers.json')
import renderToDOM from './render-to-dom.js'

import React, {Component} from 'react'
import {render} from 'react-dom'
import Teachers from './components/teachers.js'

render (<Teachers data={data}/>)

console.log(data)

data.teachers.forEach((teacher)=>{
  const element=document.createElement('li')
  element.textContent=teacher.name
  renderToDOM(element)
})

document.write(firstMessage)
delayedMessage();

const img=document.createElement('img')
img.setAttribute('src',platziImg)
img.setAttribute('width',50)
img.setAttribute('height',50)
document.body.append(img)
// console.log('Hola mundo!, desde Webpack')
console.log('Hola mundo!, desde Webpack 2')