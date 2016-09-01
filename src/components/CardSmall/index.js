import CardSmall from './CardSmall'
import { pronunciation } from '../../utils'

export const setRecipeLinguistic = amount => {
	const variants = ['рецепт', 'рецепта', 'рецептов']
	return pronunciation(amount, variants)
}
export default CardSmall
