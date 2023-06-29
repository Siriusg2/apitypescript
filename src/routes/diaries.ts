import express from 'express'
import * as diaryServices from '../services/diarieService'
import toNewDiaryEntry from '../services/utils'
const router = express.Router()

router.get('/', (_req, res) => {
  console.log('someone pinged here' + ' ' + new Date().toLocaleDateString())
  return res.status(200).json(diaryServices.getEntries())
})

router.post('/', (req, res) => {
  try {
    const { date, weather, visibility, comment } = req.body
    const addedDiaryEntry = diaryServices.addDiary(toNewDiaryEntry({ date, weather, visibility, comment }))
    return res.status(200).json(addedDiaryEntry)
  } catch (error) {
    return res.status(400).send(error)
  }
})
router.get('/:id', (req, res) => {
  const { id } = req.params

  res.status(200).json({ diary: diaryServices.findById(parseInt(id)) })
})

export default router
