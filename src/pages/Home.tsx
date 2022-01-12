import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

//#region Photos

import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";
import googleIconImg from "../assets/google-icon.svg";
//#endregion photos
//#region Styles
import "../styles/auth.scss";
import GlobalStyle from "../styles/global";
//#endregion Styles

import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";
import usePersistedState from "../hooks/usePersistedState";
import { DefaultTheme, ThemeProvider } from "styled-components";
import ligth from "../styles/themes/ligth";
import { Button } from "../components/Button";

export function Home() {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState("");

  const [theme] = usePersistedState<DefaultTheme>("theme", ligth);

  const { user, signInWithGoogle } = useAuth();

  async function HandleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      alert("Set the code");
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("This room dont exist");
      return;
    }

    if (roomRef.val().endedAt) {
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <div id="page-auth">
        <GlobalStyle />
        <aside>
          <img
            src={illustrationImg}
            alt="Ilustração simbolizando perguntas e respostas"
          />
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
          <p>Tire as dúvidas da sua audiência em tempo-real</p>
        </aside>
        <main>
          <div className="main-content">
            <img src={logoImg} alt="Letmeask" />
            <button className="create-room" onClick={HandleCreateRoom}>
              <img src={googleIconImg} alt="Google icon" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form onSubmit={handleJoinRoom}>
              <input
                type="text"
                placeholder="Digite o código da sala"
                onChange={(event) => setRoomCode(event.target.value)}
                value={roomCode}
              />
              <Button type="submit">Entrar na sala</Button>
            </form>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
