import axios from 'axios'

const apiKey = 'd8aada2c9c54465c88335ed383186169'

export const getDefault = async () => {
  return await axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`)
}

export const getByKey = async (keyword) => {
  return await axios.get(`https://newsapi.org/v2/everything?language=id&apiKey=${apiKey}&q=${keyword}`)
}

export const getByCategory = async (category) => {
  return await axios.get(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=${apiKey}`)
}
