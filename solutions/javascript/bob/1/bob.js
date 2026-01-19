//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  console.log(message)
  const hasSilence = message.trim()

  if (hasSilence == '') return 'Fine. Be that way!'

  const isQuestion = message.trim().endsWith('?')
  const isShouting = message === message.toUpperCase() && /[A-Za-z]/gi.test(message)

  if (isShouting && isQuestion) return "Calm down, I know what I'm doing!"
  if (isQuestion) return 'Sure.'
  if (isShouting) return 'Whoa, chill out!'

  return 'Whatever.'
};
