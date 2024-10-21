import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Faq() {
    const [faqs, setFaqs] = useState([])

    const listFaqs = () =>{
        axios
          .get("http://10.0.2.2:3000/faqs") //android tem bloqueio com localhost, por isso colocamos o ip do localhost
          .then((resposta) => {
            setFaqs(resposta.data)
          })
          .catch((error) => {
            console.error("Erro ao buscar as questões", error)
          })
      }
      useEffect(() =>{
        listFaqs();
      }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem vindo ao centro de informações!</Text>
        {faqs.length > 0 ? (
            faqs.map((faq, index) => (
                <View key={index} style={styles.faqCont}>
                    <Text style={styles.perguntaFaq}>{faq.pergunta}</Text>
                    <Text style={styles.respostaFaq}>{faq.resposta}</Text>
                </View>
            ))
        ) : (
            <Text>Nenhuma questão encontrada</Text>
        )}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        color: "red"
    },
    faqCont: {
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "red"
    },
    perguntaFaq: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5
    },
    respostaFaq: {
        fontSize: 15,
        marginBottom: 5
    }

})