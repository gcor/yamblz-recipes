export function formatImageSrc (src) {
	let regex = /http/
	if (regex.test(src)) {
		// console.log(true)
	} else {
		src = 'http://' + src
	}
	return src
}

// Choose good ending according to number
// 32 ['час', 'часа', 'часов'] → 32 часа
export function pronunciation (number, endings) {
	var sEnding, i
	number = number % 100
	if (number >= 11 && number <= 19) {
		sEnding = endings[2]
	} else {
		i = number % 10
		switch (i) {
			case (1): sEnding = endings[0]; break
			case (2):
			case (3):
			case (4): sEnding = endings[1]; break
			default: sEnding = endings[2]
		}
	}
	return sEnding
}

export function CapitalizeFirstLetter (sentence) {
	return sentence = sentence[0].toUpperCase() + sentence.slice(1)
}
