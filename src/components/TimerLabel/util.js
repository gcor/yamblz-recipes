export const convertTimeToMinutesAndSeconds = time => {
	let _secs = Math.floor(time / 1000)
	let _mins = Math.floor(_secs / 60)

	let secs, mins
	secs = _secs - _mins * 60
	if (secs < 10) secs = '0' + secs
	mins = _mins
	let symbol = _secs % 2 === 0 ? ':' : ' '

	return mins + symbol + secs
}
