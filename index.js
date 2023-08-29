let a=document.getElementById("chan");
let c=0;
function test(){
    let b=["Developer","Gamer","Youtuber","Tester"];
    a.textContent = b[c];
    c=(c+1)%b.length;
}
setInterval(test, 1000);
let a1=document.getElementById("chan1");
let c1=0;
function test1(){
    let b=["Developer","Gamer","Youtuber","Tester"];
    a1.textContent = b[c1];
    c1=(c1+1)%b.length;
}
setInterval(test1, 1000);