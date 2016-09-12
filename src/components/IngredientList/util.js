import { pronunciation } from '../../utils'
export const getAmount = (amount, measure, baseMeasure) => {
	const unaltered = amount + ' ' + measure
	if (!amount) return 'по вкусу'
	amount = Math.ceil(amount)
	switch (measure) {
		case 'пучок':
			return amount + ' ' + pronunciation(amount, ['пучок', 'пучка', 'пучков'])
		case 'зубчик':
			return amount + ' ' + pronunciation(amount, ['зубчик', 'зубчика', 'зубчиков'])
		case 'стебель':
			return amount + ' ' + pronunciation(amount, ['стебель', 'стебля', 'стеблей'])
		case 'гр':
			if (amount >= 1000) {
				return (amount / 1000).toFixed(1) + ' ' + 'кг'
			} else {
				return unaltered
			}
		case 'мл':
			if (amount >= 1000) {
				return (amount / 1000).toFixed(1) + ' ' + 'л'
			} else {
				return unaltered
			}
		case 'ст.л.':
			if (amount >= 14) {
				return (amount / 14).toFixed(1) + ' ' + 'стак.'
			} else {
				return unaltered
			}
		case 'стак.':
			if (baseMeasure === 'гр') {
				return (amount >= 5) ? (amount / 5).toFixed(1) + ' ' + 'кг' : unaltered
			}
			if (baseMeasure === 'мл') {
				return (amount >= 5) ? (amount / 5).toFixed(1) + ' ' + 'л' : unaltered
			}
			break
		default:
			return unaltered
	}
}
