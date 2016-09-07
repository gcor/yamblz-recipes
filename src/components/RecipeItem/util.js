import fuzzysearch from 'fuzzysearch'

export const useBrain = (title, ingredients) => {
	for (var i = 0; i < ingredients.length; i++) {
		const ingredient = ingredients[i]
		const { product } = ingredient
		console.log(ingredient)
		const amount = ingredient.amount
		const measure = ingredient.measure.toLowerCase()
		if (product && product.title && amount && measure) {
			const productTitle = product.title.toLowerCase()
			console.log(fuzzysearch(productTitle, title))
			console.log(productTitle, title)
			const matcher = new RegExp(productTitle, 'ig')
			if (fuzzysearch(productTitle, title)) {
				return title.replace(matcher, `${title} — (${amount} ${measure})`)
			}
		}
	}
	return title
}
		// const { stages } = r
		// let titles = []
		// stages.forEach(stage => {
		// 	const { steps } = stage
		// 	steps.forEach(step => {
		// 		titles.push(step)
		// 	})
		// })
		// let count = 0
		// for (name of titles) {
		// 	for (product of products) {
		// 		var { title, amount, measure } = product
		// 		title = title.toLowerCase()
		// 		name = name.toLowerCase()
		// 		const matcher = new RegExp(title, 'ig')
		//
		// 		if (fuzzysearch(title, name)) {
		// 			count++
		// 			console.log(name.replace(matcher, `${title} — (${amount} ${measure})`))
		// 			break
		// 		}
		// 	}
		// }
