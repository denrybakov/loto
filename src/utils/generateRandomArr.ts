export const generateRandowArr = (num: number): number[] => {
  const res = new Set<any>()
  while (res.size < num) res.add(Math.floor(1 + 0.5 + Math.random() * (18)))
  return [...res]
}
