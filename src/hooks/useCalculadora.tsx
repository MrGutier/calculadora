import {useRef, useState, useEffect} from 'react';
import { Alert,Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';
enum Operadores {
    sumar = '+',
    restar = '-',
    multiplicar = '*',
    dividir = '/',
}

export const useCalculadora = () =>{

    const [formula, setFormula] = useState('0');
    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const UltimaOperacion = useRef<Operadores>();

    useEffect(() => {
        if (UltimaOperacion.current) {
            const primeraParteFormula = formula.split(' ').at(0);
            setFormula(`${ primeraParteFormula} ${UltimaOperacion.current} ${numero}`);
        } else {
            setFormula(numero);
        }
        
    }, [numero]);

    useEffect(() =>{
        const resultado = calcularResultado();
        setNumeroAnterior(`${resultado}`);

    },[formula]);

    const clean = () => {
        Haptics.impactAsync();
        setFormula('0');
        setNumero('0');
        setNumeroAnterior('0');
        UltimaOperacion.current = undefined;  
    }

    const cambiarSigno = () => {
        Haptics.impactAsync();
        if (numero.includes('-')) {
            return setNumero(numero.replace('-',''));
        } else {
            return setNumero('-' + numero);
        }

    }

    const borrarDigito = () => {
        Haptics.impactAsync();
        let signo = '';
        let numeroTemporal = numero;

        if (numero.includes('-')) {
            signo = '-';
            numeroTemporal = numero.substring(1);
        }
        if (numeroTemporal.length > 1) {
            return setNumero(signo+ numeroTemporal.slice(0,-1));
        } else {
            return setNumero('0');
        }
    }

    const establecerUltimoNumero = () => {
        Haptics.impactAsync();
        resultado();
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1));
        }
        setNumeroAnterior(numero);
        setNumero('0');
    }

    
    const operar = (operador:string)=>{
        establecerUltimoNumero();

        switch (operador){
            case "+":
                UltimaOperacion.current = Operadores.sumar;
                return;
            case "-":
                
                UltimaOperacion.current = Operadores.restar;
                return;
            case "*":
                
                UltimaOperacion.current = Operadores.multiplicar;
                return;
            case ":":
                
                UltimaOperacion.current = Operadores.dividir;
                return;
        }
            
        

    }

    const calcularResultado = () => {

        const [primerValor, operacion, segundoValor] = formula.split(' ');

        const num1 = Number(primerValor);
        const num2 = Number(segundoValor);

        if (isNaN(num2)) return num1;

        switch(operacion) {
            case Operadores.sumar:
                return num1 + num2;

            case Operadores.restar:
                return num1 - num2;

            case Operadores.multiplicar:
                return num1 * num2;

            case Operadores.dividir:
                if(num2==0){
                    return "";
                }
                return num1 / num2;

            default:
                throw new Error(`La operación ( ${operacion} ) no está implementada `)
        }
    }

    const resultado = () => {
        
        const [primerValor, operacion, segundoValor] = formula.split(' ');

        const num2 = Number(segundoValor);
        if(UltimaOperacion.current == Operadores.dividir && num2==0){
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            UltimaOperacion.current = undefined;
            const resultado = calcularResultado();
            setFormula(`${resultado}`);
            Alert.alert("No permitido","No se puede dividir entre cero");
        }else{
        Haptics.impactAsync();
        const resultado = calcularResultado();
        setFormula(`${resultado}`);
        UltimaOperacion.current = undefined;
        setNumeroAnterior('0');
    }
    }

    const construirNumero = (teclaNumero: string) => {
        Haptics.impactAsync();
        //Verificar si se escribe el punto decimal
        if (numero.includes('.') && teclaNumero === '.') return;
        
        if (numero.startsWith('0') || numero.startsWith('-0')){
            if (teclaNumero === '.') {
                return setNumero(numero+ teclaNumero);
            }

            if (teclaNumero ==='0' && numero.includes('.')) {
                return setNumero(numero + teclaNumero);
            }
            //Verificar si es diferentes a cero, no hay punto y es el primer número
            if (teclaNumero !== '0' && !numero.includes('.')){
                return setNumero(teclaNumero);
            }
            if (teclaNumero === '0' && !numero.includes('.')){
                return;
            }
        }
        return setNumero( numero + teclaNumero);

    };


    return {
        // Propiedades
        formula, numero, numeroAnterior,
        //Metodos
        construirNumero,
        clean,
        cambiarSigno,
        borrarDigito,
        calcularResultado,
        resultado,
        operar
    }
};