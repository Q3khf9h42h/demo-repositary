//getElementbyclassName
var li=document.getElementbyTagname('list-group-items');
console.log('li');
console.log(li[1]);
li[1].textcontent='Hello 2';
li[1].style.fontweight='bold';
li[1].style.backgroundcolor='yellow';

for(var i=0;i<li.length;i++){
li[i].style.backgroundColor="#f4f4f4";
}
//getElementbyTagName
var li=document.getElementbyTagname('li');
console.log('li');
console.log(li[1]);
li[1].textcontent='Hello 2';
li[1].style.fontweight='bold';
li[1].style.backgroundcolor='yellow';

for(var i=0;i<li.length;i++){
li[i].style.backgroundColor="#f4f4f4";
}
//QuerySelector
var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value="Hello world";

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND"

var item=document.querySelector('.list-group-item');
item.style.color="red"

var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color="blue"

var seconditem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color="coral"

//Queryselectorall//

var title=document.querySelectorAll('.title')
console.log("titles");
title[0].textcontent="Hello";

var odd=document.querySelectorAll('li:nth-child(odd)');
var odd=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++){
    odd[i].styl.backgroundColor="#f4f4f4";
    even[i].styl.backgroundColor="#ccc";
}


