import React, { useState } from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// Step 1 — Prepare the data
const student = {
  name: 'Youssef Lagmouch',
  field: 'Computer Engineering',
  level: '4th year',
};

const competences = ['JavaScript', 'SQL', 'React Native'];

// Step 2 — Reusable component
function InfoCard({ title, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

// Step 3 — Skills list
function SkillList({ competences }) {
  return (
    <View>
      {competences.map((competence, index) => (
        <Text key={index} style={styles.skill}>
          • {competence}
        </Text>
      ))}
    </View>
  );
}

// Step 4 — Assemble the screen
export default function App() {
  const [skills, setSkills] = useState(competences);
  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    // trim() removes leading/trailing spaces: detects empty or spaces-only input
    const name = newSkill.trim();
    if (name === '') {
      Alert.alert('Error', 'Please enter a skill.');
      return;
    }
    setSkills([...skills, name]);
    setNewSkill('');
    Alert.alert('Confirmation', `Skill "${name}" added!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Space</Text>
      <InfoCard title="Name" value={student.name} />
      <InfoCard title="Field" value={student.field} />
      <InfoCard title="Level" value={student.level} />
      <Text style={styles.subTitle}>Skills</Text>
      <SkillList competences={skills} />

      <TextInput
        style={styles.input}
        placeholder="Enter a skill"
        placeholderTextColor="#8A9BB3"
        value={newSkill}
        onChangeText={setNewSkill}
      />
      <Button title="Add" onPress={addSkill} />
    </ScrollView>
  );
}

// Step 5 — Layout
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
});
