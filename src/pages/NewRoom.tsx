import { Link, useHistory } from "react-router-dom";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase";

import illustrationImg from "../assets/illustration.svg";
import logoImg from "../assets/logo.svg";

import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import "../styles/auth.scss";
import { DefaultTheme, ThemeProvider } from "styled-components";
import usePersistedState from "../hooks/usePersistedState";
import ligth from "../styles/themes/ligth";

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();

  const [theme] = usePersistedState<DefaultTheme>("theme", ligth);

  const [newRoom, setNewRoom] = useState("");

  async function HandleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const rommRef = database.ref("rooms");

    const firebaseRoom = await rommRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <ThemeProvider theme={theme}>
      <div id="page-auth">
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

            <h2>Criar uma nova sala</h2>

            <form onSubmit={HandleCreateRoom}>
              <input
                type="text"
                placeholder="Nome da Sala"
                onChange={(event) => setNewRoom(event.target.value)}
                value={newRoom}
              />
              <Button type="submit">Criar sala</Button>
            </form>
            <p>
              Quer entrar em uma sala existente?{" "}
              <Link to={"/"}>clique aqui</Link>
            </p>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
