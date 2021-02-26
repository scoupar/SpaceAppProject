const baseURL = "http://localhost:5000/api/planets"

const PlanetService = {
    getPlanets() {
        return fetch(baseURL)
        .then(res => res.json())
    },

    postPlanet(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type' : 'application/json'}
        })
        .then(res => res.json())
    },
    
    

    deletePlanet(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        });
    },

    showPlanet(id) {
        return fetch(baseURL + id)
            .then(res => res.json())
        
    }

    
}

export default PlanetService;