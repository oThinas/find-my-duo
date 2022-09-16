/**
 * Converte dia da semana em string de número em uma string com os dias
 * 
 * Exemplo: ['4'] -> Quinta
 * Exemplo: ['0', '5', '6'] -> Domingo, sexta e sábado
 * @param weekDays dias da semana em string de números
 * @returns nome dos dias da semana
 */
export function convertWeekDays(weekDays: string[]) {
  let namedWeekDays = weekDays.map(day => {
    if (day === '0')
      return 'domingo'
    if (day === '1')
      return 'segunda'
    if (day === '2')
      return 'terça'
    if (day === '3')
      return 'quarta'
    if (day === '4')
      return 'quinta'
    if (day === '5')
      return 'sexta'
    if (day === '6')
      return 'sábado'
    
    return 'dia com erro'
  }).join(', ')

  if (weekDays.length > 1) {
    const lastIndex = namedWeekDays.lastIndexOf(',')
    namedWeekDays = namedWeekDays.substring(0, lastIndex) + ' e' + namedWeekDays.substring(lastIndex + 1)
  }

  return namedWeekDays.charAt(0).toUpperCase() + namedWeekDays.slice(1)
}