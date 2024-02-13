export function generateQuestionNumber() {
  const randomNumber = Math.ceil(Math.random()*20)
  console.log("generate random number", randomNumber)
  return randomNumber
}