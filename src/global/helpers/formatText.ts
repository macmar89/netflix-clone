export const truncate = (str: string | undefined, len:number  = 200): string => {
  return `${str?.substring(0,len)} ...`
}
