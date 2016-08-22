import { FETCH_RECIPES } from '../constants/actionTypes'

const initialState = {
	title: '',
	cookingTime: 0,
	image: '',
	steps: [{
		step: 1,
		title: 'Почистите рыбу',
		image: true,
		actions: ['Удалите чешую', 'Сделайте надрез на брюхе', 'Удалите внутренности']
	}, {
		step: 2,
		title: 'Нарежьте овощи',
		image: true,
		actions: ['Лук колечками', 'Помидоры кубиками', 'Сельдерей кубиками']
	}, {
		step: 3,
		title: 'Нафаршируйте рыбу',
		actions: ['Смажьте рыбу оливковым маслом', 'Смажьте солью, базиликом и орегано', 'Разделите овощи на равные части и заправьте рыбу']
	}, {
		step: 4,
		title: 'Запеките',
		actions: ['Раскалите духовку до 180', 'Поставьте рыбу в духовку'],
		timer: {
			time: 30000,
			timeDescription: 'Запеките 30 минут'
		}
	}]
}

function recipe (state = initialState, action) {
	switch (action.type) {
	case FETCH_RECIPES: return {...state, ...action.recipes}
	default: return state
	}
}
export default recipe
