import { Activity, ArrowLeft, BarChart3, Cpu, Droplets, Facebook, Factory, Gauge, Instagram, Linkedin, Mail, MessageCircle, Satellite, ShieldCheck, UsersRound } from "lucide-react";
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


const agroFeatures = [
  {
    title: "Monitoreo remoto",
    text: "Variables criticas del campo visibles desde cualquier lugar, con informacion clara para actuar a tiempo.",
    icon: Satellite,
  },
  {
    title: "Riego inteligente",
    text: "Control y seguimiento de sistemas de riego para mejorar eficiencia, disponibilidad y consumo.",
    icon: Droplets,
  },
  {
    title: "Tableros de gestion",
    text: "Indicadores simples para produccion, mantenimiento, alarmas y seguimiento operativo.",
    icon: BarChart3,
  },
  {
    title: "Automatizacion rural",
    text: "Soluciones a medida para integrar sensores, equipos, tableros y procesos productivos.",
    icon: Gauge,
  },
];

function AgroLanding({ onBack, onContact }) {
  return (
    <main className="division-page page-agro agro-landing">
      <video className="agro-bg-video" autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" disablePictureInPicture>
        <source src="/videos/holen-agro-bg.mp4" type="video/mp4" />
      </video>
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={18} />
        Volver
      </button>

      <section className="agro-hero">
        <div className="agro-brand">
          <img src="/images/holen-agro-new.png" alt="HOLEN AGRO" />
        </div>

        <div className="agro-copy">
          <span>HOLEN AGRO</span>
          <h1>Tecnologia aplicada al campo</h1>
          <p>
            Integramos automatizacion, monitoreo remoto y tableros de control para que la operacion agroindustrial sea mas visible, eficiente y confiable.
          </p>
        </div>
      </section>

      <section className="agro-feature-grid" aria-label="Soluciones de Holen Agro">
        {agroFeatures.map(({ title, text, icon: Icon }) => (
          <article className="agro-feature" key={title}>
            <Icon size={24} strokeWidth={1.8} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <footer className="agro-bottom-bar">
        <div className="bottom-contact-copy">
          <strong>Charlemos sobre tu proyecto</strong>
          <span>Te podemos ayudar</span>
        </div>
        <button className="bottom-contact-button" type="button" onClick={onContact} aria-label="Abrir contacto">
          <MessageCircle size={20} strokeWidth={1.9} />
          Contacto
        </button>
        <p>Desarrollado por HOLEN GESTION - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

const industrialFeatures = [
  {
    title: "PLC, SCADA y control",
    text: "Programacion industrial, automatizacion, soporte tecnico y supervision para planta y maquinas.",
    icon: Factory,
  },
  {
    title: "Mantenimiento integral",
    text: "Servicio electrico, neumatico, mecanico, mediciones y diagnostico de equipos.",
    icon: Activity,
  },
  {
    title: "Proyectos e integraciones",
    text: "Planimetrias, ingenieria, integracion de sistemas, puesta en marcha y documentacion.",
    icon: BarChart3,
  },
  {
    title: "Modernizacion de maquinas",
    text: "Retrofitting, actualizaciones, mejoras de control y renovacion de equipos existentes.",
    icon: ShieldCheck,
  },
];

function IndustrialLanding({ onBack, onContact }) {
  return (
    <main className="division-page page-industrial industrial-landing">
      <video className="industrial-bg-video" autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" disablePictureInPicture>
        <source src="/videos/holen-industrial-bg.mp4" type="video/mp4" />
      </video>
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={18} />
        Volver
      </button>

      <section className="industrial-hero">
        <div className="industrial-brand">
          <img src="/images/holen-industrial.png" alt="HOLEN INDUSTRIAL" />
        </div>

        <div className="industrial-copy">
          <span>HOLEN INDUSTRIAL</span>
          <h1>Soluciones industriales completas</h1>
          <p>
            Automatizacion, programacion PLC/SCADA, mantenimiento tecnico, proyectos, integraciones, puesta en marcha y modernizacion de maquinas.
          </p>
        </div>
      </section>

      <section className="industrial-feature-grid" aria-label="Soluciones de Holen Industrial">
        {industrialFeatures.map(({ title, text, icon: Icon }) => (
          <article className="industrial-feature" key={title}>
            <Icon size={24} strokeWidth={1.8} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <footer className="industrial-bottom-bar">
        <div className="bottom-contact-copy">
          <strong>Charlemos sobre tu proyecto</strong>
          <span>Te podemos ayudar</span>
        </div>
        <button className="bottom-contact-button" type="button" onClick={onContact} aria-label="Abrir contacto">
          <MessageCircle size={20} strokeWidth={1.9} />
          Contacto
        </button>
        <p>Desarrollado por HOLEN GESTION - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

const gestionFeatures = [
  {
    title: "Sistemas a medida",
    text: "Gestion comercial, servicios, produccion, administracion o cualquier proceso que tu negocio necesite ordenar.",
    icon: Cpu,
  },
  {
    title: "Todo integrado",
    text: "Conectamos las herramientas que ya usas y sumamos las que quieras incorporar para trabajar sin duplicar tareas.",
    icon: Activity,
  },
  {
    title: "Desde cualquier lugar",
    text: "Acceso desde computadora, tablet o celular para que la informacion este disponible cuando hace falta.",
    icon: BarChart3,
  },
  {
    title: "Programamos soluciones",
    text: "Si se puede pensar, medir, conectar o automatizar, Holen Gestion puede desarrollarlo.",
    icon: ShieldCheck,
  },
];

function GestionLanding({ onBack, onContact }) {
  return (
    <main className="division-page page-gestion gestion-landing">
      <video className="gestion-bg-video" autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" disablePictureInPicture>
        <source src="/videos/holen-gestion-bg.mp4" type="video/mp4" />
      </video>
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={18} />
        Volver
      </button>

      <section className="gestion-hero">
        <div className="gestion-brand">
          <img src="/images/holen-gestion.png" alt="HOLEN GESTION" />
        </div>

        <div className="gestion-copy">
          <span>HOLEN GESTION DIGITAL</span>
          <h1>Sistemas de gestion a medida</h1>
          <p>
            Creamos plataformas digitales para comercios, servicios, industrias y equipos que necesitan ordenar informacion, integrar herramientas y trabajar desde cualquier dispositivo.
          </p>
        </div>
      </section>

      <section className="gestion-feature-grid" aria-label="Soluciones de Holen Gestion">
        {gestionFeatures.map(({ title, text, icon: Icon }) => (
          <article className="gestion-feature" key={title}>
            <Icon size={24} strokeWidth={1.8} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <footer className="gestion-bottom-bar">
        <div className="bottom-contact-copy">
          <strong>Charlemos sobre tu proyecto</strong>
          <span>Te podemos ayudar</span>
        </div>
        <button className="bottom-contact-button" type="button" onClick={onContact} aria-label="Abrir contacto">
          <MessageCircle size={20} strokeWidth={1.9} />
          Contacto
        </button>
        <p>Desarrollado por HOLEN GESTION - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}

const miningFeatures = [
  {
    title: "Operacion monitoreada",
    text: "Variables criticas, estados de equipos y procesos visibles para mejorar control operativo en campo y planta.",
    icon: Gauge,
  },
  {
    title: "Seguridad y alertas",
    text: "Seguimiento de condiciones, eventos y alarmas para anticipar riesgos y responder con informacion clara.",
    icon: ShieldCheck,
  },
  {
    title: "Datos productivos",
    text: "Tableros para produccion, mantenimiento, rendimiento, disponibilidad y trazabilidad minera.",
    icon: BarChart3,
  },
  {
    title: "Integracion minera",
    text: "Conectamos sensores, equipos, sistemas y reportes para que la operacion trabaje como una sola plataforma.",
    icon: Cpu,
  },
];

function MiningLanding({ onBack, onContact }) {
  return (
    <main className="division-page page-mining mining-landing">
      <video className="mining-bg-video" autoPlay muted loop playsInline webkit-playsinline="true" preload="auto" disablePictureInPicture>
        <source src="/videos/holen-mining-bg.mp4" type="video/mp4" />
      </video>
      <button className="back-button" onClick={onBack}>
        <ArrowLeft size={18} />
        Volver
      </button>

      <section className="mining-hero">
        <div className="mining-brand">
          <img src="/images/holen-mining.png" alt="HOLEN MINING" />
        </div>

        <div className="mining-copy">
          <span>HOLEN MINING</span>
          <h1>Tecnologia para operaciones mineras</h1>
          <p>
            Desarrollamos soluciones digitales para monitorear procesos, integrar equipos, visualizar datos criticos y mejorar la toma de decisiones en entornos mineros.
          </p>
        </div>
      </section>

      <section className="mining-feature-grid" aria-label="Soluciones de Holen Mining">
        {miningFeatures.map(({ title, text, icon: Icon }) => (
          <article className="mining-feature" key={title}>
            <Icon size={24} strokeWidth={1.8} />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <footer className="mining-bottom-bar">
        <div className="bottom-contact-copy">
          <strong>Charlemos sobre tu proyecto</strong>
          <span>Te podemos ayudar</span>
        </div>
        <button className="bottom-contact-button" type="button" onClick={onContact} aria-label="Abrir contacto">
          <MessageCircle size={20} strokeWidth={1.9} />
          Contacto
        </button>
        <p>Desarrollado por HOLEN GESTION - Todos los derechos reservados</p>
      </footer>
    </main>
  );
}
const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/redholen/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/holenindustrial",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/holen-industrial-93429338a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: Linkedin,
  },
  {
    name: "Mensaje",
    action: "contact",
    icon: MessageCircle,
  },
  {
    name: "Quienes somos",
    action: "about",
    icon: UsersRound,
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
  const [contactOpen, setContactOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactStatus, setContactStatus] = useState("idle");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
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

  const updateContactField = (field, value) => {
    setContactForm((current) => ({ ...current, [field]: value }));
  };

  const openContactModal = () => {
    setContactStatus("idle");
    setContactOpen(true);
  };
  const sendContactMessage = async (event) => {
    event.preventDefault();
    setContactStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }

      setContactStatus("sent");
      setContactForm({ name: "", email: "", message: "" });
    } catch {
      setContactStatus("error");
    }
  };

  const aboutModal = aboutOpen && (
    <div className="contact-modal-backdrop" role="presentation" onClick={() => setAboutOpen(false)}>
      <section className="contact-modal about-modal" onClick={(event) => event.stopPropagation()}>
        <div className="contact-modal-head">
          <span>Quienes somos</span>
          <button type="button" onClick={() => setAboutOpen(false)} aria-label="Cerrar informacion">Cerrar</button>
        </div>
        <h2>Holen, tecnologia aplicada al trabajo real</h2>
        <p>Somos una joven empresa sanjuanina formada por profesionales con mas de 15 anos de experiencia en industria, automatizacion, programacion y gestion operativa.</p>
        <p>Unimos conocimiento de planta, criterio tecnico y desarrollo digital para crear soluciones claras, robustas y hechas a medida: desde PLC, SCADA, tableros y mantenimiento industrial, hasta sistemas web, monitoreo remoto e integraciones para que cada negocio trabaje mejor.</p>
        <p>Nos mueve una idea simple: escuchar el problema, entender la operacion y construir herramientas que realmente sirvan.</p>
      </section>
    </div>
  );

  const contactModal = contactOpen && (
    <div className="contact-modal-backdrop" role="presentation" onClick={() => setContactOpen(false)}>
      <form className="contact-modal" onSubmit={sendContactMessage} onClick={(event) => event.stopPropagation()}>
        <div className="contact-modal-head">
          <span>Contacto directo</span>
          <button type="button" onClick={() => setContactOpen(false)} aria-label="Cerrar formulario">Cerrar</button>
        </div>
        <h2>Enviar mensaje a Holen</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={contactForm.name}
          onChange={(event) => updateContactField("name", event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={contactForm.email}
          onChange={(event) => updateContactField("email", event.target.value)}
        />
        <textarea
          placeholder="Escribi tu mensaje"
          value={contactForm.message}
          onChange={(event) => updateContactField("message", event.target.value)}
          required
        />
        <button className="contact-submit" type="submit" disabled={contactStatus === "sending"}>{contactStatus === "sending" ? "Enviando..." : "Enviar mensaje"}</button>
        {contactStatus === "sent" && <p className="contact-status">Mensaje enviado correctamente.</p>}
        {contactStatus === "error" && <p className="contact-status contact-error">No se pudo enviar. Intentalo nuevamente.</p>}
        <p>Tu consulta se enviara al equipo de Holen.</p>
      </form>
    </div>
  );
  if (active?.key === "agro") {
    return <><AgroLanding onBack={() => setActiveDivision(null)} onContact={openContactModal} />{contactModal}{aboutModal}</>;
  }

  if (active?.key === "industrial") {
    return <><IndustrialLanding onBack={() => setActiveDivision(null)} onContact={openContactModal} />{contactModal}{aboutModal}</>;
  }

  if (active?.key === "gestion") {
    return <><GestionLanding onBack={() => setActiveDivision(null)} onContact={openContactModal} />{contactModal}{aboutModal}</>;
  }

  if (active?.key === "mining") {
    return <><MiningLanding onBack={() => setActiveDivision(null)} onContact={openContactModal} />{contactModal}{aboutModal}</>;
  }

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
          {socialLinks.map(({ name, href, action, icon: Icon }) => (
            action === "contact" ? (
              <button key={name} type="button" onClick={openContactModal} aria-label={name} title={name}>
                <Icon size={22} strokeWidth={1.8} />
              </button>
            ) : action === "about" ? (
              <button key={name} type="button" onClick={() => setAboutOpen(true)} aria-label={name} title={name}>
                <Icon size={22} strokeWidth={1.8} />
              </button>
            ) : (
              <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name} title={name}>
                <Icon size={22} strokeWidth={1.8} />
              </a>
            )
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
      {contactModal}
      {aboutModal}

      <footer className="portal-footer">
        Desarrollado por HOLEN GESTION - Todos los derechos reservados
      </footer>
    </main>
  );
}

export default App;













