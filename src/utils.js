export function formatImageSrc (src) {
	let regex = /http/
	if (regex.test(src)) {
		console.log(true)
	} else {
		src = 'http://' + src
	}
	return src
}
