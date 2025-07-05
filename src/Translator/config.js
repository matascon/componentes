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
        "info_text": "I am passionate about software development. I am currently studying a higher vocational training program in web development while also pursuing a master's degree in full-stack web development. Throughout this learning journey, I have worked on various projects and faced numerous challenges that have shaped me into an experienced developer. I enjoy solving problems, I am resilient in the face of frustration, I like contributing ideas, and I am constantly learning.",
        "info_stack": "Knowledge",
        "info_learning": "Learning"
      }
    },
    es: {
      translation: {
        "about_me": "Sobre mí",
        "studies": "Estudios",
        "portfolio": "Portfolio",
        "info_title": `Hola. Soy <span>&lt;/</span>Mateo<span>&gt;</span>`,
        "info_subtitle": "Desarrollador FullStack",
        "info_text": "Soy un apasionado del desarrollo de software. Actualmente curso un ciclo formativo de grado superior en desarrollo web y, en paralelo, un máster en desarrollo web full-stack. A lo largo de este proceso formativo he abordado diversos proyectos y, con ellos, numerosos desafíos que me han convertido en un desarrollador experimentado. Disfruto resolviendo problemas, soy resiliente ante la frustración, me gusta aportar ideas y estoy en constante aprendizaje.",
        "info_stack": "Conocimientos",
        "info_learning": "Aprendiendo"
      }
    }
  }
};

export default config;