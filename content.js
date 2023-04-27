
//login pop-up

document.getElementById("Account").addEventListener("click",function(){
    document.querySelector(".login").style.display = "flex";
})

document.querySelector(".close").addEventListener("click",function(){
    document.querySelector(".login").style.display = "none";
})

// sign in pop up

document.getElementById("Signin").addEventListener("click",function(){
    document.querySelector(".signin").style.display = "flex";
})
document.querySelector(".close1").addEventListener("click",function(){
    document.querySelector(".signin").style.display = "none";
})

//feed back

var stars = document.getElementsByClassName("fa");
var emoji = document.getElementById("emoji");

stars[3].onclick =  function(){
    stars[0].style.color = "white";
    stars[1].style.color = "white";
    stars[2].style.color = "white";
    stars[3].style.color = "gold";
    stars[4].style.color = "gray";
    stars[5].style.color = "gray";
    stars[6].style.color = "gray";
    stars[7].style.color = "gray";
}

stars[4].onclick = function(){
    stars[0].style.color = "white";
    stars[1].style.color = "white";
    stars[2].style.color = "white";
    stars[3].style.color = "gold";
    stars[4].style.color = "gold";
    stars[5].style.color = "gray";
    stars[6].style.color = "gray";
    stars[7].style.color = "gray";
}
stars[5].onclick = function(){
    stars[0].style.color = "white";
    stars[1].style.color = "white";
    stars[2].style.color = "white";
    stars[3].style.color = "gold";
    stars[4].style.color = "gold";
    stars[5].style.color = "gold";
    stars[6].style.color = "gray";
    stars[7].style.color = "gray";
}
stars[6].onclick = function(){
    stars[0].style.color = "white";
    stars[1].style.color = "white";
    stars[2].style.color = "white";
    stars[3].style.color = "gold";
    stars[4].style.color = "gold";
    stars[5].style.color = "gold";
    stars[6].style.color = "gold";
    stars[7].style.color = "gray";
}
stars[7].onclick = function(){
    stars[0].style.color = "white";
    stars[1].style.color = "white";
    stars[2].style.color = "white";
    stars[3].style.color = "gold";
    stars[4].style.color = "gold";
    stars[5].style.color = "gold";
    stars[6].style.color = "gold";
    stars[7].style.color = "gold";
}

// feedback pop up

document.getElementById("feedback").addEventListener("click",function(){
    document.querySelector(".feedback").style.display = "flex";
})
document.querySelector(".close2").addEventListener("click",function(){
    document.querySelector(".feedback").style.display = "none";
})

// about

document.getElementById("about").addEventListener("click",function(){
    document.querySelector(".about").style.display = "flex";
})
document.querySelector(".close3").addEventListener("click",function(){
    document.querySelector(".about").style.display = "none";
})

// have an account popup

document.getElementById("haa").addEventListener("click",function(){
    document.querySelector(".signin").style.display = "flex";
    document.querySelector(".login").style.display = "none";
})

// forgot password pop up

document.getElementById("fp").addEventListener("click",function(){
    document.querySelector(".forgot").style.cssText = `
    display: flex;
    `;
})
document.querySelector(".close4").addEventListener("click",function(){
    document.querySelector(".forgot").style.display = "none";
})
document.getElementById("fp").addEventListener("click",function(){
    document.querySelector(".signin").style.display = "none";
})

// list pop up

document.getElementById("flist").addEventListener("click",function(){
    document.querySelector(".list").style.cssText = `
    display: flex;
    `;
})
document.querySelector(".close6").addEventListener("click",function(){
    document.querySelector(".list").style.cssText = `
    display:none;
    `;
})

// all on pop up and pop up close

document.getElementById("Signin").addEventListener("click",function(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".feedback").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".search").style.display = "none";
    document.querySelector(".list").style.display = "none";
})

document.getElementById("Account").addEventListener("click",function(){
    document.querySelector(".signin").style.display = "none";
    document.querySelector(".feedback").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".search").style.display = "none";
    document.querySelector(".list").style.display = "none";
})

document.getElementById("feedback").addEventListener("click",function(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".signin").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".search").style.display = "none";
    document.querySelector(".list").style.display = "none";
})

document.getElementById("about").addEventListener("click",function(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".feedback").style.display = "none";
    document.querySelector(".signin").style.display = "none";
    document.querySelector(".search").style.display = "none";
    document.querySelector(".list").style.display = "none";
})

document.getElementById("search").addEventListener("click",function(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".feedback").style.display = "none";
    document.querySelector(".signin").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".list").style.display = "none";
})

document.getElementById("flist").addEventListener("click",function(){
    document.querySelector(".login").style.display = "none";
    document.querySelector(".feedback").style.display = "none";
    document.querySelector(".signin").style.display = "none";
    document.querySelector(".about").style.display = "none";
    document.querySelector(".search").style.display = "none";

})

// search popup

document.getElementById("search").addEventListener("click",function(){
    document.querySelector(".search").style.display = "flex";
})

document.querySelector(".close5").addEventListener("click",function(){
    document.querySelector(".search").style.display = "none";
})

// front content aot

const frond = document.getElementById("front");
const fc = document.getElementById("fc");
frond.append(fc);

