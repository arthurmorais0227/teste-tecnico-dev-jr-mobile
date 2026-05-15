import { View, Text, FlatList, StyleSheet } from 'react-native';

const habilidades = [
  { id: '1', name: 'React Native' },
  { id: '2', name: 'Expo' },
  { id: '3', name: 'JavaScript' },
  { id: '4', name: 'HTML & CSS' },
  { id: '5', name: 'Git e GitHub' },
  { id: '6', name: 'UX básico' },
];

export default function HabilidadesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Minhas habilidades</Text>
      <FlatList
        data={habilidades}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.skillCard}>
            <Text style={styles.skillText}>• {item.name}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061426',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#93c5fd',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  skillCard: {
    backgroundColor: '#0d1f36',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#15304f',
  },
  skillText: {
    fontSize: 16,
    color: '#e2e8f0',
  },
});
