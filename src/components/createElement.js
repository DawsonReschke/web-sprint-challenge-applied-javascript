function createElement({type='div',classes=[],attributes=[],id=false,events=[],children=[],textContent=false}={}){
    let tempDoc = document.createElement(type)
    if(id)tempDoc.id = id; 
    if(textContent)tempDoc.textContent = textContent;
    classes.forEach((val)=>tempDoc.classList.add(val)); 
    attributes.forEach((val)=>tempDoc.setAttribute(val.attribute,val.value))
    events.forEach((val)=>tempDoc.addEventListener(val.event,val.callback))
    children.forEach((val)=>tempDoc.appendChild(val)); 
    return tempDoc; 
}

module.exports = createElement; 