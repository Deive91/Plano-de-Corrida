import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';
import * as authAPI from '../lib/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Escuta mudanças de estado no Firebase (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // Busca os dados extras no Firestore
          const userProfile = await authAPI.getUserProfile(firebaseUser.uid);
          if (userProfile) {
            setUser({ id: firebaseUser.uid, ...userProfile });
          } else {
            // Perfil ainda não existe no Firestore (pode estar sendo criado)
            setUser({ id: firebaseUser.uid, email: firebaseUser.email, role: 'user' });
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Erro no onAuthStateChanged:', error);
        if (firebaseUser) {
          setUser({ id: firebaseUser.uid, email: firebaseUser.email, role: 'user' });
        }
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    const u = await authAPI.login(email, password);
    setUser(u);
    return u;
  };

  const register = async (name, email, password, gender, whatsapp) => {
    const u = await authAPI.register(name, email, password, gender, whatsapp);
    setUser(u);
    return u;
  };

  const logout = async () => {
    await authAPI.logout();
    setUser(null);
  };

  const refreshUser = async () => {
    if (user && user.id) {
      const userProfile = await authAPI.getUserProfile(user.id);
      setUser({ id: user.id, ...userProfile });
    }
  };

  const updateProfile = async (data) => {
    if (user && user.id) {
      await authAPI.updateUserProfile(user.id, data);
      await refreshUser();
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, refreshUser, updateProfile, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
