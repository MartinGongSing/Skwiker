self.addEventListener('fetch', event => {
	console.log('Request:', event.request.url)
	event.respondWith(
		fetch(event.request).then(response => {
			console.log('Response:', response.headers.get('Content-Type'))
			return response
		})
	)
})
