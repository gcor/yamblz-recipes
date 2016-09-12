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
			if (product && product.title) {
				let productTitle = product.title.toLowerCase()
				if (!this.checkIsItNeedForSearch(productTitle)) {
					return false
				}
				if (!this.checkForConditions(title)) {
					return 'по вкусу'
				}
				// console.log(fuzzysearch(productTitle, title))
				// console.log(productTitle, title)
				// const matcher = new RegExp(productTitle, 'ig')
				// console.log(productTitle.split(' ').length > 1)
				if (productTitle.split(' ').length > 0) {
					let arr = productTitle.split(' ')
					for (const elem of arr) {
						const matcher = new RegExp(productTitle, 'ig')
						if (fuzzysearch(elem, title.toLowerCase())) {
							console.log(elem, title)
							productTitle = CapitalizeFirstLetter(productTitle)
							// return title.replace(matcher, `${productTitle} ${amount} ${measure}`)
							let outputString = `${productTitle}: ${amount} ${measure}`
							this.removeIngredientFromIndex(i)
							return outputString
						}
					}
					// console.log('двухсоставное слово', productTitle.split(' ')[0])
				}
			} else {
				console.log('something went wrong')
			}
		}
		return false
	}

	checkIsItNeedForSearch (title) {
		for (const usedTitle of this.used) {
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

	checkForConditions (title) {
		const list = [
			'по вкусу'
		]
		for (const item of list) {
			if (fuzzysearch(item, title.toLowerCase())) return false
		}
		return true
	}
}
let brain = new Brain()
export default brain
