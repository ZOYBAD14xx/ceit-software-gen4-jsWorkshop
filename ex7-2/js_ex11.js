//Ex11: JavaScript Strings
//Ex11.1 Strings Double Quotes and Single Quotes
var heroName1 = "Iron Man";
var heroName2 = 'Captain America';
document.getElementById("ex11-1").innerHTML = "I like " +
heroName1 + ' and ' + heroName2 + "."; 

//Ex11.2 Strings using Backslash
var question = 'What\'s your name?';
var answer = "You can call me \"Monaliza\", and you?";
let response = "JavaScript \
Manpower.";
document.getElementById("ex11-2").innerHTML = question + "<br>" + answer + "<br>" + response; 

//Ex11.3 Strings Methods
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
let eng_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//(1) Length
document.getElementById("ex11-3-1").innerHTML = "lorem = " + lorem.length + "<br>" + "eng_alphabet = " + eng_alphabet.length;

//(2) Position IndexOf() start 0,1,2,...,n
document.getElementById("ex11-3-2").innerHTML = "\"Ipsum\" position = " + lorem.indexOf("Ipsum") + "<br>" + "\"N\" position = " + eng_alphabet.indexOf("N") ;

//(3) match(/txt/g) g is global
document.getElementById("ex11-3-3").innerHTML = "\"Ipsum\" match = " + lorem.match(/Ipsum/g);

//(4) replace("old text", "new text") or /old text/g 
document.getElementById("ex11-3-4").innerHTML = lorem.replace("Ipsum", "<b>NewText</b>");
document.getElementById("ex11-3-5").innerHTML = lorem.replace(/Ipsum/g, "<b>NewText</b>");

//(5) toUpperCase() 
document.getElementById("ex11-3-6").innerHTML = lorem.toUpperCase();
//(6) toLowerCase() 
document.getElementById("ex11-3-7").innerHTML = lorem.toLowerCase();