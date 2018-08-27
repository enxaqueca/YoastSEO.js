let singleWords = [ "ademais", "afinal", "aliás", "analogamente", "anteriormente", "assim", "certamente", "conforme",
	"conquanto", "contudo", "decerto", "embora", "enfim", "enquanto", "então", "entretanto", "eventualmente",
	"igualmente", "inegavelmente", "inesperadamente", "mas", "outrossim", "pois", "porquanto", "porque", "portanto",
	"posteriormente", "precipuamente", "primeiramente", "primordialmente", "principalmente", "salvo",
	"semelhantemente", "similarmente", "tipicamente", "sobretudo", "surpreendentemente", "todavia" ];

let multipleWords = [ "nesse caso", "nesses casos", "neste caso", "nestes casos", "naquele caso", "naqueles casos", 
	"nessa hipótese", "nessas hipóteses", "nessa circunstância", "nessas circunstâncias", "naquela circunstância", 
	"naquelas circunstâncias", "a fim de", "a fim de que", "a menos que", "a princípio", "a saber", "acima de tudo", "ainda assim", "ainda mais", "ainda que",
	"além disso", "antes de mais nada", "antes de tudo", "antes que", "ao mesmo tempo", "ao passo que", "ao propósito",
	"apesar de", "às vezes", "assim como", "assim que", "assim sendo", "assim também", "bem como", "mais ainda", "com a finalidade de",
	"com efeito", "com o fim de", "com o intuito de", "com o propósito de", "com toda a certeza", "como resultado", "como se",
	"da mesma forma", "de acordo com", "de conformidade com", "de fato", "de maneira idêntica", "de tal forma que", "de tal sorte que",
	"depois que", "desde que", "dessa forma", "dessa maneira", "desse modo", "do mesmo modo", "de modo que", "é provável", "em conclusão",
	"em contrapartida", "em contraste com", "em outras palavras", "em primeiro lugar", "em princípio", "em resumo", "em seguida",
	"em segundo lugar", "em síntese", "em suma", "em terceiro lugar", "em virtude de", "finalmente agora atualmente", "isto é",
	"já que", "logo após", "logo depois", "após esse período", "logo que", "mesmo que", "não apenas", "nesse hiato", "nesse ínterim", "nesse meio tempo",
	"nesse sentido", "no entanto", "no momento em que", "ou por outra", "ou seja", "para que", "pelo contrário", "por analogia",
	"por causa de", "por certo", "por conseguinte", "por conseqüência", "por exemplo", "por fim", "por isso", "por mais que",
	"por menos que", "por outro lado", "posto que", "se acaso", "se bem que", "seja como for", "sem dúvida", "só para exemplificar", "a título de exemplo",
	"só para ilustrar", "só que", "sob o mesmo ponto de vista", "talvez provavelmente", "tanto quanto", "uma vez que", "visto que", "por último", 
	"tão logo" ];

/**
 * Returns lists with transition words to be used by the assessments.
 * @returns {Object} The object with transition word lists.
 */
module.exports = function() {
	return {
		singleWords: singleWords,
		multipleWords: multipleWords,
		allWords: singleWords.concat( multipleWords ),
	};
};
