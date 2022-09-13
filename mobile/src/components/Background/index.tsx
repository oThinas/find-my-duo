import { ImageBackground } from 'react-native';

import { styles } from './styles';

import backgroundImg from '../../assets/background-galaxy.png'

interface BackgroundProps {
  children: React.ReactNode
}

export function Background(props: BackgroundProps) {
  return (
    <ImageBackground source={backgroundImg} defaultSource={backgroundImg} style={styles.container}>
      {props.children}
    </ImageBackground>
  );
}