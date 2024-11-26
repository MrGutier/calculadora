import { StyleSheet } from 'react-native'
import { Colores, TamanoBoton, TamanoLetra, TipoLetra } from './Colores';


export const GlobalStyles = StyleSheet.create({

  pantallaPrincipal: {
    fontSize: 70,
    textAlign: 'right',
    width: '90%',
  },
  negrita:{
    fontWeight:TipoLetra.bold,
  },
  letra_grande:{
    fontSize: TamanoLetra.grande,
  },
  letra_mediana:{
    fontSize:TamanoLetra.mediana,
  },
  letra_pequena:{
    fontSize:TamanoLetra.pequena,
  },
  boton: {
    width:TamanoBoton.normal,
    textAlign: 'center',
    padding: 10,
    fontWeight: TipoLetra.normal,
    borderColor: Colores.black,
    backgroundColor:Colores.white,
    borderWidth: 2,
    borderRadius:10,
  },
  boton_grande:{
    width:TamanoBoton.grande,
  },
  boton_numero:{
    backgroundColor:Colores.blue,
  },
  boton_calculo:{
    backgroundColor:Colores.turquoise,
  },
  miscelaneo:{
    backgroundColor:Colores.lightBlue,
  },
  container: {
    flex: 1,
    backgroundColor: Colores.fondo,
    alignItems:  'center',
    justifyContent: 'flex-end',
    paddingBottom:20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom:16,
    paddingHorizontal:10,
    width: '100%',
  },


  });