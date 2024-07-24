import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GoalForm from './components/GoalForm';

const Dashboard = () => {
  const navigate = useNavigate();
  const state1 = useSelector(state => state.auth);
  console.log('state1', state1);
  const { user } = state1;

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </>
  );
};

export default Dashboard;
