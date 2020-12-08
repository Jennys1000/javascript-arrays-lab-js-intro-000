var kittens = ["Milo", "Otis", "Garfield"] //define your array here
function destructivelyAppendKitten(Zen) {
 return kittens.push(Zen)
}
function destructivelyPrependKitten(Zen) {
  return kittens.unshift(Zen)
}
// Add your functions and code here
function destructivelyRemoveLastKitten(Garfield) {
  return kittens.pop(Garfield)
}
function prependKitten(Zen) {
  return [...kittens, Zen]
}
