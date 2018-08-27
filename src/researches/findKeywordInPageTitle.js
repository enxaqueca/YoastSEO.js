/** @module analyses/findKeywordInPageTitle */

import wordMatch from '../stringProcessing/matchTextWithWord.js';

import { normalize as normalizeQuotes } from '../stringProcessing/quotes.js';
import escapeRegExp from 'lodash/escapeRegExp';

/**
 * Counts the occurrences of the keyword in the pagetitle. Returns the number of matches
 * and the position of the keyword.
 *
 * @param {object} paper The paper containing title and keyword.
 * @returns {object} result with the matches and position.
 */

export default function( paper ) {
	/*
	 * NormalizeQuotes also is used in wordMatch, but in order to find the index of the keyword, it's
	 * necessary to repeat it here.
	 */
	const title = normalizeQuotes( paper.getTitle() );
	const keyword = escapeRegExp( normalizeQuotes( paper.getKeyword() ).toLocaleLowerCase() );
	const locale = paper.getLocale();
	const result = { matches: 0, position: -1 };
	result.matches = wordMatch( title, keyword, locale ).count;
	result.position = title.toLocaleLowerCase().indexOf( keyword );
	return result;
};
