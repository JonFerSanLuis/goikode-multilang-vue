import { createI18n } from 'vue-i18n'

// Mensajes en español
const es = {
  nav: {
    home: 'Inicio',
    about: 'Sobre Nosotros',
    servicios: 'Servicios'
  },
  home: {
    welcome: 'Bienvenido a Goikode',
    tagline: 'Especialistas en ciberseguridad y desarrollo seguro',
    learnMore: 'Conoce más',
    features: {
      protection: {
        title: 'Protección Avanzada',
        description: 'Nuestras soluciones de seguridad protegen tu negocio contra las amenazas más sofisticadas.'
      },
      development: {
        title: 'Desarrollo Seguro',
        description: 'Creamos aplicaciones con seguridad integrada desde el diseño hasta la implementación.'
      },
      consulting: {
        title: 'Consultoría Especializada',
        description: 'Nuestro equipo de expertos te guiará en la implementación de las mejores prácticas de seguridad.'
      }
    }
  },
  about: {
    title: 'Sobre Goikode',
    mission: {
      title: 'Nuestra Misión',
      description: 'En Goikode, nuestra misión es ayudar a las empresas a crecer de forma segura en un mundo digital cada vez más complejo y lleno de amenazas.'
    },
    history: {
      title: 'Nuestra Historia',
      description: 'Fundada en 2015 por un grupo de expertos en seguridad informática, Goikode nació con la visión de democratizar el acceso a soluciones de ciberseguridad de alta calidad.'
    },
    team: {
      title: 'El Equipo',
      description: 'Nuestro equipo está formado por profesionales certificados con experiencia en entornos críticos. Nos caracteriza nuestro enfoque práctico y directo, evitando soluciones genéricas en favor de implementaciones precisas.'
    },
    funFact: {
      title: '¿Sabías que...?',
      description: 'El nombre "Goikode" viene de la combinación de "goiko" (que significa "superior" en euskera) y "code" (código en inglés). Aunque nuestro CEO insiste en que se le ocurrió mientras comía un pintxo de tortilla.'
    }
  },
  servicios: {
    title: 'Nuestros Servicios',
    intro: 'Protegemos, analizamos y guiamos tu empresa hacia un entorno digital seguro.',
    contactar: 'Contactar',
    pentesting: {
      title: 'Pentesting',
      description: 'Simulación de ataques reales para identificar y solucionar vulnerabilidades antes de que sean explotadas.'
    },
    desarrollo: {
      title: 'Desarrollo Seguro',
      description: 'Desarrollamos software con seguridad incorporada desde la fase de diseño hasta la implementación final.'
    },
    auditoria: {
      title: 'Auditorías de Seguridad',
      description: 'Evaluaciones técnicas exhaustivas para detectar debilidades en sistemas y redes empresariales.'
    },
    formacion: {
      title: 'Formación Técnica',
      description: 'Capacitación práctica para equipos técnicos y no técnicos en seguridad de la información.'
    },
    consultoria: {
      title: 'Consultoría Estratégica',
      description: 'Asesoría para mejorar tu postura de ciberseguridad y cumplimiento de normativas.'
    },
    monitoreo: {
      title: 'Monitorización 24/7',
      description: 'Vigilancia constante de tus sistemas para detectar y responder a incidentes en tiempo real.'
    }
  },
  contacto: {
    title: 'Contáctanos',
    description: 'Si tienes alguna pregunta o deseas trabajar con nosotros, no dudes en ponerte en contacto.',
    email: {
      title: 'Correo electrónico',
      value: 'contacto@goikode.com'
    },
    phone: {
      title: 'Teléfono',
      value: '+123 456 7890'
    },
    address: {
      title: 'Dirección',
      value: 'Calle de ejemplo'
    }
  },
  footer: {
    rights: 'Todos los derechos reservados.'
  },
  languageSelector: {
    label: 'Idioma'
  }
}

