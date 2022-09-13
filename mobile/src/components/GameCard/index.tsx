import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { IGameCardProps } from '../../interfaces/GameCardProps';

import { styles } from './styles';
import { THEME } from '../../theme';

interface GameCardProps {
  data: IGameCardProps
}

export function GameCard(props: GameCardProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground source={props.data.cover} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>
            {props.data.name}
          </Text>

          <Text style={styles.ads}>
            {props.data.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}