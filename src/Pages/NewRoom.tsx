import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import styles from '../styles/auth.module.scss';
import { Button } from '../components/Button';

export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala já existente?{' '}
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
