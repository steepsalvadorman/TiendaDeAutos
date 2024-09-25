import "../preguntas.css";
export const Header = () => {
  return (
    <header className="headerpreguntas">
      <div className="logo">
        <a className="logopreguntas" title="Inicio" href="/">
          <img
            src="/src/assets/images/Logo1.webp"
            alt="Página principal del Centro de ayuda de Central de Ayuda"
          />
        </a>
      </div>
      <div className="nav-wrapper">
        <button
          className="menu-button"
          aria-controls="user-nav"
          aria-expanded="false"
          aria-label="Abrir/cerrar menú de navegación"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            focusable="false"
            viewBox="0 0 16 16"
            className="icon-menu"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              d="M1.5 3.5h13m-13 4h13m-13 4h13"
            />
          </svg>
        </button>
        <a
          className="enlancespreguntas"
          rel="nofollow"
          data-auth-action="signin"
          title="Abre un cuadro de diálogo"
          role="button"
          href="Publicacion"
        >
          Iniciar sesión
        </a>
      </div>
    </header>
  );
};
