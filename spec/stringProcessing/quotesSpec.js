import { normalizeSingle as normalizeSingleQuotes } from '../../js/stringProcessing/quotes';
import { normalizeDouble as normalizeDoubleQuotes } from '../../js/stringProcessing/quotes';
import { normalize } from '../../js/stringProcessing/quotes';

describe( "a quote helper", function() {
	describe( "normalizeSingle", function() {
		it( "should normalize single quotes", function() {
			expect( normalizeSingleQuotes( "'" ) ).toBe( "'" );
			expect( normalizeSingleQuotes( "‘" ) ).toBe( "'" );
			expect( normalizeSingleQuotes( "’" ) ).toBe( "'" );
			expect( normalizeSingleQuotes( "‛" ) ).toBe( "'" );
			expect( normalizeSingleQuotes( "`" ) ).toBe( "'" );
		} );
	} );

	describe( "normalizeDouble", function() {
		it( "should normalize double quotes", function() {
			expect( normalizeDoubleQuotes( "“" ) ).toBe( "\"" );
			expect( normalizeDoubleQuotes( "”" ) ).toBe( "\"" );
			expect( normalizeDoubleQuotes( "〝" ) ).toBe( "\"" );
			expect( normalizeDoubleQuotes( "〞" ) ).toBe( "\"" );
			expect( normalizeDoubleQuotes( "〟" ) ).toBe( "\"" );
			expect( normalizeDoubleQuotes( "‟" ) ).toBe( "\"" );
			expect( normalizeDoubleQuotes( "„" ) ).toBe( "\"" );
		} );
	} );

	describe( "normalize", function() {
		it( "should normalize quotes", function() {
			expect( normalize( "'" ) ).toBe( "'" );
			expect( normalize( "‘" ) ).toBe( "'" );
			expect( normalize( "’" ) ).toBe( "'" );
			expect( normalize( "‛" ) ).toBe( "'" );
			expect( normalize( "`" ) ).toBe( "'" );
			expect( normalize( "“" ) ).toBe( "\"" );
			expect( normalize( "”" ) ).toBe( "\"" );
			expect( normalize( "〝" ) ).toBe( "\"" );
			expect( normalize( "〞" ) ).toBe( "\"" );
			expect( normalize( "〟" ) ).toBe( "\"" );
			expect( normalize( "‟" ) ).toBe( "\"" );
			expect( normalize( "„" ) ).toBe( "\"" );
		} );
	} );
} );
