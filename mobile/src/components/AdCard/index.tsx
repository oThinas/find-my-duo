import { Text } from 'react-native'
import { TouchableOpacity, View } from 'react-native';
import { GameController} from 'phosphor-react-native'

import { AdInfo } from './AdInfo';

import { IAdProps } from '../../interfaces/IAdProps';
import { convertWeekDays } from '../../utils/convert-weekdays';

import { styles } from './styles';
import { THEME } from '../../theme';

interface AdCardProps {
  data: IAdProps
  onConnect: () => void
}

export function AdCard(props: AdCardProps) {
  return (
    <View style={styles.container}>
      <AdInfo label='Nome ou nickname' value={props.data.name}/>

      <AdInfo label='Tempo de jogo' value={`${props.data.yearsPlaying} anos`}/>

      <AdInfo label='Disponibilidade' 
      value={`${convertWeekDays(props.data.weekDays)}\n${props.data.hoursStart.slice(0, 2)}h - ${props.data.hoursEnd.slice(0, 2)}h`}
      />

      <AdInfo label='Chamada de áudio?' value={props.data.useVoiceChannel ? 'Sim' : 'Não'} 
      color={props.data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity style={styles.button} onPress={props.onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20}/>

        <Text style={styles.buttonLabel}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}