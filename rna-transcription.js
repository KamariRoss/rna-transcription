//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

export const toRna = (RNA) => {
  let rnaArray = RNA.split("")
  const TRANSCRIPTION = { A: "U", T: "A", C: "G", G: "C", U: "T" }
  for (let index = 0; index < rnaArray.length; index++) {
    if (TRANSCRIPTION[rnaArray[index]] || TRANSCRIPTION[rnaArray[index]]) {
      if (TRANSCRIPTION[rnaArray[index]]) {
        rnaArray.splice([index], 1, TRANSCRIPTION[rnaArray[index]])
      } else if (rnaArray[index] == TRANSCRIPTION[rnaArray[index]]) {
        rnaArray.splice([index], 1, TRANSCRIPTION[rnaArray[index]])
      }
    } else if (
      TRANSCRIPTION[rnaArray[index]] ||
      TRANSCRIPTION[rnaArray[index]]
    ) {
      if (TRANSCRIPTION[rnaArray[index]]) {
        rnaArray.splice([index], 1, TRANSCRIPTION[rnaArray[index]])
      } else if (rnaArray[index] == TRANSCRIPTION[rnaArray[index]]) {
        rnaArray.splice([index], 1, TRANSCRIPTION[rnaArray[index]])
      }
    }
  }

  return rnaArray.join("")
}
