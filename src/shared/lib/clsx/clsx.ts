type Mods = Record<string, boolean | string>

export const clsx = (cls: string, mods?: Mods, ...additional: string[]): string => {
  return [
    cls,
    ...additional,
    ...Object
      .keys(mods)
      .filter((key) => { return mods[key] }),
  ].join(' ')
}
