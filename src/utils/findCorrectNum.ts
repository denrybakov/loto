export const findCorrectNum = (randomArr: number[], userArr: number[]): number[] => {
  const result: number[] = []
  randomArr.map(rndNum => result.push(...userArr.filter(userNum => rndNum === userNum)))
  return [...new Set(result)]
}

