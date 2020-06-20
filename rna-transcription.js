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
  for (let index = 0; index < rnaArray.length; index++) {
    if (rnaArray[index] == "G" || rnaArray[index] == "C") {
      if (rnaArray[index] == "G") {
        rnaArray.splice([index], 1, "C")
      } else if (rnaArray[index] == "C") {
        rnaArray.splice([index], 1, "G")
      }
    } else if (rnaArray[index] == "T" || rnaArray[index] == "A") {
      if (rnaArray[index] == "T") {
        rnaArray.splice([index], 1, "A")
      } else if (rnaArray[index] == "A") {
        rnaArray.splice([index], 1, "U")
      }
    }
  }
  return rnaArray.join("")
}
