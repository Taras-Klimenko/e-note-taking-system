import { FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthSession } from './AuthSessionContext';
import styles from '../utils/utils.module.css';
import { supabase } from '../supabaseClient';

export const Auth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const { session } = useAuthSession();

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles.centeredFlex}>
      <div>
        <h1>E-Note Taking System</h1>
        <p>Sign in via Magic Link with your email below</p>
        {loading ? (
          'Sending Magic Link...'
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
            />
            <button>Send Magic Link</button>
          </form>
        )}
      </div>
    </div>
  );
};
