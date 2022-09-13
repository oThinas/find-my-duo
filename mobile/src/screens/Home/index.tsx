import { FlatList, Image, View } from 'react-native';

import { GameCard } from '../../components/GameCard';
import { Header } from '../../components/Header';

import { GAMES } from '../../utils/games';

import { styles } from './styles';

import LogoImg from '../../assets/logo-nlw-esports.png'

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo}/>

      <Header title='Encontre seu duo!' subtitle='Seleciona o game que deseja jogar...'/>

      <FlatList 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.contentList} 
        data={GAMES} 
        keyExtractor={game => game.id} 
        renderItem={({ item }) => (
          <GameCard data={item}/>
        )}
      />
    </View>
  );
}