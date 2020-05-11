//=============================================================================
//  Copyright 2020 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  @module @aponica/jsdoc-plugin-linecomments
//
//  @summary
//    JSDoc support for end-of-line style comments (//…)
//
//  @description
//    JSDoc support for end-of-line style comments (//…)
//
//    This module serves as a plugin for JSDoc to support the end-of-line
//    style of documentation comment. Using this plugin, a JSDoc comment can
//    begin with two slashes followed by any non-whitespace character
//    (optionally preceded by whitespace), and end with the exact same line
//    as was used to start it.
//
//    The comment used to generate this doclet is an example.
//-----------------------------------------------------------------------------

module.exports = {
  handlers: {
    beforeParse: require( './lib/fBeforeParse.js' )
    }
  };

// EOF
