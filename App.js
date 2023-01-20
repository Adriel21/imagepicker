import { useEffect, useState } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {

  const [foto, setFoto] = useState();

const acessarCamera = async ()=>{
                                   


                                     // Carregar/Acionar a Câmera de forma assíncrona
  const imagem = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.5,
  });

  console.log(imagem);
  setFoto(imagem.assets[0].uri)
}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Acessar câmera" onPress={acessarCamera} />
      { foto && <Image source={ {uri: foto} } style={{width: 300, height: 200, marginTop: 10}}/> }
    </View>
  );
}