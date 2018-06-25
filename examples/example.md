## Examples
This is an example markdown file containing every feature the current parser supports

An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺



An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

    # Let me re-iterate ...
    for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
    print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
    # (but not *too* quick)
    time.sleep(0.5)
    print i
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].



You can create tables by assembling a list of words and dividing them with hyphens `-` (for the first row), and then separating each column with a pipe `|`:

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column


If you want to embed images, this is how you do it:

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.


##### Extra tests for styling
###### Lorem test
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper, velit quis tristique rutrum, nunc neque dictum arcu, vel sagittis tellus justo id nibh. Duis sollicitudin eros sed urna mattis vehicula. Integer ac rutrum est. Fusce semper consequat mauris, a gravida metus euismod vel. Nulla eget eros enim. Sed a diam ligula. Morbi enim orci, pulvinar ut justo vitae, pretium molestie est. Praesent ut metus at dolor ultrices iaculis et sed mi. Morbi vitae purus eget tortor porttitor cursus. Nullam fermentum est ut leo scelerisque porta. Aliquam porttitor et orci vitae rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ac tortor nulla. Duis eu eleifend turpis. Vivamus quis dui orci. Donec arcu est, sagittis non vestibulum eget, aliquam in nunc.

Sed tempor porttitor aliquet. Proin eget lorem sit amet neque mattis laoreet in sit amet elit. Cras vulputate gravida porta. Nullam ut metus eleifend ipsum ullamcorper commodo. Quisque ultrices viverra eleifend. Nullam mi enim, gravida vitae urna et, scelerisque feugiat nisl. Nulla aliquet enim ligula. Aliquam accumsan dui ac nunc vehicula iaculis. In tincidunt ut mauris eu hendrerit. Donec vitae dignissim quam. Etiam ultricies ligula nec leo fringilla volutpat. Nulla efficitur leo in cursus cursus. Pellentesque suscipit quam condimentum, hendrerit nulla eu, vulputate arcu. Aenean in ipsum orci. Etiam convallis quam vel diam pharetra consectetur.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ipsum sem, accumsan nec sodales ac, interdum non nisi. Nulla vulputate tristique aliquet. Nulla varius non justo ac ullamcorper. Sed metus tellus, placerat at velit nec, sagittis fermentum nunc. In vel lectus a lorem porttitor feugiat non vel diam. In at cursus tellus. Praesent sollicitudin mauris felis, tincidunt facilisis turpis ultricies at. Nam lobortis cursus odio, non lobortis massa scelerisque eget. Quisque faucibus nunc id urna venenatis pretium.

Pellentesque massa sem, aliquet in sagittis non, placerat eget lectus. Sed ultrices sollicitudin arcu. Praesent vel aliquam magna. Quisque interdum congue felis eget feugiat. Vestibulum augue ex, faucibus a erat a, auctor euismod justo. Curabitur et sollicitudin neque, a lacinia libero. Maecenas et hendrerit libero. Praesent pellentesque auctor porttitor. Morbi porta massa non nisi euismod, id condimentum quam semper. Suspendisse vel vulputate sapien. Pellentesque volutpat sapien ut ante auctor, eget aliquet ipsum blandit. Integer eget nibh in lacus semper efficitur. Proin nec enim id sem commodo laoreet id sit amet odio. Vestibulum accumsan id sapien sit amet suscipit.

Suspendisse potenti. Maecenas vitae quam consequat, euismod eros blandit, molestie libero. Donec condimentum, felis vel mollis aliquam, odio nulla egestas eros, sit amet tincidunt ante metus vel eros. Donec vel dictum leo. Praesent viverra tristique ante, ut elementum urna pharetra nec. Phasellus quam odio, malesuada quis sapien in, scelerisque tincidunt lectus. Sed vitae nibh et odio cursus varius vitae vel leo. Curabitur luctus molestie egestas. Nunc eu accumsan nulla, eget aliquam mauris. Sed non feugiat urna, vitae lobortis lectus. Suspendisse ac nisl dapibus, euismod libero eu, interdum tortor. Mauris at accumsan magna. Phasellus non accumsan ipsum, quis maximus libero.

