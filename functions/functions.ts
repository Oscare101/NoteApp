import colors from '../constants/colors'
import { Note } from '../constants/interfaces'

export function GetPalette(themeColor: string) {
  const colorsPalette = Object.keys(colors[themeColor].palette)
  return colorsPalette
}