// Mensajes en inglés
const en = {
  nav: {
    home: 'Home',
    about: 'About Us',
    servicios: 'Services'
  },
  home: {
    welcome: 'Welcome to Goikode',
    tagline: 'Specialists in cybersecurity and secure development',
    learnMore: 'Learn more',
    features: {
      protection: {
        title: 'Advanced Protection',
        description: 'Our security solutions protect your business against the most sophisticated threats.'
      },
      development: {
        title: 'Secure Development',
        description: 'We create applications with security integrated from design to implementation.'
      },
      consulting: {
        title: 'Specialized Consulting',
        description: 'Our team of experts will guide you in implementing security best practices.'
      }
    }
  },
  about: {
    title: 'About Goikode',
    mission: {
      title: 'Our Mission',
      description: 'At Goikode, our mission is to help companies grow safely in an increasingly complex and threat-filled digital world.'
    },
    history: {
      title: 'Our History',
      description: 'Founded in 2015 by a group of cybersecurity experts, Goikode was born with the vision of democratizing access to high-quality cybersecurity solutions.'
    },
    team: {
      title: 'The Team',
      description: 'Our team consists of certified professionals with experience in critical environments. We are characterized by our practical and direct approach, avoiding generic solutions in favor of precise implementations.'
    },
    funFact: {
      title: 'Did you know...?',
      description: 'The name "Goikode" comes from the combination of "goiko" (which means "superior" in Basque) and "code" (in English). Although our CEO insists that it came to him while eating a Spanish omelette pintxo.'
    }
  },
  servicios: {
    title: 'Our Services',
    intro: 'We protect, analyze, and guide your company towards a secure digital environment.',
    contactar: 'Contact us',
    pentesting: {
      title: 'Pentesting',
      description: 'Real-world attack simulation to identify and fix vulnerabilities before attackers do.'
    },
    desarrollo: {
      title: 'Secure Development',
      description: 'We develop software with security integrated from the design phase to final deployment.'
    },
    auditoria: {
      title: 'Security Audits',
      description: 'Thorough technical evaluations to identify weaknesses in corporate systems and networks.'
    },
    formacion: {
      title: 'Technical Training',
      description: 'Hands-on training for both technical and non-technical teams in information security.'
    },
    consultoria: {
      title: 'Strategic Consulting',
      description: 'Expert advice to improve your cybersecurity posture and regulatory compliance.'
    },
    monitoreo: {
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your systems to detect and respond to incidents in real time.'
    }
  },
  contacto: {
    title: 'Contact Us',
    description: 'If you have any questions or want to work with us, feel free to get in touch.',
    email: {
      title: 'Email',
      value: 'contact@goikode.com'
    },
    phone: {
      title: 'Phone',
      value: '+123 456 7890'
    },
    address: {
      title: 'Address',
      value: 'Sample Street'
    }
  },  
  footer: {
    rights: 'All rights reserved.'
  },
  languageSelector: {
    label: 'Language'
  }
}

