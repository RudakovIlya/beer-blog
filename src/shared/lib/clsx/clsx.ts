type Mods = Record<string, boolean | string>

export const clsx = (cls: string, mods?: Mods, ...additional: string[]): string => [
  cls,
  ...additional,
  ...Object
    .keys(mods)
    .filter((key) => mods[key])
].join(' ');