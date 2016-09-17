import * as api from '../constants/api'
import { fetchData } from './common'

/**
 * Возвращает объект конкретной категории
 *
 * @param {Number} id - id категории
 * @returns {Object}
 */
export function getCategory (id) {
	return new Promise((resolve, reject) => {
		fetchData(api.categories + id)
			.then(category => resolve(category))
			.catch(err => reject(err))
	})
}

/**
 * Возвращает объект категории, в зависимости от времени суток
 *
 * @returns {Object}
 */
export function getCategoryByCurrentTime () {
	return new Promise((resolve, reject) => {
		const breakfastId = '57bfd586a53d1d73154d933a'
		const lunchId = '57bfe68c624944001682a016'
		const supperId = '57c000266c25f8411701256e'
		let currentId

		const currentHour = (new Date()).getHours()
		if (currentHour > 3 && currentHour <= 11) {
			currentId = breakfastId
		} else if (currentHour > 11 && currentHour <= 17) {
			currentId = lunchId
		} else currentId = supperId
		fetchData(api.categories + currentId)
			.then(category => resolve(category))
			.catch(err => reject(err))
	})
}

/**
 * Возвращает 3 рандомных рецепта для свайпера на
 * главной странице
 *
 * @returns {Object}
 */
export function getJumbotron () {
	const currentHour = (new Date()).getHours()
	let dayTime

	if (currentHour > 3 && currentHour <= 11) {
		dayTime = 'breakfast'
	} else if (currentHour > 11 && currentHour <= 17) {
		dayTime = 'lunch'
	} else {
		dayTime = 'supper'
	}

	return new Promise(async (resolve, reject) => {
		fetch(api.time[dayTime])
			.then(res => res.json())
			.then(jumbotron => resolve(jumbotron))
			.catch(e => reject(e))
	})
}

/**
 * Возвращает рекомендованные рецепты
 *
 * @returns {Object}
 */
export function getRecommend () {
	return new Promise(async (resolve, reject) => {
		fetch(api.recommend)
			.then(res => res.json())
			.then(recommend => resolve(recommend))
			.catch(e => reject(e))
	})
}
