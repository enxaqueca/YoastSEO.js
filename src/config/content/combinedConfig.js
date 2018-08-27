import defaultsDeep from "lodash/defaultsDeep";
import getLanguage from "./../../helpers/getLanguage";
import defaultConfig from "./default";
import it from "./it";
import ru from "./ru";

let configurations = {
	it: it,
	ru: ru,
};

export default function( locale ) {
	let language = getLanguage( locale );
	if( configurations.hasOwnProperty( language ) ) {
		return defaultsDeep( configurations[ language ], defaultConfig );
	}

	return defaultConfig;
}
