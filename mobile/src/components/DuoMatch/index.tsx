import React from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
import { CheckCircle } from 'phosphor-react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Header } from '../Header';

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
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
          
          <TouchableOpacity style={styles.discordButton}>
            <Text style={styles.discord}>
              {discord}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}