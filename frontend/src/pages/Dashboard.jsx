import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from './components/GoalForm';
import Spinner from './components/Spinner';
import { getGoals, reset } from '../features/goals/goalSlice';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state1 = useSelector(state => state.auth);
  console.log('state1', state1);
  const { user } = state1;

  //const { goals, isLoading, isError, message } = useSelector(state => state.goals);
  const state2 = useSelector(state => state.goals);
  console.log('state2', state2);
  const { isLoading, isError, message } = state2;

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content"></section>
    </>
  );
};

export default Dashboard;
