import {Request, Response} from 'express'
import Swapi from '../api/swapi'
import {IPlanet} from '../ts'
import EwokLang from '../services/ewokLang'


class PlanetsController {

    async getPlanetById(req: Request, res: Response) {
        const {encoding} = req.query
        const id = req.params.id
        const planet: IPlanet | null = await Swapi.fetchPlanetById(id)


        if(planet && encoding && encoding === 'ewok'){
            const encoded = EwokLang.objToEwokLang(planet)
            res.status(200).send(encoded)
            return
        }

        planet ? res.status(200).send(planet)
            : res.status(404).send('Planet not found')
    }
}

export default new PlanetsController()