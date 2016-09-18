export const convertTimeToMinutesAndSeconds = time => {
	if (time < 0) return '0:00'
	let _secs = Math.floor(time / 1000)
	let _mins = Math.floor(_secs / 60)
	let secs
	secs = _secs - _mins * 60
	if (secs < 10) secs = '0' + secs

	return _mins + ':' + secs
}