for(let i=2;i<=4;i++){

const box1 = document.createElement("div");
box1.className = `box${i}`;
box1.style.cssText = `
cursor: pointer;
    position: relative;
    border-radius: 3px;
    height: 150px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
fc.append(box1);

const imgfc = document.createElement("div");
imgfc.className = "img";
imgfc.style.cssText = `
height: 100%;
    width: 100%;
    border-radius: 3px;
`;
box1.append(imgfc);

const img1 = document.createElement("img");
img1.src = "1.jpg";
img1.style.cssText = `
height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 3px;
`;
imgfc.append(img1);

const pafc = document.createElement("div");
pafc.className = "pa";
pafc.style.cssText = `
background-image: linear-gradient(transparent,rgb(0, 0, 0));
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;
box1.append(pafc);

const pafc1 = document.createElement("p");
pafc1.className = "quality";
pafc1.textContent = "HD";
pafc1.style.cssText = `
transform: translateY(-35px);
    margin-left: 10px;
    font-variant: small-caps;
    background-color: red;
    color: rgb(255, 255, 255);
    font-weight: bold;
    padding: 0px 5px;
    border-radius: 3px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;
pafc.append(pafc1);

const pafc2 = document.createElement("p");
pafc2.className = "season";
pafc2.textContent = `Season ${i}`;
pafc2.style.cssText = `
border-radius: 3px;
    padding: 1px 5px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 13px;
    letter-spacing: 0.3px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 13px;
    transform: translateY(20px);
`;
pafc.append(pafc2);

const pafc3 = document.createElement("p");
pafc3.className = "title";
pafc3.textContent = "Attack On Titans";
pafc3.style.cssText = `
padding: 1px 5px;
    color: rgb(255, 255, 255);
    font-weight: bolder;
    letter-spacing: 1px;
    font-size: larger;
    transform: translateY(25px);
    margin-left: 13px;
    border-radius: 3px;
    font-variant: small-caps;
`;
pafc.append(pafc3);

}

// play

const down = document.getElementById("down");
const dp = document.getElementById("dp");
down.append(dp);  

for(let i=2;i<=22;i++){
    

const box = document.createElement("div");
box.className = `box${i}`;
box.style.cssText = `
    position: relative;
    border-radius: 3px;
    height: 100px;
    width: 300px;
    display: flex;
    background-color: white;
    align-items: center;
    justify-content: flex-start;`;
dp.append(box);

const imgcl = document.createElement("div")
imgcl.className = "img";
imgcl.style.cssText = `
border-radius: 3px;
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
box.append(imgcl);

const p = document.createElement("p");
p.textContent = "HD";
p.className = "quality";
p.style.cssText = `
transform: translateY(-30px);
    margin-right: 90px;
    position: absolute;
    margin-left: 13px;
    font-variant: small-caps;
    background-color: red;
    color: rgb(255, 255, 255);
    font-weight: bold;
    padding: 0px 5px;
    border-radius: 3px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`;
imgcl.append(p);

const img = document.createElement("img");
img.src = "1.jpg";
img.style.cssText = `
height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
`;
imgcl.append(img);


const pa = document.createElement("div");
pa.className = "pa";
pa.style.cssText = `
height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;
box.append(pa);

const p1 = document.createElement("p");
p1.textContent = "Attack On Titans";
p1.className = "title";
p1.style.cssText = `
font-weight: bolder;
    font-size: larger;
    transform: translateY(-28px);
    border-radius: 3px;
    font-variant: small-caps;
`;
pa.append(p1);

const p2 = document.createElement("p");
p2.textContent = `S1 Epi ${i}`;
p2.className = "epi";
p2.style.cssText = `
color: black;
    font-weight: bolder;
    font-size: medium;
    transform: translateY(-23px);
    border-radius: 3px;
    font-variant: small-caps;
`;
pa.append(p2);

const a = document.createElement("a");
a.style.cssText = `
transform: translateY(-13px);
`;
pa.append(a);

const button = document.createElement("button");
button.textContent = "Play";
button.style.cssText = `
outline: none;
    border: none;
    cursor: pointer;
    background-color: rgb(0, 0, 0);
    color: white;
    padding: 2px 3px;
    margin-bottom: -10px;
    border-radius: 3px;
    font-variant: small-caps;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.5px;
`;
a.append(button);

}

// content = front aot popup

document.getElementById("cpbox1").addEventListener("click",function(){
    document.querySelector(".cp").style.display = "none";
    document.querySelector(".categories").style.display = "none";
    document.querySelector(".arrow1").style.display = "flex";
    document.querySelector(".front").style.display = "flex";
    document.querySelector(".down").style.display = "none";
    document.querySelector(".arrow").style.display = "none";
})
document.getElementById("arrow1").addEventListener("click",function(){
    document.querySelector(".front").style.display = "none";
    document.querySelector(".cp").style.display = "flex";
    document.querySelector(".categories").style.display = "flex";
    document.querySelector(".arrow1").style.display = "none";

})

 // front aot = play page pop up

document.getElementById("fcbox1").addEventListener("click",function(){
    document.querySelector(".down").style.display = "flex";
    document.querySelector(".cp").style.display = "none";
    document.querySelector(".front").style.display = "none";
    document.querySelector(".arrow1").style.display = "none";
    document.querySelector(".arrow").style.display = "flex";
})  
document.getElementById("arrow").addEventListener("click",function(){
    document.querySelector(".down").style.display = "none";
    document.querySelector(".front").style.display = "flex";
    document.querySelector(".arrow").style.display = "none";
    document.querySelector(".arrow1").style.display = "flex";

})
