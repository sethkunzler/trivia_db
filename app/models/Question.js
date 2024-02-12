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

get QuestionHTMLTemplate() {
  return /*html*/ `
  <section class="container">
  <div class="row justify-content-center my-2">
        <div class="col-8 my-3 text-center user-select-none">
          <img class="main-img" src="https://images.unsplash.com/photo-1519401706-5cf17f6e70de?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="crossroads">
        </div>
        <div class="col-8 py-2 text-center border-gray-light bg-gray-dark rounded user-select-none">
          <h1>This is Your Question!</h1>
        </div>
      </div>
      <div class="row justify-content-center text-center my-3">
        <div class="col-5 my-3">
          <p class="p-3 selectable fs-4 border-gray-light shadow bg-gray-dark yellow rounded user-select-none" role="button">
            A: <span class="gray-light">1</span>
          </p>
        </div>
        <div class="col-5 my-3">
          <p class="p-3 selectable fs-4 border-gray-light shadow bg-gray-dark yellow rounded user-select-none" role="button">
            B: <span class="gray-light">2</span>
          </p>
        </div>
        <div class="col-5 my-3">
          <p class="p-3 selectable fs-4 border-gray-light shadow bg-gray-dark yellow rounded user-select-none" role="button">
            C: <span class="gray-light">3</span>
          </p>
        </div>
        <div class="col-5 my-3">
          <p class="p-3 selectable fs-4 border-gray-light shadow bg-gray-dark yellow rounded user-select-none" role="button">
            D: <span class="gray-light">4</span>
          </p>
        </div>
      </div>
  </section>
  `
}
}