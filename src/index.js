/*import sum from './sum';
import './image_viewer';
//we're pretty much just importing the entire image_viewer.js above

const total = sum(10, 5);
console.log(total)*/

const button = document.createElement('button');
button.innerText = 'Click me';

button.onclick = () => {
  //implementing code splitting
  System.import('./image_viewer').then(module => {
    module.default();
  })
};

document.body.appendChild(button);