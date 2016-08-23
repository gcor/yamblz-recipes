import { FETCH_RECIPES } from '../constants/actionTypes'

const _fetchRecipes = recipes => ({
	type: FETCH_RECIPES,
	recipes
})

const fetchData = url => {
	return fetch(url).then(r => r.json())
}

export const fetchRecipes = (id) => {
	return dispatch => {
		let url = `https://intense-earth-33481.herokuapp.com/recipes/${id}`
		fetchData(url).then(recipes => {
			console.log(recipes)
			dispatch(_fetchRecipes(recipes))
		})
	}
}
