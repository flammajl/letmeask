import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import styles from '../styles/auth.module.scss';
import { Button } from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <div className={styles.pageAuth}>
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A</strong>
        <p>Tire as dúvidas de sua audiência em tempo real.</p>
      </aside>

      <main>
        <div className={styles.mainContent}>
          <img src={logoImg} alt="Letmeask" />
          <button
            type="button"
            className={styles.createRoom}
            onClick={handleCreateRoom}
          >
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className={styles.separator}>ou entre em uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
