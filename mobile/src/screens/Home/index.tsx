import { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

import { Background } from "../../components/Background";
import { Header } from '../../components/Header';
import { GameCard } from '../../components/GameCard';

import { IGameCardProps } from '../../interfaces/IGameCardProps';

import { styles } from './styles';

import LogoImg from '../../assets/logo-nlw-esports.png'

export function Home() {
  const [games, setGames] = useState<IGameCardProps[]>([])
  useEffect(() => {
    fetch('http://192.168.15.9:3000/games') // TODO: Trocar para o ip na rede que estiver conectada
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])

  const navigation = useNavigation()
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={LogoImg} style={styles.logo}/>

        <Header title='Encontre seu duo!' subtitle='Seleciona o game que deseja jogar...'/>

        <FlatList 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.contentList} 
          data={games} 
          keyExtractor={game => game.id} 
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => navigation.navigate('game', item)}/>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}