const config = {
  lng: navigator.languages[1],
  debug: true,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: {
        "about_me": "About me",
        "studies": "Studies",
        "portfolio": "Portfolio",
        "info_title": `Hello. I'm <span>&lt;/</span>Mateo<span>&gt;</span>`,
        "info_subtitle": "FullStack Developer",
        "info_text": `I am passionate about software development. I am currently studying a higher vocational training program in web development while also pursuing a master's degree in <span>full-stack web development</span>. Throughout this learning journey, I have worked on various projects and faced numerous challenges that have shaped me into an experienced developer. I enjoy <span>solving problems</span>, I am <span>resilient in the face of frustration</span>, I like <span>contributing ideas</span>, and I am <span>constantly learning</span>.`,
        "info_stack": "Knowledge",
        "info_learning": "Learning",
        "studies_title": "Studies",
        "portfolio_text": "This button will take you to my portfolio which contains quite a few curious projects."
      }
    },
    es: {
      translation: {
        "about_me": "Sobre mí",
        "studies": "Estudios",
        "portfolio": "Portfolio",
        "info_title": `Hola. Soy <span>&lt;/</span>Mateo<span>&gt;</span>`,
        "info_subtitle": "Desarrollador FullStack",
        "info_text": `Soy un apasionado del desarrollo de software. Actualmente curso un ciclo formativo de grado superior en desarrollo web y, en paralelo, un máster en <span>desarrollo web full-stack</span>. A lo largo de este proceso formativo he abordado diversos proyectos y, con ellos, numerosos desafíos que me han convertido en un desarrollador experimentado. Disfruto <span>resolver problemas</span>, soy <span>resiliente ante la frustración</span>, me gusta <span>aportar ideas</span> y estoy en <span>constante aprendizaje</span>.`,
        "info_stack": "Conocimientos",
        "info_learning": "Aprendiendo",
        "studies_title": "Estudios",
        "portfolio_text": "Este botón te llevará a mi portfolio en el cual tengo proyectos bastante curiosos."
      }
    }
  }
};

export default config;