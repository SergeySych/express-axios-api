import {Router} from 'express'
import PeopleController from '../controllers/peopleController'
import PlanetController from '../controllers/planetsController'

const router: Router = Router()

router.get('/people/:id', PeopleController.getPeopleById)
router.get('/planets/:id', PlanetController.getPlanetById)

export default router