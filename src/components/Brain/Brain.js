import fuzzysearch from 'fuzzysearch'
import { CapitalizeFirstLetter } from '../../utils'
import { getAmount } from '../../components/IngredientList/util'
/**
	Class respresents delivering logic between RecipeItem component
	and IngredientList. Here we go through ingredients and trying t

	@constructor
	@param {string}
*/
class Brain {
	constructor () {
		this.ingredients = []
		this.used = []
	}
	setIngredients (ingredients) {
		this.ingredients = ingredients
	}
	resetIngredients () {
		this.used = []
	}
	search (title) {
		let ingredients = this.ingredients
		if (!title || !ingredients) return false
		for (var i = 0; i < ingredients.length; i++) {
			const ingredient = ingredients[i]
			const { product } = ingredient
			const { baseMeasure } = product
			const amount = ingredient.amount
			const measure = ingredient.measure.toLowerCase()
			if (product && product.title) {
				let productTitle = product.title.toLowerCase()
				if (fuzzysearch(productTitle.toLowerCase(), title.toLowerCase())) {
					productTitle = CapitalizeFirstLetter(productTitle)
					let outputString = `${productTitle}: ${getAmount(amount, measure, baseMeasure)}`
					return outputString
				}
			}
		}
		return false
	}
}
let brain = new Brain()
export default brain
