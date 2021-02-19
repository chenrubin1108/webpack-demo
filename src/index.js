
import '../src/assets/x.less'
console.log('121313131')
import img from '../src/assets/test.png';
// let app=document.querySelector('#app')
// console.log(img)
// app.innerHTML=`
//   <img src="${img}">
// `

const lazy =document.createElement('button')
document.body.appendChild(lazy)
lazy.innerText='我是懒加载'
lazy.onclick=()=>{
   console.log('1')
   
    const promise=import('./lazy.js')
    promise.then((module)=>{
        const fn=module.default
        fn()
       console.log(fn)
    })
  
}