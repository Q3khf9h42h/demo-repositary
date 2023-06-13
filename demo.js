// //getElementbyclassName----------------------------------------
// var li=document.getElementbyTagname('list-group-items');
// console.log('li');
// console.log(li[1]);
// li[1].textcontent='Hello 2';
// li[1].style.fontweight='bold';
// li[1].style.backgroundcolor='yellow';

// for(var i=0;i<li.length;i++){
// li[i].style.backgroundColor="#f4f4f4";
// }
// //getElementbyTagName---------------------------------------------------
// var li=document.getElementbyTagname('li');
// console.log('li');
// console.log(li[1]);
// li[1].textcontent='Hello 2';
// li[1].style.fontweight='bold';
// li[1].style.backgroundcolor='yellow';

// for(var i=0;i<li.length;i++){
// li[i].style.backgroundColor="#f4f4f4";
// }
// //QuerySelector-------------------------------------------
// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value="Hello world";

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item=document.querySelector('.list-group-item');
// item.style.color="red"

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color="blue"

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color="coral"

// //Queryselectorall//-----------------------------------------

// var title=document.querySelectorAll('.title')
// console.log("titles");
// title[0].textcontent="Hello";

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var odd=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].styl.backgroundColor="#f4f4f4";
//     even[i].styl.backgroundColor="#ccc";
// }


// //TRAVERSING THE DOM//--------------------------------------------------------
// var itemList=document.querySelector('#items');
// //parentNode------------------------------------------------
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentrNode.parentNode);

//parentelement//------------------------------------------------------------------
// console.log(itemList.parentElement)
// ItemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes-----------------------------------------------------------------
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //FirstChild-----------------------------------------------------------
// console.log("itemList.firstChild");
// //FirstElementChild------------------------------------------------------------
// console.log(itemList.FirstElementChild);
// itemList.FirstElementChild.textcontent='Hello 1';

// //LastChild-----------------------------------------------------------------
// console.log("itemList.lastChild");
// //lastElementChild---------------------------------------------------------
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textcontent='Hello 4';

//nextsibilings-------------------------------------------------------------
//console.log("itemList.nextSibiling");
//nextElementSibilings--------------------------------------------------------
//console.log("itemList.nextElementSibiling");

//previousSibilings-------------------------------------------------------
//console.log("itemList.previousSibiling");
//previousElementSibilings--------------------------------------------------------
//console.log("itemList.previousElementSibiling");
//itemList.previousElementSibiling.style.color='green';

//createElement

//Create a div---------------------------------------------------------
var newDiv=document.createElement('div');
//ADD Class------------------------------------------------------------------
newDiv.className='Hello 1';
//ADD id-----------------------------------------------------------------
newDiv.id="hello1";
//Add attribute-----------------------------------------------------------
newDiv.setAttribute('title','Hello Div');

//create text node------------------------------------------------------
var newDivtext=document.createtextNode('Hello world');

//Add text to div
newDiv.appendChild('newDivText');

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontsize='30px';

container.insertBefore(newDiv,h1);

//

