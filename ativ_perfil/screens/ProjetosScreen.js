import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

const projetos = [
  {
    id: '1',
    title: 'Catálogo de produtos',
    description: 'Aplicativo simples que exibe produtos com navegação por abas e cards responsivos.',
  },
  {
    id: '2',
    title: 'Agenda de viagens',
    description: 'Projeto desenvolvido para listar destinos, descrição e informações de contato.',
  },
];

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  function enviarContato() {
    if (!mensagem.trim()) {
      Alert.alert('Atenção', 'Por favor, escreva uma mensagem antes de enviar.');
      return;
    }
    Alert.alert('Contato enviado', 'Obrigado! Sua mensagem foi recebida.');
    setMensagem('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Projetos</Text>
      {projetos.map((projeto) => (
        <View key={projeto.id} style={styles.projectCard}>
          <Text style={styles.projectTitle}>{projeto.title}</Text>
          <Text style={styles.projectDescription}>{projeto.description}</Text>
        </View>
      ))}

      <View style={styles.contactSection}>
        <Text style={styles.contactHeader}>Contato</Text>
        <Text style={styles.contactText}>Email: lucas.silva@email.com</Text>
        <Text style={styles.contactText}>GitHub: github.com/lucassilva</Text>
        <Text style={styles.contactText}>LinkedIn: linkedin.com/in/lucassilva</Text>
        <Text style={styles.inputLabel}>Mensagem</Text>
        <TextInput
          style={styles.input}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Escreva aqui sua mensagem"
          placeholderTextColor="#94a3b8"
          multiline
        />
        <View style={styles.buttonContainer}>
          <Button title="Enviar contato" onPress={enviarContato} color="#2563eb" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#061426',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#93c5fd',
    marginBottom: 16,
  },
  projectCard: {
    backgroundColor: '#0d1f36',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#15304f',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e2e8f0',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 15,
    lineHeight: 22,
    color: '#cbd5e1',
  },
  contactSection: {
    marginTop: 24,
    backgroundColor: '#0d1f36',
    borderRadius: 18,
    padding: 18,
  },
  contactHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#93c5fd',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 15,
    color: '#cbd5e1',
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
    color: '#cbd5e1',
  },
  input: {
    backgroundColor: '#0b172a',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#1c2d4c',
    minHeight: 100,
    textAlignVertical: 'top',
    color: '#e2e8f0',
  },
  buttonContainer: {
    marginTop: 16,
    borderRadius: 14,
    overflow: 'hidden',
  },
});
