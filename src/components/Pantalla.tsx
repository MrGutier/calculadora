import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../themes/GlobalStryles';

interface Props extends TextProps {
  tamanoTexto?: "h1" | "h2"
};

export const Pantalla = ({children,tamanoTexto, ...rest}:Props) => {
  return (
    <Text style={[GlobalStyles.pantallaPrincipal,GlobalStyles.negrita,tamanoTexto=="h1" ? GlobalStyles.letra_grande:GlobalStyles.letra_mediana ]} {...rest}>
        {children}
    </Text>
  )
}

