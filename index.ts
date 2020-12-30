export const spinWords = (str: string) => {
  let result: String[] = []
  const words = str.split(' ')
  for (const word of words) {
    if (word.length >= 5) {
      result.push(word.split('').reverse().join(''))
    } else {
      result.push(word)
    }
  }
  return result.join(' ')
}
