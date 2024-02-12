import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js";

function _drawCurrentQuestion() {
  let currentQuestion = AppState.currentQuestion

  setHTML('questionContainerDisplay', currentQuestion.QuestionHTMLTemplate)

}
export class QuestionsController {
  constructor() {
    console.log("Questions Controller loaded")

    AppState.on('currentQuestion', _drawCurrentQuestion)
  }
  randomQuestion() {
    questionsService.randomQuestion()
  }

}