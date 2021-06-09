---
title: استراتژی
englishTitle: Strategy
type: رفتاری
englishType: Behavioral
folder: behavioral
description: "یک الگوی طراحی رفتاری است که به شما امکان می دهد خانواده ای از الگوریتم ها را تعریف کنید ، هر یک از آنها را در یک کلاس جداگانه قرار دهید و آبجکت آنها را جایگزین کنید."
image: strategy.png
structure: structure.png
problem: problem.png
solution: solution.png
comic: strategy-comic-1-en.png
slug: strategy
thumbnail: strategy-mini.png
---

# استراتژی

-

یک الگوی طراحی رفتاری است که به شما امکان می دهد خانواده ای از الگوریتم ها را تعریف کنید ، هر یک از آنها را در یک کلاس جداگانه قرار دهید و آبجکت آنها را جایگزین کنید.


<AssetsImage path="design-pattern/strategy/solution.png" max-width-props="570"></AssetsImage>


```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```
