import uniqBy from 'lodash/uniqBy';

/**
 * Removes duplicate marks from an array
 *
 * @param {Array} marks The marks to remove duplications from
 * @returns {Array} A list of de-duplicated marks.
 */
function removeDuplicateMarks( marks ) {
	return uniqBy( marks, function( mark ) {
		return mark.getOriginal();
	} );
}

export default removeDuplicateMarks;
