import { SWAPI_BASE_URL } from './endpoints'
import { get } from 'axios';

const getPeoples = async ({ num = 1 }) => {
  try {
    const result =  await get(`${SWAPI_BASE_URL}/api/people/${num}`)
    return result?.data ?? null
  } catch (e) {
    console.log(e)
    return null
  }
}

const getAllPeoples = async () => {
  try {
    const result =  await get(`${SWAPI_BASE_URL}/api/people/`)
    return result?.data?.results ?? []
  } catch (e) {
    console.log(e)
    return null
  }
}

const getPlanets = async ({ num = 1 }) => {
  try {
    const result = await get(`${SWAPI_BASE_URL}/api/planets/${num}`)
    return result?.data ?? null
  } catch (e) {
    console.log(e)
    return null
  }
}

const getAllPlanets = async () => {
  try {
    const result =  await get(`${SWAPI_BASE_URL}/api/planets/`)
    return result?.data?.results ?? []
  } catch (e) {
    console.log(e)
    return null
  }
}

const getStarships = async ({ num = 1 }) => {
  try {
    const result = await get(`${SWAPI_BASE_URL}/api/starships/${num}`)
    return result?.data ?? null
  } catch (e) {
    console.log(e)
    return null
  }
}

const getAllStarships = async () => {
  try {
    const result =  await get(`${SWAPI_BASE_URL}/api/starships/`)
    return result?.data?.results ?? []
  } catch (e) {
    console.log(e)
    return null
  }
}

export {
  getPeoples,
  getAllPeoples,
  getPlanets,
  getAllPlanets,
  getStarships,
  getAllStarships
};