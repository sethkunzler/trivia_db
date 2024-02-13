import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { generateQuestionNumber } from "../utils/GenerateQuestionNumber.js"
import { questionsApi } from "./AxiosService.js"

class QuestionsService {
  constructor() {
    console.log("This is the Questions Service running")
  }

  async getQuestions() {
    const response = await questionsApi.get('')
    const newQuestions = response.data.results.map(questionPOJO => new Question(questionPOJO))
  }
  randomQuestion() {
    const foundQuestion = AppState.questions[generateQuestionNumber()]
    AppState.currentQuestion = foundQuestion
  }

   
  
}

export const questionsService = new QuestionsService