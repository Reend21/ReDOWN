const ORNEK_API_KEY = "ornek"
console.log(ORNEK_API_KEY)

function apiFunc() {
    const API_KEY = ORNEK_API_KEY
    function getUrl(endpoint) {
    return `https://api.ornek.com/${endpoint}?key=${API_KEY}`
}

return {
    fetchData: async function(endpoint) {
    const url = getUrl(endpoint)
    const response = await fetch(url)
    return response.json()
    }
}
}