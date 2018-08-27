import { stripWordBoundariesStart } from "../../js/stringProcessing/stripWordBoundaries.js";
import { stripWordBoundariesEnd } from "../../js/stringProcessing/stripWordBoundaries.js";
import { stripWordBoundariesEverywhere } from "../../js/stringProcessing/stripWordBoundaries.js";

describe( "function to remove word boundaries from words", function() {
	it( "returns a string with word boundaries in the beginning of the word removed", function() {
		expect( stripWordBoundariesStart( "?keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( ".keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( ",keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "'keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "(keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( ")keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "\"keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "+keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "-keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( ";keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "!keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "?keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( ":keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "/keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "»keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "«keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "‹keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "›keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( "<keyword" ) ).toBe( "keyword" );
		expect( stripWordBoundariesStart( ">keyword" ) ).toBe( "keyword" );

		expect( stripWordBoundariesStart( ">! \"keyword" ) ).toBe( "keyword" );

		expect( stripWordBoundariesStart( "keyword" ) ).toBe( "keyword" );
	} );

	it( "returns a string with word boundaries in the end of the word removed", function() {
		expect( stripWordBoundariesEnd( "keyword." ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword," ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword'" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword(" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword)" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword\"" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword+" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword-" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword;" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword!" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword?" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword:" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword/" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword»" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword«" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword‹" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword›" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword<" ) ).toBe( "keyword" );
		expect( stripWordBoundariesEnd( "keyword>" ) ).toBe( "keyword" );

		expect( stripWordBoundariesEnd( "keyword< ?." ) ).toBe( "keyword" );

		expect( stripWordBoundariesEnd( "keyword" ) ).toBe( "keyword" );
	} );

	it( "returns a string with word boundaries in the end of the word removed", function() {
		expect( stripWordBoundariesEverywhere( "?keyword " ) ).toBe( "keyword" );
		expect( stripWordBoundariesEverywhere( "keyword" ) ).toBe( "keyword" );
	} );
} );
