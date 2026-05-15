import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/RTvRgbVR/20260515-144216.jpg' }}
        style={styles.profileImage}
        accessibilityLabel="Foto de perfil"
      />
      <Text style={styles.name}>Arthur Morais</Text>
      <Text style={styles.role}>Desenvolvedor Mobile/Web Júnior</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Sobre mim</Text>
        <Text style={styles.text}>
          Sou um desenvolvedor mobile em início de carreira com foco em React Native e Expo. Tenho vontade de aprender todo dia, entregar soluções bem organizadas e criar interfaces limpas e acessíveis.
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Resumo</Text>
        <Text style={styles.text}>
          - Criação de telas reativas com componentes básicos
          {'\n'}- Uso de navegação por abas inferiores
          {'\n'}- Organização do código em telas separadas
          {'\n'}- Estilização com StyleSheet e componentes nativos
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#061426',
    alignItems: 'center',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#2563eb',
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#e2e8f0',
  },
  role: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#0d1f36',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#15304f',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#93c5fd',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#cbd5e1',
  },
});
