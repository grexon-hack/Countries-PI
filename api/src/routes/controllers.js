const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));





const saveAll = async () => {
    
    try {
        const resp = await fetch('https://restcountries.com/v3/all');
        const data = await resp.json();
        const types = data.map(( t)=> {
            return {ID:t.cca3, Name: t.name.common,NameOficial: t.name.official, 
                Subregion: t.subregion, Area: t.area,
                 Population: t.population, Image : t.flags[1],
                Continent : t.continents[0], Timezone: t.timezones[0], 
                Lat: t.latlng[0],
                Long: t.latlng[1], Maps: t.maps.googleMaps}
        })
        return types
        
    } catch (error) {
        return error
    }

    
}





module.exports = {
    saveAll
}

