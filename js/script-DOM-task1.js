/* Task 1 */

var myBtn1 = document.getElementById('btn1');
    myBtn2 = document.getElementById('btn2');
    myP    = document.getElementById('main')
    myDiv1 = document.getElementById('div-1');

    myRemove = document.getElementById('remove'); 

myBtn1.onclick = function() {
    myDiv1.textContent = "Yes, The Paragraph Contains a Class Named 'click 1'";
}

myBtn2.onclick = function() {
    myDiv1.textContent = "No, The Paragraph Doesn't Contains a Class Named 'click 2'";
}

myRemove.onclick = function() {
    myDiv1.textContent = " ";
};


