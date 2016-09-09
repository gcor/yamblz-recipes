import fuzzysearch from 'fuzzysearch'

export const useBrain = (title, ingredients) => {
	if (!title || !ingredients) return false
	for (var i = 0; i < ingredients.length; i++) {
		const ingredient = ingredients[i]
		const { product } = ingredient
		const amount = ingredient.amount
		const measure = ingredient.measure.toLowerCase()
		if (product && product.title && amount && measure) {
			const productTitle = product.title.toLowerCase()
			// console.log(fuzzysearch(productTitle, title))
			// console.log(productTitle, title)
			const matcher = new RegExp(productTitle, 'ig')
			if (fuzzysearch(productTitle, title)) {
				// return title.replace(matcher, `${productTitle} ${amount} ${measure}`)
				return `${productTitle} ${amount} ${measure}`
			}
		}
	}
	return false
}
