function restOfArray<T>(arr: T[], pos_slice: number): T[] {
  if (arr.length <= 1) {
    return [];
  }

  return arr.slice(pos_slice);
}

export {restOfArray}