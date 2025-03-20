import { FlatList } from 'react-native';
import { IGoal } from '../models/Goal';
import GoalItem from './GoalItem';

type GoalListProps = {
  goals: IGoal[];
  deleteGoalHandler: (id: string) => void;
};
const GoalList: React.FC<GoalListProps> = (props: GoalListProps) => {
  const { goals, deleteGoalHandler } = props;
  return (
    <FlatList
      data={goals}
      renderItem={(itemData) => {
        return <GoalItem itemData={itemData} deleteGoalHandler={deleteGoalHandler} />;
      }}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false}
    />
  );
};

export default GoalList;
