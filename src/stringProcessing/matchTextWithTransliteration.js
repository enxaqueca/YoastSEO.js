import map from 'lodash/map';
import addWordBoundary from './addWordboundary.js';
import stripSpaces from './stripSpaces.js';
import transliterate from './transliterate.js';
import transliterateWP from './transliterateWPstyle.js';

/**
 * Creates a regex from the keyword with included wordboundaries.
 * @param {string} keyword The keyword to create a regex from.
 * @returns {RegExp} Regular expression of the keyword with wordboundaries.
 */
var toRegex = function( keyword ) {
	keyword = addWordBoundary( keyword );
	return new RegExp( keyword, "ig" );
};

/**
 * Matches a string with and without transliteration.
 * @param {string} text The text to match.
 * @param {string} keyword The keyword to match in the text.
 * @param {string} locale The locale used for transliteration.
 * @returns {Array} All matches from the original as the transliterated text and keyword.
 */
export default function( text, keyword, locale ) {
	var keywordRegex = toRegex( keyword );
	var matches = text.match( keywordRegex ) || [];

	text = text.replace( keywordRegex, "" );

	var transliterateKeyword = transliterate( keyword, locale );
	var transliterateKeywordRegex = toRegex( transliterateKeyword );
	var transliterateMatches = text.match( transliterateKeywordRegex ) || [];
	var combinedArray = matches.concat( transliterateMatches );

	var transliterateWPKeyword = transliterateWP( keyword, locale );

	if ( ! ( transliterateWPKeyword === transliterateKeyword ) ) {
		var transliterateWPKeywordRegex = toRegex( transliterateWPKeyword );
		var transliterateWPMatches = text.match( transliterateWPKeywordRegex ) || [];

		combinedArray = combinedArray.concat( transliterateWPMatches );
	}


	return map( combinedArray, function( keyword ) {
		return stripSpaces( keyword );
	} );
};


