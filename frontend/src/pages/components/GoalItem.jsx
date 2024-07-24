const GoalItem = ({ goal }) => {
  console.log('goal', goal);
  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
    </div>
  );
};

export default GoalItem;
