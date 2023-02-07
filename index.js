const bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove" ,(event)=>{
    const xposE1 = event.offsetX;
    const yposE1 = event.offsetY;
    const spanE1 = document.createElement("span");
    const size = Math.random() * 100;
    spanE1.style.width=size +'px';
    spanE1.style.height=size +'px';
    spanE1.style.left=xposE1+"px";
    spanE1.style.top=yposE1+"px";
    bodyE1.appendChild(spanE1)
    setTimeout (() =>{
        spanE1.remove();
    },3000)
});