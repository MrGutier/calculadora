import { Pressable, Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { GlobalStyles } from "../themes/GlobalStryles";

interface Props {
    label: string,


    buttonStyle?:StyleProp<TextStyle>,
    onPress?: () => void;
}

export const BotonOperacion = ({label,buttonStyle, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton,GlobalStyles.letra_mediana,buttonStyle]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};
