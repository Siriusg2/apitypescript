import express from 'express'
import * as diaryServices from '../services/diarieService'
const router = express.Router()

router.get('/', (_req, res) => {
  console.log('someone pinged here' + ' ' + new Date().toLocaleDateString())
  return res.status(200).json(diaryServices.getEntries())
})

router.get('/', (_req, res) => {
  res.send('fetching all entry diaries')
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = diaryServices.addEntry(date, weather, visibility, comment)
  return res.status(200).json(newDiaryEntry)
})
router.get('/:id', (req, res) => {
  const { id } = req.params

  res.status(200).json({ diary: diaryServices.findById(parseInt(id)) })
})

export default router
