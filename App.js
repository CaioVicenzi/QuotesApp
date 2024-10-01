import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [quote, setQuote] = useState("")
  const [quoteAuthor, setQuoteAuthor] = useState("")
  const [authorImage, setAuthorImage] = useState("")

  function adquirir () {
    const quotes = require('./quotes.json');
    let random = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[random]
    setQuote(randomQuote.frase)
    setQuoteAuthor(randomQuote.autor)
    setAuthorImage(randomQuote.imagem)
  }

  return (
    <View style={styles.container}>
      <Text >{quote.length == 0 ? "Adquira sua frase motivacional" : ""} </Text>
      <Button title={quote.length == 0 ? "Adquirir" : "Adquirir novamente"} onPress={adquirir} />


      <Text style={styles.quote}>"{quote}"</Text>
      <Text  style={styles.author}>{quoteAuthor}</Text>
      <Image source={{ uri: authorImage }} style={styles.imagem}></Image>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem : {
    width: 100,
    height: 100,
    borderRadius: 100
  },

  quote: {
    fontSize: 28,
    fontWeight: 'semibold'
  },

  author: {
    color: 'gray'
  }
});
