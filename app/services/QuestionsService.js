import { AppState } from "../AppState.js"
import { generateQuestionNumber } from "../utils/GenerateQuestionNumber.js"

class QuestionsService {
  constructor() {
    console.log("This is the Questions Service running")
  }
  randomQuestion() {
    const foundQuestion = AppState.questions[generateQuestionNumber()]
    AppState.currentQuestion = foundQuestion
  }
  
}

export const questionsService = new QuestionsService