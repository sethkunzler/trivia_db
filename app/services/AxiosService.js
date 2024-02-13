// @ts-ignore 
export const questionsApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=20&category=10&type=multiple',
  timeout: 8000, 
})