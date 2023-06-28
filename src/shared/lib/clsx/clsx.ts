type Mods = Record<string, boolean | string | undefined>

export const clsx = (cls: string, mods?: Mods, ...additional: Array<string | undefined>): string => {
  return [
    cls,
    ...additional,
    ...Object
      .keys(mods || {})
      .filter((key) => {
        return mods !== undefined ? mods[key] : false
      }),
  ].join(' ').trim()
}
