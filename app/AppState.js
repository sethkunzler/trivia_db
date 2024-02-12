import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Question.js').Question[]} */
  questions = []
  
}

export const AppState = createObservableProxy(new ObservableAppState())