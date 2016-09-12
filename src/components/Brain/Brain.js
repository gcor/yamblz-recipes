import fuzzysearch from 'fuzzysearch'
import { CapitalizeFirstLetter } from '../../utils'

class Brain {
	constructor () {
		this.ingredients = []
		this.used = []
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
				if (!this.checkIsItNeedForSearch(productTitle)) {
					return false
				}
				// console.log(fuzzysearch(productTitle, title))
				// console.log(productTitle, title)
				// const matcher = new RegExp(productTitle, 'ig')
				if (fuzzysearch(productTitle, title)) {
					productTitle = CapitalizeFirstLetter(productTitle)
					// return title.replace(matcher, `${productTitle} ${amount} ${measure}`)
					let outputString = `${productTitle}: ${amount} ${measure}`
					console.log(outputString)
					this.removeIngredientFromIndex(i)
					return outputString
				}
			}
		}
		return false
	}

	checkIsItNeedForSearch (title) {
		for (const usedTitle of this.used) {
			console.log(usedTitle, title)
			if (usedTitle === title) {
				return false
			}
		}
		return true
	}

	resetIngredients () {
		this.used = []
	}

	removeIngredientFromIndex (index) {
		const title = this.ingredients[index].product.title.toLowerCase()
		if (this.checkIsItNeedForSearch(title)) {
			this.used.push(title)
		}
	}
}
let brain = new Brain()
export default brain
