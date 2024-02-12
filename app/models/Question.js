import { generateId } from "../utils/GenerateId.js"

export class Question {
  constructor(data) {
    this.id  = generateId()
    this.name = data.name
    this.type = data.type
    this.difficulty =  data.difficulty
    this.category = data.category
    this.question = data.question
    this.correct_answer = data.correct_answer
    this.incorrect_answers = data.incorrect_answers
  }


}