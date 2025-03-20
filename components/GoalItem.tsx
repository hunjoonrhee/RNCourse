import { View, Text, StyleSheet, ListRenderItemInfo, Pressable } from "react-native";
import { IGoal } from "../models/Goal";

type GoalProps = {
  itemData: ListRenderItemInfo<IGoal>;
  deleteGoalHandler: (id: string) => void;
};

const GoalItem: React.FC<GoalProps> = (props: GoalProps) => {
  const { itemData, deleteGoalHandler } = props;
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => deleteGoalHandler(itemData.item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.goal}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
