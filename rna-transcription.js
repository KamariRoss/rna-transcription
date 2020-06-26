//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

export const toRna = (DNA) => {
  const dnaArray = [...DNA]

  const TRANSCRIPTION = { A: "U", T: "A", C: "G", G: "C", U: "T" }

  const rnaArray = dnaArray.map((nucleotide) => TRANSCRIPTION[nucleotide])
  return rnaArray.join("")
}
