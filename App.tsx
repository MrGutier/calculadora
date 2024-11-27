import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/themes/GlobalStryles';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         resultado,operar  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla numberOfLines={1} tamanoTexto='h1' adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
     
      
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion label='C' buttonStyle={[GlobalStyles.miscelaneo]} onPress={clean}></BotonOperacion>
      <BotonOperacion label='+/-' buttonStyle={[GlobalStyles.miscelaneo]} onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion label='del' buttonStyle={[GlobalStyles.miscelaneo]} onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion label='/' buttonStyle={[GlobalStyles.boton_calculo]} onPress={()=>operar(":")}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='7' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion label='8' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion label='9' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion label='x' buttonStyle={[GlobalStyles.boton_calculo]} onPress={()=>operar("*")}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='4' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion label='5' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion label='6' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion label='-' buttonStyle={[GlobalStyles.boton_calculo]} onPress={()=>operar("-")}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='1' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion label='2' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion label='3' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion label='+' buttonStyle={[GlobalStyles.boton_calculo]} onPress={()=>operar("+")}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion label='0' buttonStyle={[GlobalStyles.boton_grande,GlobalStyles.boton_numero]} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion label='.' buttonStyle={[GlobalStyles.boton_numero]} onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion label='=' buttonStyle={[GlobalStyles.boton_calculo]} onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}

