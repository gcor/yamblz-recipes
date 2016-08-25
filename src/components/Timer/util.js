
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
// Choose good ending according to number
// 32 ['час', 'часа', 'часов'] → 32 часа
export function pronunciation (number, endings) {
	var sEnding, i
	number = number % 100
	if (number >= 11 && number <= 19) {
		sEnding = endings[2]
	} else {
		i = number % 10
		switch (i) {
			case (1): sEnding = endings[0]; break
			case (2):
			case (3):
			case (4): sEnding = endings[1]; break
			default: sEnding = endings[2]
		}
	}
	return sEnding
}
