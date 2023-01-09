import { Router } from 'express'
import { getPeople, getPerson, createPerson, updatePerson, deletePerson } from '../controllers/people'

const router = Router()

router.get('/', getPeople)
router.get('/:id', getPerson)
router.post('/', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson)

export default router
