import { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { AdCard } from '../../components/AdCard';

import { IGameRouteProps } from '../../interfaces/IGameRouteProps';
import { IAdProps } from '../../interfaces/IAdProps';

import { styles } from './styles';
import { THEME } from '../../theme';

import LogoImg from '../../assets/logo-nlw-esports.png'

export function Game() {
  const route = useRoute()
  const game = route.params as IGameRouteProps

  const navigation = useNavigation()

  const [ads, setAds] = useState<IAdProps[]>([])
  useEffect(() => {
    fetch(`http://192.168.15.9:3000/games/${game.id}/ads`) // TODO: Trocar para o ip na rede que estiver conectada
    .then(response => response.json())
    .then(data => setAds(data))
  }, [])
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name='chevron-thin-left' color={THEME.COLORS.CAPTION_300} size={20}/>
          </TouchableOpacity>

          <Image source={LogoImg} style={styles.logo}/>

          <View style={styles.hiddenView}/>
        </View>

        <Image source={{ uri: game.bannerUrl }} style={styles.cover} resizeMode='cover'/>

        <Header title={game.title} subtitle='Conecte-se e comece a jogar'/>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false} 
          style={styles.containerList}
          contentContainerStyle={[ads.length > 0 ? styles.contentList : styles.emptyListContent]}
          data={ads} 
          keyExtractor={ad => ad.id} 
          renderItem={({ item }) => (
            <AdCard data={item} onConnect={() =>{}}/> /* TODO: Criar modal */
          )}
          ListEmptyComponent={() => <Text style={styles.emptyList}>Carregando... Parece que ninguém quer jogar isso :(</Text>}
        />
      </SafeAreaView>
    </Background>
  );
}