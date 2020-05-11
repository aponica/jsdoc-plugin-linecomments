//=============================================================================
//  Copyright 2020 Opplaud LLC and other contributors. MIT licensed.
//=============================================================================

//-----------------------------------------------------------------------------
//  @alias module:@aponica/jsdoc-plugin-linecomments.beforeParse
//
//  @summary
//    Converts end-of-line-style comments to JSDoc comments.
//
//  @description
//    Any line beginning with two slashes followed by a non-whitespace
//    character is converted to a JSDoc opening comment (slash+asterisk+
//    asterisk). The comment MAY be preceded by whitespace.
//
//    For all immediately-following lines that begin with two slashes (again,
//    optionally preceded by whitespace), the slashes (and any preceding
//    whitespace) are replaced with space+asterisk+space. The whitespace that
//    follows the slashes for the first line of the comment is remembered and
//    stripped, and only the same whitespace is stripped from all following
//    lines, preserving any remaining whitespace for relative indentation.
//
//    The comment is expected to be terminated with the same line as the one
//    that started it (beginning with two slashes followed by a non-whitespace
//    character). This time, the line will be replaced with the JSDOC closing
//    comment (asterisk+slash).
//
//  @param {Event} iEvent
//    The before parse event.
//
//  @example <caption>The source:</caption>
//    ///
//    ///  first line
//    ///  second line
//    ///      third line
//    ///
//  @example <caption>results in:</caption>
//    ∕**
//     * first line
//     * second line
//     *     third line
//     *∕
//-----------------------------------------------------------------------------

module.exports = function ( iEvent ) {

  let zStart = null;
  let reReplace = null;

  iEvent.source =
    iEvent.source.split( '\n' ).map( zLine => {

      if ( null === zStart ) { // look for start

        if ( /^\s*\/\/\S/.test( zLine ) ) { // start of comment
          zStart = zLine;
          return '/**';
          }

        return zLine;

        } // look for start

      else { // process comment line

        if ( zLine === zStart ) { // end of comment
          zStart = reReplace = null;
          return ' */';
          }

        if ( null === reReplace )
          reReplace = new RegExp(
            '^\s*\/\/(' + zLine.match( /^\s*\/\/(\s*)/ )[ 1 ] + ')?' );

        return zLine.replace( reReplace, ' * ' );

        } // process comment line

      } ). // map()
        join( '\n' );

  }; // fBeforeParse

// EOF
