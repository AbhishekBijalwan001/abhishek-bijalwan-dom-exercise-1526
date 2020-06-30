//task  - 1 

let heading = document.getElementById('tag-line');     //first - 1

let mass = document.querySelectorAll('.bg-main-content h2'); //step - 2
                                     
let collect =  heading.innerHTML;
                                
collect = collect + '\n----------------------\n';  //step - 3
                                     
for(let x = 0; x< mass.length; x++) {
    
    collect = collect + mass[x].innerHTML + "\n";
}                                                     //step - 4

alert(collect);   //step - 5



//task -2

let data = document.querySelectorAll('.bg-main-content .box');  //step - 1

let thirteenthElement = data[12];                                //step - 2

let boxheading = data[12].querySelector("h2").innerText;

let collectdata = boxheading +'\n---------------------\n'                      //step - 3 

let linetext = data[12].querySelectorAll("p");

for(let a = 0; a< linetext.length; a++){
    collectdata = collectdata + linetext[a].innerText + '\n';
}

alert(collectdata);                                               //step - 4