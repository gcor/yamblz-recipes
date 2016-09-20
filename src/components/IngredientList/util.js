const convertToFraction = (number) => {
	const integer = Math.floor(number)
	const reminder = number % 1
	switch (reminder) {
		case 0.25:
			return (integer === 0) ? '¼' : integer + '¼'
		case 0.5:
			return (integer === 0) ? '½' : integer + '½'
		case 0.75:
			return (integer === 0) ? '¾' : integer + '¾'
		default:
			return number
	}
}

const roundQuarter = (number) => {
	return Math.round(number * 4) / 4
}
const roundTen = (number) => {
	return Math.round(number / 10) * 10
}

const pronunciation = (number, endings) => {
	var sEnding, i
	number = number % 100
	if (number >= 11 && number <= 19) {
		sEnding = endings[2]
	} else {
		i = number % 10
		if (i === 1) sEnding = endings[0]
		else if ((i < 1 && i > 0) || (i > 1 && i < 5)) sEnding = endings[1]
		else sEnding = endings[2]
	}
	return sEnding
}

const getResult = (amount, endings) => {
	return convertToFraction(amount) + ' ' + pronunciation(amount, endings)
}

export const getAmount = (amount, measure, baseMeasure) => {
	const unaltered = amount + ' ' + measure
	if (!amount) return 'по вкусу'
	switch (measure) {
		case 'пучок':
			return getResult(amount, ['пучок', 'пучка', 'пучков'])
		case 'зубчик':
			return getResult(amount, ['зубчик', 'зубчика', 'зубчиков'])
		case 'стебель':
			return getResult(amount, ['стебель', 'стебля', 'стеблей'])
		case 'гр':
			if (amount >= 1000) {
				return (amount / 1000).toFixed(1) + ' кг'
			} else {
				return getResult(roundTen(Math.round(amount)), ['грамм', 'грамма', 'грамм'])
			}
		case 'мл':
			if (amount >= 1000) {
				return (amount / 1000).toFixed(1) + ' л'
			} else {
				return getResult(Math.round(amount), ['мл', 'мл', 'мл'])
			}
		case 'шт':
			return getResult(roundQuarter(amount), ['штука', 'штуки', 'штук'])
		case 'чайн.л.':
			if (amount >= 3) {
				const spoon = roundQuarter(amount / 3)
				return getResult(spoon, ['ст.ложка', 'ст.ложки', 'ст.ложек'])
			} else {
				return getResult(amount, ['ч.ложка', 'ч.ложки', 'ч.ложек'])
			}
		case 'ст.л.':
			if (amount >= 8) {
				const glass = (amount / 16).toFixed(2)
				return getResult(roundQuarter(glass), ['стакан', 'стакана', 'стаканов'])
			} else {
				return getResult(amount, ['ст.ложка', 'ст.ложки', 'ст.ложек'])
			}
		case 'стак.':
			if (baseMeasure === 'гр') {
				return (amount >= 5) ? (amount / 5).toFixed(1) + ' кг' : unaltered
			}
			if (baseMeasure === 'мл') {
				return (amount >= 5) ? (amount / 5).toFixed(1) + ' л' : unaltered
			}
			break
		default:
			return unaltered
	}
}
