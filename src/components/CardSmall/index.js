import CardSmall from './CardSmall'
import { pronunciation } from '../../utils'

/**
* Получаем правильное склонение
* @param {Number} значение
* @returns {String} склонение
*/
export const setRecipeLinguistic = amount => {
	const variants = ['рецепт', 'рецепта', 'рецептов']
	return pronunciation(amount, variants)
}
export default CardSmall
