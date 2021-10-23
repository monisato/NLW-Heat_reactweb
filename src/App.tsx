import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './components/LoginBox';
import { MessageList } from './components/MessageList';
import { SendMessageForm } from './components/SendMessageForm';
import { AuthContext } from './contexts/auth';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      {/* !!user === Boolean(user) */}
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </main>
  )
}

/**
 * tag class do html dentro do react precisa ser className, 
 * pois class tem outro proposito
 */ 


/**
 * quando usado arquivo .css
 * import './App.css'
 * <main className="contentWrapper">
 * 
 * CSS MODULES 
 *     usado para deixar os estilos independentes para cada parte da aplicação
 * mas quando usado arquivo .module.css 
 * import styles from './App.module.css';
 * <main className={styles.contentWrapper}>
 */

/**
 * export default App => 
 * importação fica: 
 * import App from "./App";
 * 
 * export function App() =>
 * facilita caso precise renomear funções
 * "Named Exports"
 * import { App } from "./App";
 */