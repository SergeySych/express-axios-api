import axios from 'axios'
import {ICharacter, IPlanet} from '../ts'

class Swapi {
    async fetchCharacterById(id: string): Promise<ICharacter | null> {
        return await axios.get(process.env.API_GET_CHAR_BY_ID + id)
            .then(response => response.data as ICharacter)
            .catch(reason => null)
    }
    async fetchPlanetById(id: string): Promise<IPlanet | null> {
        return await axios.get(process.env.API_GET_PLANET_BY_ID + id)
            .then(response => response.data as IPlanet)
            .catch(reason => null)
    }
}

export default new Swapi()