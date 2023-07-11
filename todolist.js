var todo = document.getElementById('inputfield'),
    button = document.getElementById("button"),
    paragraphs = document.getElementById('para');
button.addEventListener('click', function(){
var divc = document.createElement('div'),
    paragraph = document.createElement('p'),
    del = document.createElement('span'),
    don = document.createElement('span'),
    deltext = document.createTextNode('Delete'),
    dontext = document.createTextNode('Done');
    paragraphs.appendChild(divc);
    divc.appendChild(paragraph);
    del.appendChild(deltext);
    divc.appendChild(del);
    don.appendChild(dontext);
    divc.appendChild(don);
    paragraph.innerHTML = todo.value;
    del.classList.add('delete');
    don.classList.add('done');
    paragraph.classList.add("paragraphs");
    todo.value = '';
del.addEventListener('click' , function(){
    divc.remove('div')
})
don.addEventListener('click',function(){
    paragraph.style.textDecoration = 'line-through';
})
})