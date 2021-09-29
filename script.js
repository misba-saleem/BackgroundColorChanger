const button=document.getElementById("btn");
const body=document.body;

const colors = ['blue','yellow','pink','red','skyblue','green']

button.addEventListener('click',function(){
    const colorsIndex =Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorsIndex]
});
