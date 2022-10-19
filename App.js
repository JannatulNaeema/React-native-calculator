import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const buttons = ['C', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  const styles = StyleSheet.create({
    results: {
      backgroundColor: '#d2691e',
      maxWidth: '80%',
      minHeight: '40%',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    resultText: {
      maxHeight: 50,
      color: '#008b8b',
      margin: 10,
      fontSize: 40,
    },
    historyText: {
      color:  '#ff8c00',
      fontSize: 30,
      marginRight: 10,
      alignSelf: 'flex-end',
    },
    themeButton: {
      alignSelf: 'flex-start',
      bottom: '10%',
      margin: 10,
      backgroundColor:  '#e9967a',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 50,
      borderRadius: 20,
    },
    buttons: {
      width: '90%',
      height: '40%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      borderColor:'#00ced1',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: '30%',
      minHeight: '60%',
      flex: 2,
    },
    textButton: {
      color: '#00bfff',
      fontSize: 25,
    }
  })

  const handleInput = (btnPressed) => {
    if (btnPressed === '+' || btnPressed === '-' || btnPressed === '*' || btnPressed === '/') {
      setCurrentNumber(currentNumber + btnPressed);
      return;
    }

    switch (btnPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 1)))
        return
      case 'C':
        setLastNumber('');
        setCurrentNumber('');
        return
      case '=':
        setLastNumber(currentNumber + '=');
        calculate()
        return;
    }
    setCurrentNumber(currentNumber + btnPressed);
  }

  const calculate = () => {
    let lastArr = currentNumber[currentNumber.length - 1]
    if (lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.') {
      setCurrentNumber(currentNumber);
    }
    else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
      return;
    }
  }

  return (
    <View>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((btn) =>
          btn === '=' || btn === '/' || btn === '*' || btn === '-' || btn === '+' ?
            <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: '#ADD8E6' }]} onPress={() => handleInput(btn)}>
              <Text style={[styles.textButton, { color: 'white', fontSize: 20 }]}>{btn}</Text>
            </TouchableOpacity>
            : btn === 0 ?
              <TouchableOpacity key={btn} style={[styles.button, {
                backgroundColor: typeof (btn) === 'number' ?
                  darkMode ? '#778899' : '#fff' : darkMode === true ? '#414853' : '#ededed', minWidth: '40%'
              }]} onPress={() => handleInput(btn)}>
                <Text style={styles.textButton}>{btn}</Text>
              </TouchableOpacity>
              : btn === '.' || btn === 'DEL' ?
                <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: btn === '.' ? darkMode ? '#ADD8E6' : '#fff' : darkMode === true ? '#414853' : '#878aed', minWidth: '37%' }]}
                  onPress={() => handleInput(btn)}
                >
                  <Text style={styles.textButton}>{btn}</Text>
                </TouchableOpacity>
                : btn === 'C' ?
                  <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: typeof (btn) === 'number' ? darkMode ? '#ADD8E6' : '#fff' : darkMode === true ? '#ADD8E6' : '#ADD8E6', minWidth: '36%' }]}
                    onPress={() => handleInput(btn)}
                  >
                    <Text style={styles.textButton}>{btn}</Text>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity key={btn} style={[styles.button, { backgroundColor: typeof (btn) === 'number' ? darkMode ? '#ADD8E6' : '#fff' : darkMode === true ? '#ADD8E6' : '#ADD8E6' }]}
                    onPress={() => handleInput(btn)}
                  >
                    <Text style={styles.textButton}>{btn}</Text>
                  </TouchableOpacity>

        )}
      </View>
    </View>
  )
}

