// Mensajes en euskera
const eu = {
  nav: {
    home: 'Hasiera',
    about: 'Guri Buruz',
    servicios: 'Zerbitzuak'
  },
  home: {
    welcome: 'Ongi etorri Goikode-ra',
    tagline: 'Zibersegurtasunean eta garapen seguruan espezialistak',
    learnMore: 'Gehiago jakin',
    features: {
      protection: {
        title: 'Babes Aurreratua',
        description: 'Gure segurtasun-irtenbideek zure negozioa mehatxu sofistikatuenetatik babesten dute.'
      },
      development: {
        title: 'Garapen Segurua',
        description: 'Diseinutik inplementaziora segurtasuna integratuta duten aplikazioak sortzen ditugu.'
      },
      consulting: {
        title: 'Aholkularitza Espezializatua',
        description: 'Gure adituen taldeak segurtasun-praktika onenak ezartzen lagunduko dizu.'
      }
    }
  },
  about: {
    title: 'Goikode-ri Buruz',
    mission: {
      title: 'Gure Misioa',
      description: 'Goikoden, gure misioa enpresak gero eta konplexuagoa eta mehatxuz betetako mundu digitalean seguru hazten laguntzea da.'
    },
    history: {
      title: 'Gure Historia',
      description: '2015ean zibersegurtasuneko aditu talde batek sortua, Goikode kalitate handiko zibersegurtasun-irtenbideetarako sarbidea demokratizatzeko ikuspegiarekin jaio zen.'
    },
    team: {
      title: 'Taldea',
      description: 'Gure taldea ingurune kritikoetan esperientzia duten profesional ziurtatuek osatzen dute. Gure ikuspegi praktiko eta zuzenak ezaugarritzen gaitu, soluzio generikoak saihestuz inplementazio zehatzen alde.'
    },
    funFact: {
      title: 'Ba al zenekien...?',
      description: '"Goikode" izena "goiko" (euskaraz "gorenekoa" esan nahi duena) eta "code" (ingelesez kodea) konbinaziotik dator. Nahiz eta gure CEOk dio tortilla pintxo bat jaten ari zela bururatu zitzaiola.'
    }
  },
  servicios: {
    title: 'Gure Zerbitzuak',
    intro: 'Zure enpresa ingurune digital seguru baterantz gidatzen dugu, babestuz eta aztertuz.',
    contactar: 'Kontaktatu',
    pentesting: {
      title: 'Pentesting',
      description: 'Benetako erasoen simulazioa, ahultasunak detektatu eta konpontzeko garaiz.'
    },
    desarrollo: {
      title: 'Garapen Segurua',
      description: 'Softwarea segurtasuna kontuan hartuta garatzen dugu hasieratik amaierara arte.'
    },
    auditoria: {
      title: 'Segurtasun Auditoria',
      description: 'Sistema eta sare korporatiboetan ahuleziak detektatzeko ebaluazio teknikoak.'
    },
    formacion: {
      title: 'Prestakuntza Teknikoa',
      description: 'Talde tekniko eta ez-teknikoentzako segurtasunari buruzko prestakuntza praktikoa.'
    },
    consultoria: {
      title: 'Aholkularitza Estrategikoa',
      description: 'Zibersegurtasunaren egoera hobetzeko eta araudia betetzeko orientazioa.'
    },
    monitoreo: {
      title: '24/7 Monitorizazioa',
      description: 'Zure sistemak etengabe gainbegiratzea, gertakariei unean bertan erantzuteko.'
    }
  },
  contacto: {
    title: 'Harremanetan jarri',
    description: 'Galderarik baduzu edo gurekin lan egin nahi baduzu, ez izan zalantzarik harremanetan jartzeko.',
    email: {
      title: 'Posta elektronikoa',
      value: 'contacto@goikode.com'
    },
    phone: {
      title: 'Telefonoa',
      value: '+123 456 7890'
    },
    address: {
      title: 'Helbidea',
      value: 'Adibide Kalea'
    }
  },  
  footer: {
    rights: 'Eskubide guztiak erreserbatuak.'
  },
  languageSelector: {
    label: 'Hizkuntza'
  }
}

// Determinar el idioma inicial
function getInitialLocale() {
  // Primero, intentar obtener el idioma guardado en localStorage
  const savedLocale = localStorage.getItem('userLocale')
  if (savedLocale && ['es', 'en', 'eu'].includes(savedLocale)) {
    return savedLocale
  }
  
  // Si no hay idioma guardado, intentar usar el idioma del navegador
  const browserLocale = navigator.language.split('-')[0]
  if (['es', 'en', 'eu'].includes(browserLocale)) {
    return browserLocale
  }
  
  // Por defecto, usar español
  return 'es'
}

// Crear instancia de i18n
const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: 'es',
  messages: {
    es,
    en,
    eu
  }
})

export default i18n