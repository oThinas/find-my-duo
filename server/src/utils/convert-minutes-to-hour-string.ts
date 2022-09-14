/**
 * Função que é acionada quando o backend envia as horas para o frontend
 * @param minutesAmount quantidade de minutos a serem convertidos
 * @returns horas no formato String "HH:mm"
 */
export function convertMinutesToHourString(minutesAmount: number) {
  const ONE_HOUR_IN_MINUTE = 60
  const hours = Math.floor(minutesAmount / ONE_HOUR_IN_MINUTE)
  const minutes = minutesAmount % ONE_HOUR_IN_MINUTE

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}