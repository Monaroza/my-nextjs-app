'use client';
//Gİriş ve Kayıt sayfası oluşturma adımı

import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';


const auth = getAuth(app);

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // Başarılı giriş/üye olma sonrası yönlendirme veya mesaj ekleme 
    } catch (err) {
      setError('Hata: ' + (err as Error).message);
    }
  };

  return (
    <div>
      <h1>{isSignUp ? 'Kayıt Ol' : 'Giriş Yap'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          E-posta:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Şifre:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">{isSignUp ? 'Kayıt Ol' : 'Giriş Yap'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Zaten bir hesabınız var mı? Giriş yapın.' : 'Hesabınız yok mu? Kayıt olun.'}
      </button>
    </div>
  );
};

export default Auth;
