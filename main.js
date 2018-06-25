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

var md = new window.markdownit({html: true}).use(window.markdownitFootnote),
    text      = getText('./examples/example.md'),
    html      = md.render(text);
console.log(html);
document.getElementById('markdown').innerHTML = html;
console.log("test");
