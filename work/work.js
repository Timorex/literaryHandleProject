function openSlideMenu(){
  document.getElementById('slidebar').style.width="250px";
  document.getElementById("content").style.margin="250px";
}
function closeSlideMenu(){
  document.getElementById('slidebar').style.width="0";
  document.getElementById("content").style.margin="0";
}
var x=10;
function addxToPage(){
  document.body.innerHTML +="<p>the value of x ="+x+"</p>";
  x=x+1;
}

function buildTable(){
  addLineToHTMLTable("Micheal","buffa");
  addLineToHTMLTable("Marie-claire","forgue");
  addLineToHTMLTable("stanly","obinna");
}
function addLineToHTMLTable(firstName, lastName){
  var tableBody=document.querySelector("#tableContactBody")
  var newRow =tableBody.insertRow();

  var firstNameCell =newRow.insertCell();
  firstNameCell.innerHTML=firstName;

  var lastNameCell= newRow.insertCell();
  lastNameCell.innerHTML=lastName;

}

var divElem;
function init(){
  divElem=document.querySelector("#theDiv");

}
function changeStyle(){
  divElem.style.border="5px dashed purple";
  divElem.style.backgroundColor="lightGreen";
  divElem.style.padding="10px";

}

function changeImage1(){
  document.getElementById("myImage").src="pictures/literary2.jpeg";
}
function changeImage2(){
  document.getElementById("myImage").src="pictures/literary1.jpg";
}
