function getText(myUrl){
  var result = null;
  $.ajax( {url: myUrl,
           type: 'get',
           dataType: 'html',
           async: false,
           success: function(data) {result = data; }
         }
       );
  FlieReady = true;
  return result;
}

var md = new window.markdownit({html: true}).use(window.markdownitFootnote).use(window.markdownitCentertext),
    text      = getText('./examples/example.md'),
    html      = md.render(text);
console.log(html);
document.getElementById('markdown').innerHTML = html;

var classes = document.getElementsByClassName("citation");
var bibtexkeys = [];

for (var i = 0; i < classes.length; i++) {
  bibtexkeys.push(classes[i].innerHTML);
}

console.log(bibtexkeys[0]);

var keys = " bibtexkeys=\"";

for (var i = 0; i < bibtexkeys.length - 1; i++) {
  keys += bibtexkeys[i] + "\|";
}

keys += bibtexkeys[bibtexkeys.length - 1] + "\"";

console.log(keys);

var d = document.getElementById("bibtex_display");
d.className += keys;
