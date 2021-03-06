const FleschReadingEaseAssessment = require( "./readability/fleschReadingEaseAssessment" );
const ParagraphTooLongAssessment = require( "./readability/paragraphTooLongAssessment" );
const PassiveVoiceAssessment = require( "./readability/passiveVoiceAssessment" );
const SentenceBeginningsAssessment = require( "./readability/sentenceBeginningsAssessment" );
const SentenceLengthInDescriptionAssessment = require( "./readability/sentenceLengthInDescriptionAssessment" );
const SentenceLengthInTextAssessment = require( "./readability/sentenceLengthInTextAssessment" );
const SubheadingDistributionTooLongAssessment = require( "./readability/subheadingDistributionTooLongAssessment" );
const TextPresenceAssessment = require( "./readability/textPresenceAssessment" );
const TransitionWordsAssessment = require( "./readability/transitionWordsAssessment" );
const WordComplexityAssessment = require( "./readability/wordComplexityAssessment" );

import InternalLinksAssessment from "./seo/InternalLinksAssessment";
import IntroductionKeywordAssessment from "./seo/IntroductionKeywordAssessment";
import KeyphraseLengthAssessment from "./seo/KeyphraseLengthAssessment";
import KeywordDensityAssessment from "./seo/KeywordDensityAssessment";
const KeywordStopWordsAssessment = require( "./seo/keywordStopWordsAssessment" );
import LargestKeywordDistanceAssessment from "./seo/LargestKeywordDistanceAssessment";
import MetaDescriptionKeywordAssessment from "./seo/MetaDescriptionKeywordAssessment";
const MetaDescriptionLengthAssessment = require( "./seo/metaDescriptionLengthAssessment" );
const OutboundLinksAssessment = require( "./seo/outboundLinksAssessment" );
const PageTitleWidthAssessment = require( "./seo/pageTitleWidthAssessment" );
const SubheadingsKeywordAssessment = require( "./seo/subheadingsKeywordAssessment" );
const TaxonomyTextLengthAssessment = require( "./seo/taxonomyTextLengthAssessment" );
import TextCompetingLinksAssessment from "./seo/TextCompetingLinksAssessment";
const TextImagesAssessment = require( "./seo/textImagesAssessment" );
const TextLengthAssessment = require( "./seo/textLengthAssessment" );
import TitleKeywordAssessment from "./seo/TitleKeywordAssessment";
import UrlKeywordAssessment from "./seo/UrlKeywordAssessment";
const UrlLengthAssessment = require( "./seo/urlLengthAssessment" );
const UrlStopWordsAssessment = require( "./seo/urlStopWordsAssessment" );

const readability = {
	FleschReadingEaseAssessment,
	ParagraphTooLongAssessment,
	PassiveVoiceAssessment,
	SentenceBeginningsAssessment,
	SentenceLengthInDescriptionAssessment,
	SentenceLengthInTextAssessment,
	SubheadingDistributionTooLongAssessment,
	TextPresenceAssessment,
	TransitionWordsAssessment,
	WordComplexityAssessment,
};

const seo = {
	InternalLinksAssessment,
	IntroductionKeywordAssessment,
	KeyphraseLengthAssessment,
	KeywordDensityAssessment,
	KeywordStopWordsAssessment,
	LargestKeywordDistanceAssessment,
	MetaDescriptionKeywordAssessment,
	MetaDescriptionLengthAssessment,
	OutboundLinksAssessment,
	PageTitleWidthAssessment,
	SubheadingsKeywordAssessment,
	TaxonomyTextLengthAssessment,
	TextCompetingLinksAssessment,
	TextImagesAssessment,
	TextLengthAssessment,
	TitleKeywordAssessment,
	UrlKeywordAssessment,
	UrlLengthAssessment,
	UrlStopWordsAssessment,
};

export {
	readability,
	seo,
};
