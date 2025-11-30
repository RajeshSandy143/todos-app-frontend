import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Text, Checkbox, Card, IconButton } from 'react-native-paper';
import api from '../services/api';

export default function TodoItem({ todo, onUpdate }) {
  const toggleComplete = async () => {
    try {
      await api.put(`/todos/${todo.id}`, { completed: !todo.completed });
      onUpdate();
    } catch (error) {
      alert('Failed to update todo');
    }
  };

  const deleteTodo = async () => {
    Alert.alert('Delete todo', 'Are you sure you want to delete this todo?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            await api.delete(`/todos/${todo.id}`);
            onUpdate();
          } catch (error) {
            alert('Failed to delete todo');
          }
        },
      },
    ]);
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.content}>
        <Checkbox status={todo.completed ? 'checked' : 'unchecked'} onPress={toggleComplete} />
        <Text style={[styles.title, todo.completed && styles.completed]}>{todo.title}</Text>
        <IconButton icon="delete" onPress={deleteTodo} accessibilityLabel="Delete todo" />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { margin: 5 },
  content: { flexDirection: 'row', alignItems: 'center' },
  title: { flex: 1, marginLeft: 10 },
  completed: { textDecorationLine: 'line-through', color: 'gray' },
});