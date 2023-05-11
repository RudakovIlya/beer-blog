type Mods = Record<string, boolean | string>

export const clsx = (cls: string, mods: Mods, additional: string[]): string => {

  return [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className, _]) => className)
  ].join(' ');
}