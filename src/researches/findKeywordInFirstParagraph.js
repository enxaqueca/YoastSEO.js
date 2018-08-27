/** @module analyses/findKeywordInFirstParagraph */

import matchParagraphs from "../stringProcessing/matchParagraphs.js";

import wordMatch from "../stringProcessing/matchTextWithWord.js";
import escapeRegExp from "lodash/escapeRegExp";
import reject from "lodash/reject";
import isEmpty from "lodash/isEmpty";

/**
 * Counts the occurrences of the keyword in the first paragraph, returns 0 if it is not found,
 * if there is no paragraph tag or 0 hits, it checks for 2 newlines, otherwise returns the keyword
 * count of the complete text.
 *
 * @param {Paper} paper The text to check for paragraphs.
 * @returns {number} The number of occurrences of the keyword in the first paragraph.
 */
export default function( paper ) {
	const paragraphs = matchParagraphs( paper.getText() );
	const keyword = escapeRegExp( paper.getKeyword().toLocaleLowerCase() );
	const paragraph = reject( paragraphs, isEmpty )[ 0 ] || "";
	return wordMatch( paragraph, keyword, paper.getLocale() ).count;
}
