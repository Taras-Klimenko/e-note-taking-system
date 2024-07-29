import { Navigate } from 'react-router-dom';
import { useAuthSession } from './AuthSessionContext';

type PrivateProps = {
  component: React.ReactElement;
};

export const Private = ({ component }: PrivateProps) => {
  const { session, loading } = useAuthSession();

  if (loading) {
    return <>Authenticating...</>;
  }

  return session ? component : <Navigate to="/auth" />;
};
