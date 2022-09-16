import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { IGameCardProps } from '../../interfaces/IGameCardProps';

import { styles } from './styles';
import { THEME } from '../../theme';

interface GameCardProps {
  data: IGameCardProps
}

export function GameCard(props: GameCardProps & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground source={{ uri: props.data.bannerUrl}} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>
            {props.data.title}
          </Text>

          <Text style={styles.ads}>
            {props.data._count.ads} anúncio{props.data._count.ads > 1 ? 's' : ''}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}