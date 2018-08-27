/** @module analyses/getKeywordCount */

import matchWords from '../stringProcessing/matchTextWithWord.js';

import unique from 'lodash/uniq';
import escapeRegExp from 'lodash/escapeRegExp';

/**
 * Calculates the keyword count.
 *
 * @param {object} paper The paper containing keyword and text.
 * @returns {number} The keyword count.
 */
export default function( paper ) {
	const keyword = escapeRegExp( paper.getKeyword() );
	const text = paper.getText();
	const locale = paper.getLocale();
	const keywordsFound = matchWords( text, keyword, locale );

	return {
		count: keywordsFound.count,
		matches: unique( keywordsFound.matches ).sort( ( a, b ) => b.length - a.length ),
	};
};
