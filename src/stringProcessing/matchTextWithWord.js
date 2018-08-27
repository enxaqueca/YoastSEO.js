/** @module stringProcessing/matchTextWithWord */

import stripSomeTags from '../stringProcessing/stripNonTextTags.js';

import stripSpaces from '../stringProcessing/stripSpaces.js';
import removePunctuation from '../stringProcessing/removePunctuation.js';
import { unifyAllSpaces as unifyWhitespace } from '../stringProcessing/unifyWhitespace.js';
import matchStringWithTransliteration from '../stringProcessing/matchTextWithTransliteration.js';
import { normalize as normalizeQuotes } from '../stringProcessing/quotes.js';
import map from 'lodash/map';

/**
 * Returns the number of matches in a given string
 *
 * @param {string} text The text to use for matching the wordToMatch.
 * @param {string} wordToMatch The word to match in the text
 * @param {string} locale The locale used for transliteration.
 * @param {string} [extraBoundary] An extra string that can be added to the wordboundary regex
 * @returns {Object} The matches found and the number of matches.
 */
export default function( text, wordToMatch, locale, extraBoundary ) {
	text = stripSomeTags( text );
	text = unifyWhitespace( text );
	text = normalizeQuotes( text );
	wordToMatch = normalizeQuotes( wordToMatch );
	let matches = matchStringWithTransliteration( text, wordToMatch, locale, extraBoundary );
	matches = map( matches, function( keyword ) {
		return stripSpaces( removePunctuation( keyword ) );
	} );

	return {
		count: matches.length,
		matches: matches,
	};
};
