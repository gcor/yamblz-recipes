import { FETCH_CATEGORIES, FETCH_CATEGORY_BY_ID } from '../constants/actionTypes'
const initialState = [
	{
		title: 'Dinner',
		id: 2,
		recipes: [
			{
				title: 'Классическая лазанья',
				time: '1 час 10 мин',
				complexity: 'Сложно',
				energy: '430 ккал',
				stars: 4,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe8/lasagne.jpg'
			}, {
				title: 'Свинина с грибами и сельдереем',
				time: '1 час 30 мин',
				complexity: 'Средне',
				energy: '324 ккал',
				stars: 5,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe9/pork.jpg'
			}, {
				title: 'Меланзана алла пармиджана',
				time: '50 мин',
				complexity: 'Просто',
				energy: '325 ккал',
				stars: 5,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe10/parmigana.jpg'
			}
		]
	},
	{
		title: 'Breakfast',
		id: 1,
		recipes: [
			{
				title: 'Брускетта с томатами и моцареллой',
				time: '25 мин',
				complexity: 'Просто',
				energy: '320 ккал',
				stars: 4,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe2/brusketta_main.jpg'
			}, {
				title: 'Фриттата с брокколи и сладким перцем',
				time: '15 мин',
				complexity: 'Просто',
				energy: '250 ккал',
				stars: 5,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe3/frittata-with-brokkoli.jpg'
			}, {
				title: 'Панини с жареным яйцом',
				time: '15 мин',
				complexity: 'Средне',
				energy: '340 ккал',
				stars: 5,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe4/panini.jpg'
			}
		]
	},
	{
		title: 'Lunch',
		id: 3,
		recipes: [
			{
				title: 'Курица меланезе со спагетти',
				time: '40 мин',
				complexity: 'Средне',
				energy: '300 ккал',
				stars: 4,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe5/melaneze.jpg'
			}, {
				title: 'Ризотто со сливками и сладким перцем',
				time: '60 мин',
				complexity: 'Средне',
				energy: '455 ккал',
				stars: 5,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe6/rizotto.jpg'
			}, {
				title: 'Паста с сардинами',
				time: '50 мин',
				complexity: 'Сложно',
				energy: '510 ккал',
				stars: 5,
				image: 'http://intense-earth-33481.herokuapp.com/assets/recipe7/pasta.jpg'
			}
		]
	}
]

function categories (state = initialState, action) {
	switch (action.type) {
		case FETCH_CATEGORIES: return [...state, ...action.payload]
		case FETCH_CATEGORY_BY_ID: return [...state, ...action.payload]
		default: return state
	}
}

export default categories
