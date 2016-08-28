export const fetchData = url => {
	return fetch(url).then(r => r.json())
}
