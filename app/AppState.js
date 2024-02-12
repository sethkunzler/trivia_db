import { Question } from "./models/Question.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Question.js').Question[]} */
  questions = []
  
  /**@type {Question | null} */
  currentQuestion = null
}

export const AppState = createObservableProxy(new ObservableAppState())