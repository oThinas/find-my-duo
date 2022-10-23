import { useState } from 'react';
import { ActivityIndicator, Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import Toast, { BaseToast, BaseToastProps } from 'react-native-toast-message';
import { CheckCircle, Copy } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Header } from '../Header';

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
  const [isCopyingDiscordUser, setIsCopyingDiscordUser] = useState(false);
  
  async function handleCopyDiscordUserToClipboard() {
    setIsCopyingDiscordUser(true);
    await Clipboard.setStringAsync(discord);
    showToast();
    setIsCopyingDiscordUser(false);
  }

  function showToast() {
    Toast.show({
      type: 'sucess',
      text1: 'Discord copiado',
      text2: 'O usuário do Discord do seu duo foi copiado para a área de transferência!',
      visibilityTime: 2500,
    })
  }
  
  return (
    <Modal {...rest} transparent statusBarTranslucent animationType='fade'>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500}/>
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight='bold'/>

          <Header title='Bora jogar' subtitle='Não temos culpa se seu duo feedar' 
            style={
              { alignItems: 'center', marginTop: 24 }
            }
          />

          <Text style={styles.label}>
            Adicione no Discord
          </Text>
          
          <TouchableOpacity style={styles.discordButton} onPress={handleCopyDiscordUserToClipboard} disabled={isCopyingDiscordUser}>
              {
                isCopyingDiscordUser ? 
                  <ActivityIndicator color={THEME.COLORS.PRIMARY}/> :
                  <View style={
                    { flexDirection: 'row' }
                  }>
                    <Copy size={20} color={THEME.COLORS.TEXT} style={{ marginRight: 8 }}/>

                    <Text style={styles.discord}>
                      {discord}
                    </Text>
                  </View>
              }
          </TouchableOpacity>
        </View>
      </View>

      <Toast 
        config={
          {
            sucess: (props: BaseToastProps) => (
              <BaseToast 
                {...props}
                style={{ borderLeftColor: THEME.COLORS.SUCCESS, height: 70 }}
                contentContainerStyle={{ backgroundColor: THEME.COLORS.BACKGROUND_900 }}
                text1Style={{ color: THEME.COLORS.TEXT, fontSize: THEME.FONT_SIZE.MD, fontFamily: THEME.FONT_WEIGHT.BOLD }}
                text2Style={{ fontSize: THEME.FONT_SIZE.SM, fontFamily: THEME.FONT_WEIGHT.SEMI_BOLD }}
                text2NumberOfLines={2}
              />
            )
          }
        }
      />
    </Modal>
  );
}