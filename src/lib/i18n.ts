export type Language = 'hy' | 'en' | 'ru';

export const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'hy', name: 'Armenian', nativeName: 'Հայերեն' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
];

export const defaultLanguage: Language = 'hy';

export const translations = {
  hy: {
    // Navigation
    nav: {
      home: 'Գլխավոր',
      about: 'Մեր մասին',
      services: 'Ծառայություններ',
      gallery: 'Պատկերասրահ',
      contact: 'Կապ',
    },
    // Hero Section
    hero: {
      title: 'Ճշգրիտ չափագրություն և կադաստրային ծառայություններ',
      subtitle: 'Ձեր հողատարածքների և գույքի ճշգրիտ չափագրում և գրանցում վստահության հիմքով',
      cta: 'Կապվել մեզ հետ',
      experience: '10+ տարվա փորձ',
    },
    // About Section
    about: {
      title: 'Մեր մասին',
      description: 'Մենք տարիներ շարունակ առաջարկում ենք բարձրորակ չափագրական և կադաստրային ծառայություններ՝ հիմնված ճշգրտության և վստահության վրա։ Մեր թիմը բաղկացած է փորձառու մասնագետներից, ովքեր օգտագործում են ամենաժամանակակից տեխնոլոգիաները:',
      values: {
        title: 'Մեր արժեքները',
        responsibility: 'Պատասխանատվություն',
        accuracy: 'Ճշգրտություն',
        trust: 'Վստահություն',
        innovation: 'Նորարարություն',
      }
    },
    // Services Section
    services: {
      title: 'Մեր ծառայությունները',
      subtitle: 'Առաջարկում ենք ամբողջական ծառայությունների բազմազանություն',
      surveying: {
        title: 'Հողատարածքների չափագրություն',
        description: 'Ձեր հողատարածքի ճշգրիտ չափում, սահմանների հստակեցում և փաստաթղթավորում'
      },
      cadastral: {
        title: 'Կադաստրային գործեր',
        description: 'Գույքի պետական գրանցում, կադաստրային քարտեզների պատրաստում և թարմացում'
      },
      legal: {
        title: 'Իրավական ծառայություններ',
        description: 'Գույքի իրավական ձևակերպում, փաստաթղթերի պատրաստում և բանակցություններ'
      },
      consulting: {
        title: 'Խորհրդատվություն',
        description: 'Մասնագիտական խորհրդատվություն չափագրական և կադաստրային հարցերում'
      }
    },
    // Gallery Section
    gallery: {
      title: 'Մեր աշխատանքից տեսարաններ',
      subtitle: 'Դիտեք մեր կատարած նախագծերի օրինակները',
    },
    // Contact Section
    contact: {
      title: 'Կապ մեզ հետ',
      subtitle: 'Պատրաստ ենք օգնել ձեր նախագծին',
      phone: 'Հեռախոս',
      email: 'Էլ. փոստ',
      address: 'Հասցե',
      callNow: 'Զանգահարել հիմա',
      sendMessage: 'Ուղարկել հաղորդագրություն',
      form: {
        name: 'Անուն',
        phone: 'Հեռախոս',
        email: 'Էլ. փոստ',
        message: 'Հաղորդագրություն',
        send: 'Ուղարկել',
        namePlaceholder: 'Ձեր անունը',
        phonePlaceholder: 'Ձեր հեռախոսահամարը',
        emailPlaceholder: 'Ձեր էլ. փոստը',
        messagePlaceholder: 'Ձեր հաղորդագրությունը...',
      }
    },
    // Footer
    footer: {
      company: 'GeoDraft',
      rights: 'Բոլոր իրավունքները պաշտպանված են',
      description: 'Մասնագիտական չափագրական և կադաստրային ծառայություններ',
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      title: 'Precise Surveying and Cadastral Services',
      subtitle: 'Accurate measurement and registration of your land and property based on trust and reliability',
      cta: 'Contact Us',
      experience: '10+ Years Experience',
    },
    // About Section
    about: {
      title: 'About Us',
      description: 'We have been providing high-quality surveying and cadastral services for years, based on precision and trust. Our team consists of experienced professionals who use the most modern technologies.',
      values: {
        title: 'Our Values',
        responsibility: 'Responsibility',
        accuracy: 'Accuracy',
        trust: 'Trust',
        innovation: 'Innovation',
      }
    },
    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'We offer a comprehensive range of services',
      surveying: {
        title: 'Land Surveying',
        description: 'Accurate measurement of your land, boundary clarification and documentation'
      },
      cadastral: {
        title: 'Cadastral Works',
        description: 'State registration of property, preparation and updating of cadastral maps'
      },
      legal: {
        title: 'Legal Services',
        description: 'Legal formalization of property, document preparation and negotiations'
      },
      consulting: {
        title: 'Consulting',
        description: 'Professional consulting in surveying and cadastral matters'
      }
    },
    // Gallery Section
    gallery: {
      title: 'Our Work in Action',
      subtitle: 'View examples of our completed projects',
    },
    // Contact Section
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to help with your project',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      callNow: 'Call Now',
      sendMessage: 'Send Message',
      form: {
        name: 'Name',
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
        send: 'Send',
        namePlaceholder: 'Your name',
        phonePlaceholder: 'Your phone number',
        emailPlaceholder: 'Your email',
        messagePlaceholder: 'Your message...',
      }
    },
    // Footer
    footer: {
      company: 'GeoDraft',
      rights: 'All rights reserved',
      description: 'Professional surveying and cadastral services',
    }
  },
  ru: {
    // Navigation
    nav: {
      home: 'Главная',
      about: 'О нас',
      services: 'Услуги',
      gallery: 'Галерея',
      contact: 'Контакты',
    },
    // Hero Section
    hero: {
      title: 'Точные геодезические и кадастровые услуги',
      subtitle: 'Точное измерение и регистрация вашей земли и недвижимости на основе доверия и надежности',
      cta: 'Связаться с нами',
      experience: '10+ лет опыта',
    },
    // About Section
    about: {
      title: 'О нас',
      description: 'Мы годами предоставляем высококачественные геодезические и кадастровые услуги, основанные на точности и доверии. Наша команда состоит из опытных специалистов, использующих самые современные технологии.',
      values: {
        title: 'Наши ценности',
        responsibility: 'Ответственность',
        accuracy: 'Точность',
        trust: 'Доверие',
        innovation: 'Инновации',
      }
    },
    // Services Section
    services: {
      title: 'Наши услуги',
      subtitle: 'Мы предлагаем комплексный спектр услуг',
      surveying: {
        title: 'Геодезическая съемка',
        description: 'Точное измерение вашей земли, уточнение границ и документооборот'
      },
      cadastral: {
        title: 'Кадастровые работы',
        description: 'Государственная регистрация недвижимости, подготовка и обновление кадастровых карт'
      },
      legal: {
        title: 'Юридические услуги',
        description: 'Юридическое оформление недвижимости, подготовка документов и переговоры'
      },
      consulting: {
        title: 'Консультации',
        description: 'Профессиональные консультации по геодезическим и кадастровым вопросам'
      }
    },
    // Gallery Section
    gallery: {
      title: 'Наша работа в действии',
      subtitle: 'Посмотрите примеры выполненных проектов',
    },
    // Contact Section
    contact: {
      title: 'Связаться с нами',
      subtitle: 'Мы готовы помочь с вашим проектом',
      phone: 'Телефон',
      email: 'Email',
      address: 'Адрес',
      callNow: 'Позвонить сейчас',
      sendMessage: 'Отправить сообщение',
      form: {
        name: 'Имя',
        phone: 'Телефон',
        email: 'Email',
        message: 'Сообщение',
        send: 'Отправить',
        namePlaceholder: 'Ваше имя',
        phonePlaceholder: 'Ваш телефон',
        emailPlaceholder: 'Ваш email',
        messagePlaceholder: 'Ваше сообщение...',
      }
    },
    // Footer
    footer: {
      company: 'GeoDraft',
      rights: 'Все права защищены',
      description: 'Профессиональные геодезические и кадастровые услуги',
    }
  }
}; 