var b , sp , it = 0 ,it2 = 0 , i = 0 , i2 = 0
function load_read(target) {
it = 0 ; it2= 0
var elementExists = document.getElementById("marco2");
if (elementExists != null) {elementExists.parentNode.removeChild(elementExists);}
b = document.createElement('div');
b.setAttribute('id', 'marco2');
b.style.marginLeft = '5%'
b.style.marginRight = '5%'
b.style.width = '70%'
b.style.backgroundColor = "LemonChiffon"

document.body.appendChild(b);

 var patt1 = /([…|.|...])/g;
 
var textfeten  = target.split(patt1);
for (var v =textfeten.length; v>0; v--) {
if (textfeten[v] == "." || textfeten[v] == "..." || textfeten[v] == "…") {
textfeten[v-1] = textfeten[v-1] + textfeten[v]
textfeten.splice(v,1)
}
}

if(textfeten[(textfeten.length -1)] == "") {textfeten.splice((textfeten.length -1),1)}


textfeten.forEach(load_spans)

funcioncanta(it, it2)


}

 function load_spans(item, index) {

  		  var x = document.createElement("SPAN");
  		   b.appendChild(x);
  		   i = index
  		    var patt1 = /([,|;|:|\?])/g;
    var textfeten2  = item.split(patt1);
  for (var v=textfeten2.length; v>0; v--) {
if (textfeten2[v] == "," || textfeten2[v] == ":" || textfeten2[v] == "?" || textfeten2[v] == ";") {
textfeten2[v-1] = textfeten2[v-1] + textfeten2[v]
textfeten2.splice(v,1)
}
}  
   
 textfeten2.forEach( function (item) {
var x = document.createElement("SPAN");
 {var t = document.createTextNode(" " + item);} 
    x.appendChild(t);
    b.childNodes[i].appendChild(x);
 })

 }
  function funcioncanta(it,it2) {
 sp = b.childNodes[it].childNodes[it2]
 responsiveVoice.speak(sp.childNodes[0].nodeValue, L1.value, {volume: 1, onstart: StartCallback, onend: EndCallback})	
}

function StartCallback() {
sp.parentNode.style.backgroundColor =  "#7FFFD4"
sp.style.backgroundColor = " 	#ADD8E6"
}
function EndCallback() {
sp.style.backgroundColor = "transparent"
it2 = it2 + 1
if (it2 < b.childNodes[it].childNodes.length) { funcioncanta(it,it2)
} else { b.childNodes[it].style.backgroundColor = "transparent"
it = it + 1
it2 = 0
if (it < b.childNodes.length) {funcioncanta(it,it2)}
}
	}