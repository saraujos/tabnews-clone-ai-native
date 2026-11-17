"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./engine-sound.module.css";

const AUDIO_SOURCE = "/audio/f1-pass-by.mp3";
const PLAYBACK_VOLUME = 0.6;
const BUTTON_LABELS = {
  ready: "Ouvir a passagem de F1",
  loading: "Cancelar reprodução",
  playing: "Parar áudio",
  blocked: "Ouvir a passagem de F1",
  error: "Tentar novamente",
};
const STATUS_MESSAGES = {
  ready: "",
  loading: "Carregando áudio…",
  playing: "Carro passando…",
  blocked: "Toque para ouvir o som do motor.",
  error: "Não foi possível reproduzir o áudio. Tente novamente.",
};

function playbackErrorStatus(error) {
  return error.name === "NotAllowedError" ? "blocked" : "error";
}

export default function EngineSound() {
  const audioRef = useRef(null);
  const [status, setStatus] = useState("ready");
  const isActive = status === "playing" || status === "loading";

  useEffect(() => {
    const audio = audioRef.current;
    let active = true;
    audio.volume = PLAYBACK_VOLUME;

    // O navegador pode exigir uma interação para permitir áudio automático.
    audio.play().catch((error) => {
      if (active && error.name !== "AbortError") {
        setStatus(playbackErrorStatus(error));
      }
    });

    return () => {
      active = false;
      audio.pause();
    };
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;

    if (isActive) {
      audio.pause();
      audio.currentTime = 0;
      setStatus("ready");
      return;
    }

    setStatus("loading");
    audio.currentTime = 0;

    try {
      await audio.play();
    } catch (error) {
      if (error.name !== "AbortError") {
        setStatus(playbackErrorStatus(error));
      }
    }
  }

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={AUDIO_SOURCE}
        preload="auto"
        onPlay={() => setStatus("loading")}
        onPlaying={() => setStatus("playing")}
        onPause={() => setStatus("ready")}
        onEnded={() => setStatus("ready")}
        onError={() => setStatus("error")}
      />
      <button
        className={styles.button}
        type="button"
        onClick={togglePlayback}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {isActive ? (
            <path d="M6 6h12v12H6z" />
          ) : (
            <path d="M8 5v14l11-7z" />
          )}
        </svg>
        {BUTTON_LABELS[status]}
      </button>
      <p className={styles.message} role="status">
        {STATUS_MESSAGES[status]}
      </p>
    </div>
  );
}
