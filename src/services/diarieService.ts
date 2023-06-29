/* eslint-disable @typescript-eslint/no-unused-vars */
import diaryData from '../diaries.json'
import { DiaryEntry, NoSensitiveInfoDiaryEntry, Visibility, Weather } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries
export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id, date, weather, visibility
    }
  })
}

export const addEntry = (date: string, weather: Weather, visibility: Visibility, comment: string): DiaryEntry => {
  const newEntry = {
    id: diaryData[diaryData.length - 1].id + 1,
    date,
    weather,
    visibility,
    comment
  }
  diaryData.push(newEntry)
  return newEntry
}

export const findById = (id: number): NoSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfEntry } = entry
    return restOfEntry
  }
  return entry
}

// const diariesWithouthSensitiveInfo = getEntriesWithoutSensitiveInfo()
