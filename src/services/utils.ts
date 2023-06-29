import { Visibility, Weather, newDiaryEntry } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) { throw new Error('Incorrect or missing comment from request') }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isDate(dateFromRequest)) throw new Error('Invalid or missing date from request')
  return dateFromRequest
}

const isDate = (dateFromRequest: any): boolean => {
  return Boolean(Date.parse(dateFromRequest))
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) throw new Error('Invalid or missing weather from request')
  return weatherFromRequest
}
const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isWeather(visibilityFromRequest)) throw new Error('Invalid or missing visibility from request')
  return visibilityFromRequest
}

const isWeather = (weatherFromRequest: any): boolean => {
  return Object.values(Weather).includes(weatherFromRequest)
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
