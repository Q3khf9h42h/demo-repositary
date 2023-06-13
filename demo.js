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