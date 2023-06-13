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
// var newDiv=document.createElement('div');
// //ADD Class------------------------------------------------------------------
// newDiv.className='Hello 1';
// //ADD id-----------------------------------------------------------------
// newDiv.id="hello1";
// //Add attribute-----------------------------------------------------------
// newDiv.setAttribute('title','Hello Div');

// //create text node------------------------------------------------------
// var newDivtext=document.createtextNode('Hello world');

// //Add text to div
// newDiv.appendChild('newDivText');

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontsize='30px';

// container.insertBefore(newDiv,h1);

// //

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}