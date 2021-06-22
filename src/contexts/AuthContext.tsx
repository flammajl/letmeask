import {
  useState,
  createContext,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import { auth, firebase } from '../services/firebase';

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextProps = {
  user: User;
  signInWithGoogle: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google account.');
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userExists => {
      if (userExists) {
        const { displayName, photoURL, uid } = userExists;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google account.');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authHook = useContext(AuthContext);

  return authHook;
}
