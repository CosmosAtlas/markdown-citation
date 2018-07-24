# CS 846 Advanced Topics in Electronic Publishing
## Project Report: Extending Markdown with Citations
------

*Wenhan Zhu (Cosmos)*

### Abstract

Markdown is a widely used markup language on the internet. It's simplicity and ease of used made it a great tool for writting blog posts and documentations. It's design allowed it to be extended for more functionality. Many people and organization extended the original Markdown and some of the extensions became standards among users. This report shows an extension of Markdown by adding citation support through javascript implementation.

### Introduction

Markdown is a lightweight markup language with plain text formatting syntex. ^[[https://en.wikipedia.org/wiki/Markdown](https://en.wikipedia.org/wiki/Markdown)] It was first introduced by John Gruber in 2004^[[https://daringfireball.net/projects/markdown/](https://daringfireball.net/projects/markdown/)]. It is designed so that it can be converted to HTML which makes it very popular for blog posts and documentations for readme files.

In the initial implementation, Markdown syntax is very ambiguous, which led to many inconsistencies between different implementations. Due to its wide popularity, people gathered together and formed different organizations to introduce standardization to Markdown. Some of the standardization became commonly adopted such as CommonMark^[[http://commonmark.org/](http://commonmark.org/)] and GitHub Flavored Markdown^[[https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)]. The details of these standardization are discussed in later sections.

I use Markdown in my daily life. However, many times I find it lack some fundamental features that's important for my use. Sometimes these features are implemented by specific Markdown editors or has some work around. Sometimes it's too complicated and it requires more setup. One such feature is proper citation support. There are times that I need to write a short 1~2 page project proposal or technical report that needs a few references but with standard Markdown the work around is to list them manually. Inspired by this problem, the goal of this project is to explore how extensions of Markdown is down in javascript and implement an extension of Markdown that contains all the features that I want.

### Markdown syntax

Due to the nature of Markdown and it's standardizations, it's syntax translates to subset of HTML tags. Below are some major supported features and it's introduction in some standardization. CommonMark is a standardized spec for Markdown fromed by a group of people and now is the base for most Markdown specifications. GFM (GitHub Flavored Markdown) is an extension by GitHub that's based on CommonMark.

| Markdown Standarization | Supported Syntax |
| - |:-|-|
| Markdown | Hearders, Ordered/Unordered List, Backquotes, Code Blocks Horizontal Rules, Links, Emphasis, Code, Image |
| CommonMark| All above and Fenced Code Blocks, Start number of ordered list. |
| GFM | All above and Tables, Task list, Strkethrough, Autolinks |

Since Markdown is designed to be translated to HTML, naturely HTML code can fall through the translater(parser). This allows Markdown to contain raw HTML code which makes many extension doesn't depend on Markdown Syntax. One such example is math rendering which is discussed later. However, in other situations, HTML fall though might not be enough. There are also safty reasons that HTML fall though is not good and some implementations does not support this feature such as GFM.

### Moltivation

The goal of the project is to implement a extension of Markdown that is powerful enough to satisfy my needs but not make it too complicated. The benefit of Markdown is that I can keep all the text clean in files that is readable.

In a basic Markdown editor, all features of GFM is normally supported and many supports more features such as embedding code execution results in a file. However, these features requires local setup and often won't work out of the box. This project aims to avoid these problems.

The extensions that I want for Markdown are math equation rendering and citations in bibtex style. Ideally also great pdf export functionality. Details of these features will be discussed in the implementation section.

Many efforts has been done previously for extending Markdown to support the aforementioned features. Math equation rendering commonly supported by Markdown editors. However, cition support in bibtex style is seldomly seen and most of the implementations requires the exsistence of a local *LaTex* copy.

For my purpose, I want something that's lightweight and works on any computer. So, I looked at javascript solutions. Javascript can be ran in any modern browser environment and browser is now an essential part of everyday computing. Javascript also have a huge amount of packages that provides many functionalities. As a result, this project is done by javascript using many open source libraries.

### Pipeline

In order to have a nicely looking HTML page translated from Markdown. There are a fews things that needs to be done. First, the Markdown file needs to be parsed and translated to raw HTML content. Then, the raw HTML needs to be processed for adding additional functionality and styling to make it look better.

In this project, an outline of the style and additional functionalities of the page is pre-generated. An element of the generated HTML is allocated to host the HTML output from the Markdown translator. The structure looks like the following.

```HTML
<!doctype html>
<html lang="en-US">
<head>
    <!-- include files for scripting and styling -->
</head>
<body>
    <div id='markdown'>  <!-- To be filled by result from parser --> </div>
    <!-- include javascript files -->
</body>
</html>
```

In the headings, javascript setup code for packages and CSS styling code is loaded. In body section, javascript code is written to read from a Markdown file, parse it and translate it into HTML then replace the content of `<div id='markdown'> </div>` to the translated HTML. Under this structure, extensions can be done in 2 ways.

The first way is using HTML passthrough. When a parser is parsing Markdown content, all text that's not in specific Markdown syntax will remain unmodified. Some natural extensions are done this way. For example, Markdown does not support resizing or centering an image. So instead of using Markdown syntax for including an image, one could simply write the raw HTML code for including an image with all proper properties one would like to set. Math equation rendering support is done using this method.

The other way is to create an extension to the parser. Many parser supports extensions, so while parsing additional tasks could be done. For example, by using regular expressions, a extension can find e-mail addresses and automatically change them into e-mail links. Supporting citation is done using both of the methods for simplicity.

### Implementation

#### Math rendering

There are servel ways to display math equations in HTML. By an image, using javascript libraries (MathJax, Katex) or natively through MathML. For my purpose, I want to write math equations in *LaTex* which is very common for scientific writing and myself is very familiar with them. So, I decided to used MathJax to display math equations. By setting up MathJax properly in the HTML outline code, any thing surrounded by `$` such as `$x^2$`
will be rendered correctly in a HTML page.

#### Citations

##### Bibtex
Bibtex is originally a tool written for *LaTex* to process lists of referencese. It's format `.bib` in is plain text and is widely adopted by many applications for reference management. A tipical bibtex entry looks like this.

```Bibtex
@article{einstein,
    author =       "Albert Einstein",
    title =        "{Zur Elektrodynamik bewegter K{\"o}rper}. ({German})
        [{On} the electrodynamics of moving bodies]",
    journal =      "Annalen der Physik",
    volume =       "322",
    number =       "10",
    pages =        "891--921",
    year =         "1905",
    DOI =          "http://dx.doi.org/10.1002/andp.19053221004"
}
```

When citing a source, in *LaTex* the macro is `\cite{einstein}`. An equivalent syntax needs to be first determined in the implementation.

##### Footnotes

Footnote is a common Markdown extension that functions like citations but doesn't include proper formatting for academic styling. Footnote's syntax is `[^FN]: This is a footnote`, where `[^FN]` indicates it's the location to put the footnote and the text after `:` is the content of the footnote. I decided to used a similar syntax `[@einstein]` for citation. Where the text after `@` is the citation index for Bibtex.

##### Parsing

By comparing some Markdown parsers implemented in javascript, I decided to used a parser called [markdown-it](https://github.com/markdown-it/markdown-it). This parser is implemented with proper support for extensions and have nice functionality over other parsers that I've tried. I used another extension of this parser `markdow-it-center-text` as a base and modified it to suit my purpose.

The extension added an extra parsing step that would identify the pattern and replace the text with proper HTML elements. So `text[@einstein]` would be replaced by `text<span class="citation">einstein</span>`. Then by CSS styling, the content would be wrapped by square brackets and the result will look like `text[einstein]`. I choose this style because it's my favorite styling for citations. The styling can be changed if other styles are wanted.

##### Displaying

Now, replacing elements in the text is handled. We need to display the reference list based on citations and a bibtex file. A javascript librariy called `bibtex-js` is used for this purpose. This library supports displaying citation by bibtex keys. Which suits my purpose for displaying citations correctly.

So I wrote code to process the previously translated HTML with `span` elements of class `citation` to retreive the list of bibtex keys and display them at the end of the document by adding proper elements to the outline HTML.

#### Results

##### HTML display

With proper CSS styling, the result of the project renders nicely in a browser. `bibtex-js` can display reference nicely by writing proper CSS styling for element. Below lists the additional packages I used for the project and their purposes.

- prismjs (Syntax hightlighting for code segments)
- picnic css (lightweight styling for HTML elements)
- jQuery (read text from a file for reading Markdown)

##### Output files

One of the features that most Markdown editors have but give different output is convert to PDF. There are 2 common ways to do that. The first is to give the normal HTML output and use a browser to print to file. The other is to convert Markdown to *LaTex* then to PDF. The previous method requires proper print CSS styling to the converted HTML and the later often require a installation of *LaTex* locally.

In my implementation I considered the first method. By opening a live server on my machine to avoid the some-origin policy, a webpage converted from Markdown will be opened in a browser. To my surprise, different browsers behaves very differently to each other. Different browsers use different rendering engines and when trying to print a webpage, different web browser uses different techniques. By my personal experience, Chrome would often give the best result and Firefox is next. Other browsers such like Midori simply give a cropped screenshot of the webpage which is far from satisfiable.

##### Future improvements

Currently, the status of the project is a proof of concept. Every bit of the process is explored and an implementation is finished. There are many improvements that can be done to the project. Below are some directions and my thoughts on them.

##### Portability

Before this, my main editor for Markdown is using `atom` with a plugin called `Markdown Preview Enhanced`. This plugin supports most features I want and support custom CSS styling. However, like previously discussed many features require some additional software installed on the machine. For example, a beta citation functionality of this plugin needs *LaTex* locally to process the citation list. With the rapid development of web technologies, it's not very hard to turn a HTML webpage to an application. One possibility is to wrap the result of the project in a text editor.

##### More citation styles

Currently, the style of the citations are copied from the examples given by `bibtex-js`. A list of common citation styles can be implemented so that by setting these properties properly the HTML result would display them in different styles.

The current syntax `[@cite]` requires the text to be matched with bibtex entry and will not changed the content when displayed. Some citation style display them in numbers. Future changes to `markdown-it` extension could incorporate these requirements and produce a wide variety of reference styles.

#### Conclusion

The project showed the extensibility of Markdown and implemented citations in Markdown though parser and HTML outline setup. This report is writen in Markdown by the result of the project. Compared to the version of presentation, the entire implementation is completed and many style changes has been made for better PDF output. For example, the font family is changed to *Times New Roman* and `media` information in CSS has been changed to proper margins.

I argue that the current result would serve my purpose of rendering math equations nicely and supports citations nicely. And the only dependency of the project is a web browser. Web services like GitHub Pages can properly host the project. This report can be find online at [this](https://atep-wz.github.io/markdown-citation/index.html) address. In order to showcase all functionality of the project. The showcase section will contain math equations and citation examples. All reference in this report will be done using footnotes since there is no academic reference in the report.



#### Showcase
Maxwell's Equations[@cla14]
$$ \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t}  = \frac{4\pi}{c}\vec{\mathbf{j}}    $$
$$ \nabla \cdot \vec{\mathbf{E}}  = 4 \pi \rho  $$
$$ \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}} $$
$$ \nabla \cdot \vec{\mathbf{B}}  = 0 $$
