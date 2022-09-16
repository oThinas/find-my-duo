import { ColorValue, Text, View } from 'react-native';
import { THEME } from '../../../theme';

import { styles } from './styles';

interface AdInfoProps {
  label: string,
  value: string | number,
  color?: ColorValue,
}

export function AdInfo({ color =  THEME.COLORS.TEXT, ...props}: AdInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {props.label}
      </Text>
      <Text style={[styles.value, { color: color }]}>
        {props.value}
      </Text>
    </View>
  );
}