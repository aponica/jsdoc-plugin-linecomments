# @aponica/jsdoc-plugin-linecomments

[JSDoc](https://www.npmjs.com/package/jsdoc) support for end-of-line style 
comments (`//…`).

JSDoc requires comments beginning with `/**` and ending with `*/`, but some 
project coding standards (such as ours) reserve mutli-line comments for 
debugging purposes and require that all comments begin with `//` to the end 
of the line.

This module serves as a plugin for JSDoc to support the end-of-line style of 
documentation comment. Using this plugin, a JSDoc comment can begin with `//` 
followed by any non-whitespace character (optionally preceded by whitespace), 
and end with the exact same line as was used to start it.

Take care not to include actual multi-line comments (`/*…*/`) in your 
comments, but extra `//` characters in the comment are perfectly fine!

## Examples
```javascript
//--------------------------------------------------------------
//  The above line starts a JSDoc comment.
//  The following line ends it.
//--------------------------------------------------------------
```

```javascript
    //*
    //*  Note: each terminator is exactly the same as its opener!
    //*
```

<a name="jsdoc-plugin-linecomments-installation"></a>
## Installation

```sh
npm i -D @aponica/jsdoc-plugin-linecomments
```

Of course, you must have [JSDoc](https://www.npmjs.com/package/jsdoc) installed, also.


<a name="jsdoc-plugin-linecomments-configuration"></a>
## Configuration

In your JSDoc [configuration file](https://jsdoc.app/about-configuring-jsdoc.html), 
add a `plugins` section (if there isn't one already) and specify this module 
as a plugin:

```json
{
    "plugins": [ "@aponica/jsdoc-plugin-linecomments" ]
}
```

That should do it!

## Please Donate!

[<img src="https://aponica.com/lib/helpinghand.png"
 class=leftimg>](https://www.paypal.com/biz/fund?id=BEHTAS8WARM68)

Help keep a roof over our heads and food on our plates! 
If you find aponica™ open source software useful, please 
[click here](https://www.paypal.com/biz/fund?id=BEHTAS8WARM68) 
to make a one-time or recurring donation via *PayPal*, credit 
or debit card. Thank you kindly!

## Copyright

Copyright 2020 Opplaud LLC and other contributors.

## License

MIT License.

## Related Links

[Online Documentation](https://aponica.com/docs/jsdoc-plugin-linecomments/)

<style>h2{clear:left}img.leftimg{float:left;margin-right:1em}</style>
