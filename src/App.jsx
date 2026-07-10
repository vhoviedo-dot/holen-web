import { ArrowLeft, Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const divisions = [
  {
    key: "agro",
    name: "HOLEN AGRO",
    logo: "/images/holen-agro-new.png",
    className: "agro",
  },
  {
    key: "industrial",
    name: "HOLEN INDUSTRIAL",
    logo: "/images/holen-industrial.png",
    className: "industrial",
  },
  {
    key: "gestion",
    name: "HOLEN GESTION",
    logo: "/images/holen-gestion.png",
    className: "gestion",
  },
  {
    key: "mining",
    name: "HOLEN MINING",
    logo: "/images/holen-mining.png",
    className: "mining",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/holenindustrial",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/holenindustrial",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/holen-industrial",
    icon: Linkedin,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/542646267359",
    icon: MessageCircle,
  },
  {
    name: "Correo",
    href: "mailto:contacto@holen.com.ar",
    icon: Mail,
  },
];

function App() {
  const [opened, setOpened] = useState(false);
  const [activeDivision, setActiveDivision] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playBackground = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    };

    playBackground();
    window.addEventListener("touchstart", playBackground, { once: true, passive: true });
    window.addEventListener("pointerdown", playBackground, { once: true });

    return () => {
      window.removeEventListener("touchstart", playBackground);
      window.removeEventListener("pointerdown", playBackground);
    };
  }, []);

  const active = divisions.find((division) => division.key === activeDivision);

  if (active) {
    return (
      <main className={`division-page page-${active.className}`}>
        <button className="back-button" onClick={() => setActiveDivision(null)}>
          <ArrowLeft size={18} />
          Volver
        </button>

        <section className="construction-stage">
          <div className="construction-logo-panel">
            <img src={active.logo} alt={active.name} />
          </div>

          <div className="construction-copy">
            <span>{active.name}</span>
            <h1>SITIO EN CONSTRUCCION</h1>
            <p>Estamos preparando esta seccion. Proximamente vas a encontrar aca toda la informacion de {active.name}.</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={`portal ${opened ? "is-open" : ""}`}>
      <video ref={videoRef} className="video-bg" autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" poster="/video-thumb.png" disablePictureInPicture>
        <source src="/videos/holen-bg.webm" type="video/webm" />
        <source src="/videos/holen-bg.mp4" type="video/mp4" />
      </video>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-floor" />

      <div className="core-stage">
        <button className="core-logo" onClick={() => setOpened(true)} aria-label="Abrir divisiones de Holen">
          <img src="/images/holen-main-only.png" alt="HOLEN" />
        </button>
        <p className="portal-welcome">BIENVENIDO AL SITIO OFICIAL DE HOLEN</p>
        <nav className="social-links" aria-label="Redes y contacto de Holen">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} title={name}>
              <Icon size={22} strokeWidth={1.8} />
            </a>
          ))}
        </nav>
      </div>

      <div className="division-ring" aria-hidden={!opened}>
        {divisions.map((division, index) => (
          <button
            className={`division-node node-${division.className}`}
            key={division.key}
            onClick={() => setActiveDivision(division.key)}
            style={{ "--i": index }}
          >
            <img src={division.logo} alt={division.name} />
          </button>
        ))}
      </div>

      <footer className="portal-footer">
        Desarrollado por Holen Gestion - Todos los derechos reservados
      </footer>
    </main>
  );
}

export default App;




