/**
 * Função que é acionada quando o frontend envia as horas para o backend
 * @param hourString quantidade de horas a serem convertidas
 * @returns hora em minutos
 */
export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number)
  const ONE_HOUR_IN_MINUTE = 60
  return hours * ONE_HOUR_IN_MINUTE + minutes
}