import passiveVoice from "../../js/researches/getPassiveVoice.js";
import Paper from "../../js/values/Paper.js";

// Tests inspired by the examples on http://www.ruscorpora.ru
describe( "detecting passive voice in sentences", function() {
	it( "returns active voice in Russian", function() {
		let paper = new Paper( "Мы исследовали спектр.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: исследован
		let paper = new Paper( "Экспериментально исследован спектр ИК-фотопроводимости, возникающей после предварительного освещения образца F-светом.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns active voice in Russian", function() {
		let paper = new Paper( "Мы представили себе, что бы могло произойти.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: представлены
		let paper = new Paper( "В этой нише представлены, по сути, две основные компании ― Tyan и Supermicro.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns active voice in Russian", function() {
		let paper = new Paper( "Я сказал, что продукция Supermicro считается более надёжной.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: сказано
		let paper = new Paper( "И этим всё сказано: продукция Supermicro считается более надёжной, но и стоит подороже.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns active voice in Russian", function() {
		let paper = new Paper( "Supermicro выполняет свои материнские платы на основе наборов микросхем Intel, а также ServerWorks.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: выполнены
		let paper = new Paper( "Материнские платы Supermicro выполнены на основе наборов микросхем Intel, а также ServerWorks.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns active voice in Russian", function() {
		let paper = new Paper( "В 90-х годах мы реализовали два крупных проекта.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: реализовано
		let paper = new Paper( "В 90-х годах было реализовано два крупных проекта.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns active voice in Russian", function() {
		let paper = new Paper( "Мы заключили контракт с работником. ", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: заключен
		let paper = new Paper( "В таком подходе заключен и стимул для работника", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns active voice in Russian", function() {
		let paper = new Paper( "Я вынуждаю тебя сдаться.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: вынуждены
		let paper = new Paper( "Женщины вынуждены мириться с мужьями-пьяницами.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns active voice in Russian", function() {
		let paper = new Paper( "Я убедил маму, что не упаду с велика.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 0 );
	} );

	it( "returns passive voice in Russian", function() {
		// Passive: убеждена
		let paper = new Paper( "Я мечтал в детстве о велике, но моя мама мне велик не покупала оттого, что была убеждена, будто на велике я непременно попаду под машину.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns passive voice in Russian, when there are more than one passive verb form", function() {
		let paper = new Paper( "Книга основана на реальных событиях и посвящена Ролану Быкову.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns passive voice in Russian, when the participle takes a ё-form", function() {
		// Passive: введён
		let paper = new Paper( "Термин «чёрная дыра» введён Дж. Уилером в 1968 г.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns passive voice in Russian, when the participle takes a ё-form", function() {
		// Passive: устранён
		let paper = new Paper( "Он может быть устранён выбором подходящей системы отсчёта.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );

	it( "returns passive voice in Russian, when the participle starts from a capital letter (e.g., in the beginning of a sentence", function() {
		// Passive: Высказано
		let paper = new Paper( "Высказано мнение, что через 10 лет в Пенсионном фонде не останется денег.", { locale: "ru_RU" } );
		expect( passiveVoice( paper ).passives.length ).toBe( 1 );
	} );
} );
