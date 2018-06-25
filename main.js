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

var converter = new showdown.Converter({tables: true, extensions: ['footnotes']}),
    text      = getText('./examples/example.md'),
    html      = converter.makeHtml(text);
console.log(html);
document.getElementById('markdown').innerHTML = html;
console.log("test");
