function check(){
const p = document.getElementById("pass").value;

if(p === "love"){
window.location.href = "missme.html";
}
else{
document.getElementById("msg").innerText = "Wrong password 😅";
}
}