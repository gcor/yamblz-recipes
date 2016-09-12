import fuzzysearch from 'fuzzysearch'
import { CapitalizeFirstLetter } from '../../utils'

class Brain {
	constructor () {
		this.ingredients = []
	}
	setIngredients (ingredients) {
		this.ingredients = ingredients
	}
	search (title) {
		let ingredients = this.ingredients
		if (!title || !ingredients) return false
		for (var i = 0; i < ingredients.length; i++) {
			const ingredient = ingredients[i]
			const { product } = ingredient
			const amount = ingredient.amount
			const measure = ingredient.measure.toLowerCase()
			if (product && product.title && amount && measure) {
				let productTitle = product.title.toLowerCase()
				// console.log(fuzzysearch(productTitle, title))
				// console.log(productTitle, title)
				// const matcher = new RegExp(productTitle, 'ig')
				if (fuzzysearch(productTitle, title)) {
					productTitle = CapitalizeFirstLetter(productTitle)
					// this.removeIngredientFromIndex(i)
					// return title.replace(matcher, `${productTitle} ${amount} ${measure}`)
					return `${productTitle}: ${amount} ${measure}`
				}
			}
		}
		return false
	}

	removeIngredientFromIndex (index) {
		delete this.ingredients[index]
	}
}
let brain = new Brain()
export default brain
