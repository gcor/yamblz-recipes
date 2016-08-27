import * as api from '../constants/api'

const fetchData = url => {
	return fetch(url).then(r => r.json())
}
