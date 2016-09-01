import { pronunciation } from '../../utils'
// Convert milliseconds to seconds
export const msToSeconds = ms => (Math.floor(ms / 1000))
// Convert secods to minutes
export const secsToMinutes = secs => (Math.floor(secs / 60))

export const formatTime = ms => {
	let time = ms
	time = msToSeconds(time)
	const meuasures = ['secs', 'mins', 'hours']
	const words = {
		secs: ['секунда', 'секунды', 'секунд'],
		mins: ['минута', 'минуты', 'минут'],
		hours: ['час', 'часа', 'часов']
	}
	let measure = meuasures[0]
	if (time > 60) {
		measure = meuasures[1]
		time = secsToMinutes(time)
	}

	let pronounce = pronunciation(time, words[measure])
	return `${time} ${pronounce}`
}
