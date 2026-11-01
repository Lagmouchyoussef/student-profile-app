import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Reusable component: receives a title and a value through props
function InfoCard({ title, value, style }) {
  return (
    <View style={[styles.card, style]}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

// Additional custom component to display a skill
function SkillItem({ name }) {
  return <Text style={styles.skill}>• {name}</Text>;
}

export default function App() {
  const [skill, setSkill] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Student Card</Text>

      <Image
        style={styles.photo}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />

      {/* Two cards on the same row with Flexbox */}
      <View style={styles.row}>
        <InfoCard style={styles.half} title="Name" value="Youssef Lagmouch" />
        <InfoCard style={styles.half} title="Field" value="Computer Engineering" />
      </View>
      <InfoCard title="Level" value="4th year" />

      <Text style={styles.subTitle}>Skills</Text>
      <SkillItem name="JavaScript" />
      <SkillItem name="SQL" />
      <SkillItem name="React Native" />

      <TextInput
        style={styles.input}
        placeholder="Enter a skill"
        placeholderTextColor="#8A9BB3"
        value={skill}
        onChangeText={(text) => {
          setSkill(text);
          console.log(text);
        }}
      />
      <Button
        title="Add"
        onPress={() => Alert.alert('Confirmation', `Skill "${skill}" added!`)}
      />
      <View style={styles.spacer} />
      <Button title="Greet" onPress={() => alert('Hello!')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#1E3A5F',
  },
  photo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    width: '48%',
  },
  card: {
    padding: 14,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  label: {
    fontSize: 13,
    color: '#526579',
  },
  value: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 4,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 18,
    marginBottom: 8,
  },
  skill: {
    fontSize: 16,
    paddingVertical: 5,
  },
  input: {
    marginTop: 16,
    marginBottom: 10,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D5DEE8',
  },
  spacer: {
    height: 10,
  },
});
