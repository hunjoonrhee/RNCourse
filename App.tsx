import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { IGoal } from './models/Goal';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  setBackgroundColorAsync('#1e085a');

  const [text, setText] = useState<string>('');
  const [goals, setGoals] = useState<IGoal[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const changeTextHandler = (enteredText: string) => {
    setText(enteredText);
  };

  const addGoalHandler = () => {
    setGoals((prev: IGoal[]) => [...prev, { id: uuidv4(), goal: text }]);
    setShowModal(false);
    setText('');
  };

  const deleteGoalHandler = (id: string) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={() => setShowModal(true)} />
        <GoalInput
          text={text}
          changeTextHandler={changeTextHandler}
          addGoalHandler={addGoalHandler}
          showModal={showModal}
          closeModal={closeModal}
        />

        <View style={styles.goalsContainer}>
          {goals.length > 0 ? (
            <GoalList goals={goals} deleteGoalHandler={deleteGoalHandler} />
          ) : (
            <View style={styles.emptyGoalsContainer}>
              <Text style={styles.emptyGoalsText}> What can be your goals? </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  goalsContainer: {
    flex: 5,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  emptyGoalsContainer: {
    alignItems: 'center',
  },
  emptyGoalsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