In sodales nisi nibh, at cursus ante blandit nec. Nulla facilisi. Integer ut posuere felis, nec hendrerit massa. Nunc porta sapien eget lorem mollis mollis. Integer placerat feugiat magna, ac scelerisque est tincidunt eget. Suspendisse lacinia risus mi, sit amet dignissim augue sagittis nec. Nullam vel elit sodales, dapibus justo ac, aliquet metus. Nunc euismod diam a urna fringilla malesuada. Nam magna risus, ultrices a cursus ac, consectetur vel dui. Sed faucibus massa odio, quis scelerisque lectus tincidunt quis.

Curabitur vel nulla eget arcu facilisis auctor. Maecenas tristique sem eget neque ultricies, a laoreet odio mollis. Pellentesque id consequat nisl. Nunc nec arcu pulvinar, pharetra mauris et, scelerisque felis. Vestibulum faucibus ut tellus at efficitur. Curabitur faucibus arcu vitae varius porttitor. Mauris sollicitudin lacus mi, eu lacinia ante dictum lacinia. Vivamus nec volutpat magna. Aliquam arcu libero, pharetra eget odio eu, bibendum tristique tellus. Cras nisl tortor, finibus vitae ultrices et, luctus eu augue. Cras bibendum urna vel volutpat gravida. Sed convallis ligula id hendrerit rhoncus. Vestibulum lorem augue, tempor et diam eget, eleifend gravida purus. Suspendisse tincidunt commodo ex, in tempus justo commodo in.

Donec dictum tortor id semper vehicula. Nunc semper eu urna quis varius. Nam dapibus interdum suscipit. Nam a euismod arcu, at lacinia ante. Etiam vel urna dolor. Vestibulum finibus orci eget libero luctus suscipit vel vel est. Phasellus rutrum mi faucibus varius mollis.

Curabitur commodo magna sapien, non semper risus mollis mattis. Vivamus malesuada a eros ac imperdiet. Pellentesque fringilla ultrices purus, iaculis aliquet ante commodo eu. Curabitur tincidunt nisi leo, et ullamcorper lectus tempor eget. Nam lacinia eros ipsum, vestibulum efficitur ex faucibus a. Pellentesque faucibus aliquet arcu id euismod. Vivamus faucibus pretium erat eget viverra.

Proin sit amet orci diam. Proin elementum mauris eu odio placerat vulputate. Fusce varius fringilla mi, et sodales mauris mollis sodales. Curabitur at nisl orci. Ut sit amet quam orci. Proin eu luctus sapien. In ac elit nisi. Cras dictum ut neque a gravida. Nulla at condimentum dui, eu malesuada augue. Sed libero erat, euismod in leo quis, interdum eleifend felis. Donec pharetra felis dolor, eget ultricies libero suscipit vel. Curabitur ultricies ipsum vel nisl pharetra rhoncus. Integer nibh sapien, suscipit et tincidunt vel, porttitor sed neque. Nam consectetur erat quis ultricies rutrum. In posuere libero sit amet magna hendrerit sagittis in nec ante.

Sed eu dignissim nisi. Sed et pellentesque sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla tristique felis, at consectetur arcu finibus eu. Duis tincidunt interdum lorem, quis condimentum risus facilisis ac. Vivamus tellus tellus, porttitor quis accumsan in, rutrum at nunc. Phasellus non eros non lacus consectetur placerat nec id mauris. Integer ut augue rhoncus est luctus imperdiet vehicula ac magna. Cras feugiat enim sit amet eros ultrices sodales. Sed non erat et diam tristique eleifend ac sed eros. Quisque placerat nisl ac nibh volutpat vulputate. Cras vitae congue tortor, eu euismod tellus. Aliquam erat dui, pretium et luctus molestie, posuere ac velit.

Maecenas fringilla massa ante. Morbi justo purus, rutrum ut finibus a, iaculis et tellus. Pellentesque pulvinar, arcu et scelerisque rhoncus, est nulla gravida mauris, vel finibus augue nisl at eros. Ut non sapien posuere, tempus nulla in, finibus elit. Ut dapibus erat at sapien volutpat consequat. Quisque sit amet dapibus tellus, iaculis convallis velit. Sed viverra felis libero, ut pharetra odio congue eu. Fusce bibendum, tellus at condimentum dapibus, enim nisl varius dui, eget consequat leo nibh at tortor. Phasellus felis sapien, ullamcorper quis mi vel, placerat vulputate sem. Cras eu nisl vitae nibh rutrum placerat nec at velit. Nunc molestie nisl sed enim aliquam maximus a eu justo. Nullam vitae volutpat ipsum. Quisque laoreet mollis pretium.

[^1]: Footnote text goes here.
