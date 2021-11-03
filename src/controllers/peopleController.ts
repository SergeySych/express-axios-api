import {Request, Response} from 'express'
import Swapi from '../api/swapi'
import EwokLang from '../services/ewokLang'
import { ICharacter } from '../ts'

class PeopleController {
    async getPeopleById(req: Request, res: Response) {
        const {encoding} = req.query
        const id = req.params.id
        const character: ICharacter | null = await Swapi.fetchCharacterById(id)


        if(character && encoding && encoding === 'ewok'){
            const encoded = EwokLang.objToEwokLang(character)
            res.status(200).send(encoded)
            return
        }

        character ? res.status(200).send(character)
            : res.status(404).send('Character not found')
    }
}

export default new PeopleController()