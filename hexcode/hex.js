let hexcode = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",];

let newarray =[];

for(let i = 0 ; i < 6 ; i++){
    newarray.push(hexcode[Math.floor(Math.random() * hexcode.length)]);
}

document.body.style.background = `#${newarray.join("")}`;