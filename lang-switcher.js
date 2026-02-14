// lang-switcher.js
// Full-site translations (pl default). Keys match data-i18n attributes.
var translations = translations || {};
translations.pl = translations.pl || {};
translations.en = translations.en || {};
translations.it = translations.it || {};
translations.es = translations.es || {};
translations.ca = translations.ca || {};

(function(){
  const translations = {
    pl: {
      "meta.title": "Sistars",
      "header.parallaxTitle": "Witamy w Sistars!",
      "nav.offer": "Oferta",
      "nav.school": "Szkoła",
      "nav.news": "Projekty",
      "nav.about": "O nas",
      "nav.gallery": "Galeria",
      "nav.contact": "Kontakt",
      "main.h1": "Witamy w <span class=\"sis\">Sistars !</span>",
      "main.sub": "Centrum Edukacyjne prowadzone z pasją",
      "main.lead": "Jesteśmy rodzinnym Centrum Edukacyjnym — trzy siostry, które tworzą atmosferę \"jak w domu\". Współpracujemy z native speakerami z różnych krajów.",
      "main.readMore": "Czytaj więcej",
      "offer.header": "Co oferujemy?",
      "offer.sub2": "",
      "offer.list": "<i class=\"fa fa-arrow-right\"></i> Zajęcia grupowe do 5 osób!<br><i class=\"fa fa-arrow-right\"></i> Angielski i hiszpański<br><i class=\"fa fa-arrow-right\"></i> Zajęcia teatralne<br><i class=\"fa fa-arrow-right\"></i> Śpiew po angielsku i polsku<br><i class=\"fa fa-arrow-right\"></i> Joga po angielsku<br>",
      "offer.audience": "- dla przedszkolaków (od 1-5 lat)<br>- dla uczniów szkół podstawowych<br>- przygotowanie do egzaminu ósmoklasisty<br>- zajęcia dla licealistów<br>- przygotowanie do matury<br>- przygotowanie do egzaminów FCE/CAE<br>- zajęcia dla dorosłych i firm",
      "school.title": "Co wyróżnia naszą szkołę?",
      "school.feature1.title": "Wiedza",
      "school.feature1.text": "Wierzymy, że nauka to podróż na całe życie. Trzy z nas ukończyły studia filologiczne oraz studia podyplomowe, posiadamy również tytuły z filologii hiszpańskiej, studiów politycznych, edukacji muzycznej czy aktorstwa — cały czas się dokształcamy, by dawać najwyższy poziom nauczania.",
      "school.feature2.title": "Doświadczenie",
      "school.feature2.text": "Ponad dekada pracy w nauczaniu — zarówno w szkołach publicznych, jak i prywatnych. Przygotowujemy do egzaminów międzynarodowych i krajowych oraz stosujemy nowoczesne metody nauczania.",
      "school.feature3.title": "Atmosfera",
      "school.feature3.text": "Nasza szkoła działa w domu rodzinnym — dbamy o komfort, bezpieczeństwo oraz dobre relacje między nauczycielem a uczniem.",
      "news.header": "Nasze projekty",
      "news.drama.title": "Teatr / Drama",
      "news.drama.text": "Oferujemy \"dniowe obozy językowe\", podczas których uczymy angielskiego przez teatr. Dzieci tworzą własne scenariusze i prezentują występ na zakończenie.",
      "news.drama.details": "Koszt kursu: 160 Euro<br><br>Harmonogram:<br>lekcja 1: 8:30–10:00<br>lekcja 2: 10:15–11:30<br>lekcja 3: 11:45–13:00<br><br>Czas trwania: pon.–pt.<br><br>Terminy obozów: 26.06.2023–30.06.2023, 21.08.2023–25.08.2023, 04.09.2023–08.09.2023",
      "camp.full.title": "Obozy Full-Immersion",
      "camp.full.general.title": "Obóz Języka Angielskiego — Full Immersion",
      "camp.full.general.text": `🌟 Obóz Języka Angielskiego dla Dzieci i Młodzieży 🌟<br><br>
      Odkryj potencjał swojego dziecka podczas naszych dwutygodniowych obozów w języku angielskim. Obozy są przeznaczone dla uczniów szkół podstawowych i średnich, rozwijają umiejętności komunikacji i pewność siebie, a także kreatywność, współpracę i rozwiązywanie problemów. Po obozie dzieci wracają pełne motywacji i wiary w swoje umiejętności językowe.<br><br>
      📅 Terminy: 15–28 czerwca / 17–28 sierpnia<br>
      🕒 Plan dnia: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      👩‍🏫 Wspaniali nauczyciele i dynamiczni opiekunowie<br>
      🎉 Zabawy i inspirujące zajęcia: gry i zadania rozwijające kreatywność, współpracę i komunikację.<br>
      💰 Przystępna cena i dostępność — możliwość 50% zniżki dla rodzin potrzebujących.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,

      "camp.full.theatre.title": "Obóz: Angielski przez Teatr",
      "camp.full.theatre.text": `🌟 Obóz Języka Angielskiego: Angielski przez Teatr 🌟<br><br>
      Rozpal w dziecku pewność siebie i kreatywność dzięki naszym wyjątkowym obozom językowym! Dwutygodniowy program łączy naukę angielskiego z teatrem, rozwijając komunikację i ekspresję w ciekawy, interaktywny sposób. Na koniec obozu dzieci występują przed rodzicami.<br><br>
      📅 Terminy: 15–28 czerwca / 17–28 sierpnia<br>
      🕒 Plan dnia: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      👩‍🏫 Wyjątkowi nauczyciele i dynamiczni opiekunowie<br>
      🎭 Ciekawe zajęcia teatralne, praca zespołowa i kreatywne wyzwania.<br>
      💰 Możliwość 50% zniżki dla rodzin potrzebujących.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,

      "news.euroweek.title": "Euroweek",
      "news.euroweek.text": "Euroweek to Szkoła Liderów — uczestnicy spotykają wolontariuszy z całego świata, poprawiają angielski, umiejętności publicznego przemawiania oraz poznają tańce i kulturę innych krajów.",
      "news.salisbury.title": "Earth Camp w Salisbury",
      "news.salisbury.text": "Każdego lata rozwijamy warsztat nauczycielski podczas szkolenia w Salisbury w czasie międzynarodowego obozu — zapraszamy chętnych uczniów i opiekunów.",
      "parallax2.title": "Założone w 2017",
      "about.title": "Poznaj siostry",
      "about.daria.short": "\"Kobieta wielu talentów\", tancerka, solistka, skrzypaczka. Ukończyła studia: filologia angielska z terapią pedagogiczną oraz filologia hiszpańska.",
      "about.daria.more": "Brała udział w wolontariacie podczas EURO 2012, organizuje konkursy piosenki w szkołach, prowadzi kursy taneczne i warsztaty wokalne. Gra na skrzypcach i podróżuje w celu poszerzania doświadczeń.",
      "about.marta.short": "Kobieta z wizją, solistka, pianistka. Ukończyła filologię angielską z terapią pedagogiczną oraz filologię hiszpańską.",
      "about.marta.more": "W 2020 ukończyła filologię hiszpańską z specjalizacją pedagogiczną. Prowadziła zajęcia wokalne w Hiszpanii i realizowała wymiany studenckie.",
      "about.mirela.short": "Wiolonczelistka, solistka, poetka. Ukończyła studia na Middlesex University (International Relations, TESOL) oraz studia pedagogiczne.",
      "about.mirela.more": "Ukończyła kursy w Cambridge, szkołę aktorską Aktorstudio i prowadziła zajęcia dla różnych grup wiekowych w Polsce, Hiszpanii i Anglii.",
      "about.readMore": "Czytaj więcej",
      "gallery.title": "Galeria",
      "gallery.slide1": "Pokaz świąteczny",
      "gallery.slide2": "Obóz Euroweek",
      "contact.title": "Dane kontaktowe",
      "contact.phoneTitle": "Telefon",
      "contact.addressTitle": "Adres",
      "contact.socialTitle": "Media społecznościowe",
      "footer.follow": "Śledź nas na:",
      "footer.seeyou": "Do zobaczenia w",
      "footer.tagline": "Twoje Centrum Edukacyjne.",
  "nav.matura": "Last Call for Matura",
  "matura.title": "Last Call for Matura",
  "matura.desc": `🔔 LAST CALL FOR MATURA with SISTARS<br>
      Intensywny kurs premium – OSTATNI PROGRAM RATUNKOWY<br>
      PRZED MATURĄ<br>
      9 tygodni. 27h ONLINE w czasie rzeczywistym. Jeden cel: ZDANA MATURA.<br>
          <br>
      <strong>DLACZEGO TO JEST KURS PREMIUM?</strong><br>
      Pracujemy na Twój sukces podczas 9 spotkań (27h) ONLINE w czasie rzeczywistym.<br>
          W trakcie kursu otrzymujesz:<br>
          🔥 regularne zadania do pracy własnej<br>
          🔥 codzienne wsparcie motywacyjne i emocjonalne<br>
          🔥 kontrolę systematyczności<br>
          🔥 realną pracę pod zadania maturalne<br>
          Dostajesz dostęp do zamkniętej grupy na Telegramie, gdzie:<br>
          ● codziennie raportujesz wykonane zadania<br>
          ● dostajesz motywację i przypomnienia<br>
          ● nie jesteś sam z nauką<br>
          <br>
          <strong>DLA KOGO JEST TEN KURS?</strong><br>
          Dla osób, które:<br>
          ✔ są na ostatniej prostej przed maturą<br>
          ✔ czują, że same nie dowiozą systematyczności<br>
          ✔ potrzebują konkretnego planu + motywacyjnego kopniaka<br>
          ✔ chcą zdać maturę podstawową, a nie „liczyć na szczęście”<br>
          <br>
          <strong>JAK WYGLĄDA KURS?</strong><br>
          📅 SPOTKANIA W SOBOTY (ONLINE)<br>
          <br>
          Spotkanie zapoznawcze<br>
          06.03.2026 — 1 godzina<br>
          Ustalamy zasady, plan działania i sposób pracy<br>
          9 spotkań intensywnych (po 3 godziny):<br>
          07.03 • 14.03 • 21.03 • 28.03<br>
          04.04 • 11.04 • 18.04 • 25.04 • 02.05<br>
          <br>
          ⏰ STRUKTURA ZAJĘĆ<br>
          Każde spotkanie to 3 intensywne bloki po 60 minut:<br>
          ● 8:00–9:00<br>
          ● 9:10–10:10<br>
          ● 10:20–11:20<br>
          <br>
          Między blokami — krótkie przerwy, zero nudy, maksimum skupienia.<br>
          <br>
          🎯 CEL JEST JEDEN<br>
          Zdana matura podstawowa z języka angielskiego.<br>
          - bez chaosu<br>
          - bez odkładania na jutro<br>
          - z jasnym planem i realnym wsparciem<br>
          <br>
          Inwestycja w program: 3 997 zł lub 3 dogodne raty` 
    },
    
    en: {
      "meta.title": "Sistars",
      "header.parallaxTitle": "Welcome to Sistars!",
      "nav.offer": "Offer",
      "nav.school": "School",
      "nav.news": "Projects",
      "nav.about": "About",
      "nav.gallery": "Gallery",
      "nav.contact": "Contact",
      "main.h1": "Welcome to <span class=\"sis\">Sistars !</span>",
      "main.sub": "The Educational Centre run with passion",
      "main.lead": "We are a family-run Educational Centre — three sisters creating a homely atmosphere for students. We work with native speakers from different countries.",
      "main.readMore": "Read More",
      "offer.header": "What do we offer?",
      "offer.sub2": "",
      "offer.list": "<i class=\"fa fa-arrow-right\"></i> Group lessons up to 5 people!<br><i class=\"fa fa-arrow-right\"></i> English and Spanish<br><i class=\"fa fa-arrow-right\"></i> Drama Lessons<br><i class=\"fa fa-arrow-right\"></i> Singing in English and Polish<br><i class=\"fa fa-arrow-right\"></i> Yoga in English<br>",
      "offer.audience": "- for preschoolers (from age 1-5)<br>- and primary schoolers<br>- primary school final English exam preparation<br>- lessons for highschoolers<br>- Matura exam preparation<br>- FCE/CAE exams preparation<br>- for adults and companies",
      "school.title": "What makes our school special?",
      "school.feature1.title": "Knowledge",
      "school.feature1.text": "We believe learning is a life-long journey. Three of us hold MA degrees in English Philology and PGCE; we also hold BA degrees in Spanish Philology, political studies, music education and acting, and we keep learning through courses.",
      "school.feature2.title": "Experience",
      "school.feature2.text": "Over a decade of teaching experience in Poland and abroad — preparing students for national and international exams and using modern methods of teaching.",
      "school.feature3.title": "Atmosphere",
      "school.feature3.text": "Our school is based in our family home and we prioritise students' comfort and wellbeing.",
      "news.header": "Our projects",
      "news.drama.title": "Drama",
      "news.drama.text": "We offer daily English camps where we teach English through theatre. Children create scripts and perform at the end of the course.",
      "news.drama.details": "Course cost: 160 Euros<br><br>Schedule:<br>first lesson: 8:30–10:00<br>second lesson: 10:15–11:30<br>third lesson: 11:45–13:00<br><br>Duration: Mon–Fri<br><br>Camp dates: 26.06.2023–30.06.2023, 21.08.2023–25.08.2023, 04.09.2023–08.09.2023",
      "news.euroweek.title": "Euroweek",
      "news.euroweek.text": "Euroweek is a School of Leaders where participants meet volunteers worldwide, improve English and public speaking, and learn cultural dances and traditions.",
      "news.salisbury.title": "Earth Camp in Salisbury",
      "news.salisbury.text": "Every year we enhance our teaching skills during teacher training in Salisbury at a summer camp — students and guardians are welcome to join.",
      "parallax2.title": "Established in 2017",
      "about.title": "Meet the sisters",
      "about.daria.short": "\"A woman of many talents\", dancer, soloist, violinist. She completed BA studies in English Philology with Pedagogical Therapy and BA in Spanish Philology.",
      "about.daria.more": "She volunteered at EURO 2012, organises song contests, leads dance courses and participates in vocal workshops across Poland. She plays violin and travels often to English-speaking countries.",
      "about.marta.short": "A woman with a vision, soloist, pianist. She completed BA studies in English Philology with Pedagogical Therapy and Spanish Philology.",
      "about.marta.more": "In 2020 she finished Spanish Philology with teaching specialization and led vocal classes in Andalusia, Spain. She organises competitions and enjoys interior design.",
      "about.mirela.short": "Cellist, soloist, poet. She completed BA in International Relations (Middlesex University) and MSc in TESOL (Middlesex University) and pedagogical studies.",
      "about.mirela.more": "She completed courses at Cambridge, graduated from Aktorstudio in Warsaw and led vocal/theatre courses in Spain and England.",
      "about.readMore": "Read more",
      "gallery.title": "Gallery",
      "gallery.slide1": "Christmas Show",
      "gallery.slide2": "Euro Week Camp",
      "contact.title": "Contact info",
      "contact.phoneTitle": "Phone",
      "contact.addressTitle": "Address",
      "contact.socialTitle": "Social media",
      "footer.follow": "For more news follow us on",
      "footer.seeyou": "See you soon at",
      "footer.tagline": "Your Educational Centre.",
      "camp.full.title": "Full Immersion English Camps",
  "nav.matura": "Last Call for Matura",
  "matura.title": "Last Call for Matura",
      "matura.desc": "An intensive English course for high school graduates – the final chance to revise key material, practise speaking and boost confidence before the Matura exam."
    },
    it: {
      "meta.title": "Sistars",
      "header.parallaxTitle": "Benvenuti a Sistars!",
      "nav.offer": "Offerta",
      "nav.school": "Scuola",
      "nav.news": "Progetti",
      "nav.about": "Chi siamo",
      "nav.gallery": "Galleria",
      "nav.contact": "Contatto",
      "main.h1": "Benvenuti a <span class=\"sis\">Sistars !</span>",
      "main.sub": "Centro educativo gestito con passione",
      "main.lead": "Siamo un centro educativo a gestione familiare — tre sorelle che creano un'atmosfera accogliente. Collaboriamo con madrelingua di diversi paesi.",
      "main.readMore": "Leggi di più",
      "offer.header": "Cosa offriamo?",
      "offer.sub2": "",
      "offer.list": "<i class=\"fa fa-arrow-right\"></i> Lezioni di gruppo fino a 5 persone!<br><i class=\"fa fa-arrow-right\"></i> Inglese e Spagnolo<br><i class=\"fa fa-arrow-right\"></i> Lezioni di teatro<br><i class=\"fa fa-arrow-right\"></i> Canto in inglese e polacco<br><i class=\"fa fa-arrow-right\"></i> Yoga in inglese<br>",
      "offer.audience": "- per i più piccoli (da 1 a 5 anni)<br>- e per le scuole primarie<br>- preparazione all'esame finale della scuola primaria<br>- lezioni per liceali<br>- preparazione alla Matura<br>- preparazione agli esami FCE/CAE<br>- per adulti e aziende",
      "school.title": "Cosa rende speciale la nostra scuola?",
      "school.feature1.title": "Conoscenza",
      "school.feature1.text": "Crediamo che l'apprendimento sia un viaggio per tutta la vita. Tre di noi hanno conseguito lauree e specializzazioni in filologia e continuiamo a formarci per offrire il miglior insegnamento.",
      "school.feature2.title": "Esperienza",
      "school.feature2.text": "Oltre un decennio di esperienza nell'insegnamento, in Polonia e all'estero, preparando studenti a esami nazionali e internazionali.",
      "school.feature3.title": "Atmosfera",
      "school.feature3.text": "La nostra scuola si trova nella casa di famiglia — curiamo il comfort e il benessere degli studenti.",
      "news.header": "I nostri progetti",
      "news.drama.title": "Drama",
      "news.drama.text": "Offriamo campi giornalieri in inglese dove insegniamo attraverso il teatro. I bambini creano copioni e si esibiscono alla fine.",
      "news.drama.details": "Costo del corso: 160 Euro<br><br>Orario:<br>lezione 1: 8:30–10:00<br>lezione 2: 10:15–11:30<br>lezione 3: 11:45–13:00<br><br>Durata: Lun–Ven<br><br>Date: 26.06.2023–30.06.2023, 21.08.2023–25.08.2023, 04.09.2023–08.09.2023",
      "camp.full.title": "Campi di Inglese Full Immersion",
      "camp.full.general.title": "Campo di Inglese — Full Immersion",
      "camp.full.general.text": `🌟 Campi di Inglese Full Immersion per Bambini e Ragazzi 🌟<br><br>
      Sblocca il potenziale del tuo bambino con i nostri campi full immersion di due settimane...<br><br>
      📅 Date: 15–28 giugno / 17–28 agosto<br>
      🕒 Orario giornaliero: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      👩‍🏫 Insegnanti qualificati e tutor dinamici.<br>
      🎉 Attività creative e stimolanti.<br>
      💰 Possibilità di sconto 50% per famiglie bisognose.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,

      "camp.full.theatre.title": "Campo: Inglese attraverso il Teatro",
      "camp.full.theatre.text": `🌟 Campo di Inglese Full Immersion: Teatro 🌟<br><br>
      Un programma che unisce lingua e teatro con spettacolo finale davanti ai genitori.<br><br>
      📅 Date: 15–28 giugno / 17–28 agosto<br>
      🕒 Orario: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      👩‍🏫 Educatori creativi.<br>
      🎭 Attività teatrali, scrittura e recitazione.<br>
      💰 Posti a metà prezzo per famiglie che ne hanno bisogno.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,

      "news.euroweek.title": "Euroweek",
      "news.euroweek.text": "Euroweek è una Scuola di Leader — partecipanti incontrano volontari internazionali, migliorano l'inglese e imparano danze e tradizioni culturali.",
      "news.salisbury.title": "Earth Camp a Salisbury",
      "news.salisbury.text": "Ogni estate miglioriamo le competenze dell'insegnamento con training a Salisbury durante il campo estivo — studenti e accompagnatori sono i benvenuti.",
      "parallax2.title": "Fondato nel 2017",
      "about.title": "Incontra le sorelle",
      "about.daria.short": "\"Una donna dai molti talenti\", ballerina, solista, violinista. Ha completato studi in filologia inglese con terapia pedagogica e filologia spagnola.",
      "about.daria.more": "Ha fatto volontariato durante EURO 2012, organizza concorsi canori, tiene corsi di danza e workshop vocali in Polonia. Suona il violino e viaggia spesso.",
      "about.marta.short": "Donna con una visione, solista, pianista.",
      "about.marta.more": "Nel 2020 ha conseguito filologia spagnola con specializzazione e ha condotto corsi vocali in Andalusia.",
      "about.mirela.short": "Violoncellista, solista, poetessa. Laureata in International Relations e TESOL.",
      "about.mirela.more": "Ha seguito corsi a Cambridge, si è diplomata ad Aktorstudio a Varsavia e ha condotto corsi in Spagna e Inghilterra.",
      "about.readMore": "Leggi di più",
      "gallery.title": "Galleria",
      "gallery.slide1": "Spettacolo di Natale",
      "gallery.slide2": "Campo Euroweek",
      "contact.title": "Contatti",
      "contact.phoneTitle": "Telefono",
      "contact.addressTitle": "Indirizzo",
      "contact.socialTitle": "Social media",
      "footer.follow": "Per altre notizie seguiteci su",
      "footer.seeyou": "Ci vediamo a",
      "footer.tagline": "Il vostro Centro Educativo.",
  "nav.matura": "Last Call for Matura",
  "matura.title": "Last Call for Matura",
      "matura.desc": "Corso intensivo di inglese per studenti maturandi – l’ultima occasione per ripassare, esercitarsi e affrontare l’esame di maturità con sicurezza."
    },
    es: {
      "meta.title": "Sistars",
      "header.parallaxTitle": "¡Bienvenidos a Sistars!",
      "nav.offer": "Oferta",
      "nav.school": "Escuela",
      "nav.news": "Proyectos",
      "nav.about": "Sobre nosotros",
      "nav.gallery": "Galería",
      "nav.contact": "Contacto",
      "main.h1": "¡Bienvenidos a <span class=\"sis\">Sistars !</span>",
      "main.sub": "Centro educativo dirigido con pasión",
      "main.lead": "Somos un centro educativo familiar — tres hermanas que crean un ambiente acogedor. Colaboramos con hablantes nativos de distintos países.",
      "main.readMore": "Leer más",
      "offer.header": "¿Qué ofrecemos?",
      "offer.sub2": "",
      "offer.list": "<i class=\"fa fa-arrow-right\"></i> Clases grupales hasta 5 personas!<br><i class=\"fa fa-arrow-right\"></i> Inglés y español<br><i class=\"fa fa-arrow-right\"></i> Clases de teatro<br><i class=\"fa fa-arrow-right\"></i> Canto en inglés y polaco<br><i class=\"fa fa-arrow-right\"></i> Yoga en inglés<br>",
      "offer.audience": "- para preescolares (de 1-5 años)<br>- y alumnos de primaria<br>- preparación para examen final de primaria<br>- clases para secundaria<br>- preparación para la Matura<br>- preparación para FCE/CAE<br>- para adultos y empresas",
      "school.title": "¿Qué hace especial a nuestra escuela?",
      "school.feature1.title": "Conocimiento",
      "school.feature1.text": "Creemos que el aprendizaje es un viaje para toda la vida. Tres de nosotras tenemos títulos en filología y continuamos formándonos para ofrecer enseñanza de calidad.",
      "school.feature2.title": "Experiencia",
      "school.feature2.text": "Más de una década enseñando en Polonia y en el extranjero; preparamos para exámenes nacionales e internacionales y usamos métodos modernos.",
      "school.feature3.title": "Ambiente",
      "school.feature3.text": "Nuestra escuela está en casa de la familia — cuidamos el confort y el bienestar del estudiante.",
      "news.header": "Nuestros proyectos",
      "news.drama.title": "Drama",
      "news.drama.text": "Ofrecemos campamentos diarios en inglés donde enseñamos a través del teatro. Los niños crean guiones y actúan al final del curso.",
      "news.drama.details": "Precio: 160 Euros<br><br>Horario:<br>1ª clase: 8:30–10:00<br>2ª clase: 10:15–11:30<br>3ª clase: 11:45–13:00<br><br>Duración: Lun–Vie<br><br>Fechas: 26.06.2023–30.06.2023, 21.08.2023–25.08.2023, 04.09.2023–08.09.2023",
      "camp.full.title": "Campamentos de Inmersión Total en Inglés",
      "camp.full.general.title": "Campamento de Inglés — Inmersión Total",
      "camp.full.general.text": `🌟 Campamentos de Inmersión Total en Inglés para Niños y Jóvenes 🌟<br><br>
      Desbloquea el potencial de tu hijo con nuestros campamentos intensivos de dos semanas...<br><br>
      📅 Fechas: 15–28 junio / 17–28 agosto<br>
      🕒 Horario: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      👩‍🏫 Profesores dinámicos y cualificados.<br>
      🎉 Actividades divertidas e inspiradoras.<br>
      💰 Plazas a mitad de precio para familias necesitadas.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,

      "camp.full.theatre.title": "Campamento: Inglés a través del Teatro",
      "camp.full.theatre.text": `🌟 Campamento de Inmersión Total: Teatro 🌟<br><br>
      Teatro + inglés = confianza y creatividad. Presentación final para los padres.<br><br>
      📅 Fechas: 15–28 junio / 17–28 agosto<br>
      🕒 Horario: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      🎭 Actividades creativas y juegos lingüísticos.<br>
      💰 Descuentos del 50% disponibles.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,

      "news.euroweek.title": "Euroweek",
      "news.euroweek.text": "Euroweek es una Escuela de Líderes donde los participantes conocen voluntarios internacionales, mejoran inglés y oratoria y aprenden danzas y culturas.",
      "news.salisbury.title": "Earth Camp en Salisbury",
      "news.salisbury.text": "Cada verano mejoramos nuestras habilidades docentes con formación en Salisbury durante el campamento de verano — alumnos y acompañantes pueden participar.",
      "parallax2.title": "Fundado en 2017",
      "about.title": "Conoce a las hermanas",
      "about.daria.short": "\"Una mujer de muchos talentos\", bailarina, solista, violinista. Ha completado estudios en filología inglesa y filología española.",
      "about.daria.more": "Participó como voluntaria en EURO 2012, organiza concursos de canciones, imparte cursos de baile y talleres vocales en Polonia. Toca el violín y viaja con frecuencia.",
      "about.marta.short": "Mujer con visión, solista, pianista.",
      "about.marta.more": "En 2020 finalizó filología española con especialización docente y dirigió clases vocales en Andalucía.",
      "about.mirela.short": "Violonchelista, solista, poeta. Titulada en International Relations y TESOL.",
      "about.mirela.more": "Ha cursado estudios en Cambridge, se graduó en Aktorstudio en Varsovia y ha impartido cursos en España e Inglaterra.",
      "about.readMore": "Leer más",
      "gallery.title": "Galería",
      "gallery.slide1": "Espectáculo de Navidad",
      "gallery.slide2": "Campamento Euroweek",
      "contact.title": "Información de contacto",
      "contact.phoneTitle": "Teléfono",
      "contact.addressTitle": "Dirección",
      "contact.socialTitle": "Redes sociales",
      "footer.follow": "Para más noticias síguenos en",
      "footer.seeyou": "Te esperamos en",
      "footer.tagline": "Tu Centro Educativo.",
      "camp.full.title": "Campamentos de Inmersión Total en Inglés",
  "nav.matura": "Last Call for Matura",
  "matura.title": "Last Call for Matura",
      "matura.desc": "Curso intensivo de inglés para estudiantes que se preparan para la Matura – la última oportunidad para repasar y ganar confianza antes del examen."
    },
    ca: {
        "meta.title": "Sistars",
        "header.parallaxTitle": "Benvinguts a Sistars!",
        "nav.offer": "Oferta",
        "nav.school": "Escola",
        "nav.news": "Projectes",
        "nav.about": "Sobre nosaltres",
        "nav.gallery": "Galeria",
        "nav.contact": "Contacte",
        "main.h1": "Benvinguts a <span class=\"sis\">Sistars !</span>",
        "main.sub": "Centre educatiu dirigit amb passió",
        "main.lead": "Som un centre educatiu familiar — tres germanes que creen un ambient acollidor i proper. Treballem amb professors nadius de diferents països.",
        "main.readMore": "Llegeix més",
        "offer.header": "Què oferim?",
        "offer.sub2": "",
        "offer.list": "<i class=\"fa fa-arrow-right\"></i> Classes en grup de fins a 5 alumnes!<br><i class=\"fa fa-arrow-right\"></i> Anglès i Espanyol<br><i class=\"fa fa-arrow-right\"></i> Classes de teatre<br><i class=\"fa fa-arrow-right\"></i> Cants en anglès i polonès<br><i class=\"fa fa-arrow-right\"></i> Ioga en anglès<br>",
        "offer.audience": "- per a infants (1–5 anys)<br>- per a alumnes de primària<br>- preparació per a exàmens finals<br>- classes per a secundària<br>- preparació per al batxillerat<br>- preparació per a exàmens FCE/CAE<br>- per a adults i empreses",
        "school.title": "Què fa especial la nostra escola?",
        "school.feature1.title": "Coneixement",
        "school.feature1.text": "Creiem que aprendre és un viatge per a tota la vida. Les tres germanes tenim estudis en filologia i educació, i continuem formant-nos per oferir l’ensenyament de més qualitat.",
        "school.feature2.title": "Experiència",
        "school.feature2.text": "Més de deu anys d’experiència docent, tant a Polònia com a l’estranger. Preparem per a exàmens internacionals i utilitzem mètodes moderns i actius.",
        "school.feature3.title": "Ambient",
        "school.feature3.text": "La nostra escola està situada a la nostra casa familiar — un espai segur, càlid i amb atenció personalitzada.",
        "news.header": "Els nostres projectes",
        "news.drama.title": "Teatre / Drama",
        "news.drama.text": "Oferim campaments d’anglès d’un dia on ensenyem la llengua a través del teatre. Els nens escriuen els seus propis guions i actuen al final del curs.",
        "news.drama.details": "Preu: 160 euros<br><br>Horari:<br>1a classe: 8:30–10:00<br>2a classe: 10:15–11:30<br>3a classe: 11:45–13:00<br><br>Durada: Dilluns–Divendres<br><br>Dates: 26.06.2023–30.06.2023, 21.08.2023–25.08.2023, 04.09.2023–08.09.2023",
        "news.euroweek.title": "Euroweek",
        "news.euroweek.text": "Euroweek és una Escola de Líders — els participants coneixen voluntaris d’arreu del món, milloren el seu anglès, practiquen parlar en públic i aprenen danses i cultures.",
        "news.salisbury.title": "Earth Camp a Salisbury",
        "news.salisbury.text": "Cada estiu millorem les nostres habilitats pedagògiques participant en formacions a Salisbury — estudiants i acompanyants són benvinguts.",
        "parallax2.title": "Fundat el 2017",
        "about.title": "Coneix les germanes",
        "about.daria.short": "\"Dona de molts talents\", ballarina, violinista i professora. Ha estudiat Filologia Anglesa amb Teràpia Pedagògica i Filologia Espanyola.",
        "about.daria.more": "Ha participat com a voluntària a l’EURO 2012, organitza concursos de cançons, dirigeix cursos de dansa i tallers vocals. Toca el violí i viatja sovint per aprendre i ensenyar.",
        "about.marta.short": "Dona amb visió, pianista i professora.",
        "about.marta.more": "Llicenciada en Filologia Espanyola amb especialització docent, ha impartit classes vocals a Andalusia i promou projectes culturals.",
        "about.mirela.short": "Violoncel·lista, poeta i professora. Graduada en Relacions Internacionals i TESOL a la Middlesex University.",
        "about.mirela.more": "Ha cursat estudis a Cambridge i Aktorstudio (Varsòvia) i ha ensenyat a Espanya i Anglaterra.",
        "about.readMore": "Llegeix més",
        "gallery.title": "Galeria",
        "gallery.slide1": "Espectacle de Nadal",
        "gallery.slide2": "Campament Euroweek",
        "contact.title": "Contacte",
        "contact.phoneTitle": "Telèfon",
        "contact.addressTitle": "Adreça",
        "contact.socialTitle": "Xarxes socials",
        "footer.follow": "Segueix-nos a:",
        "footer.seeyou": "Ens veiem a",
        "footer.tagline": "El teu centre educatiu.",
        "camp.full.title": "Campaments d’Immersió Total en Anglès",
        "camp.full.general.title": "Campament d’Anglès — Immersió Total",
        "camp.full.general.text": `🌟 Campaments d’Immersió Total en Anglès per a Nens i Joves 🌟<br><br>
      Descobreix el potencial del teu fill amb els nostres campaments de dues setmanes d’immersió completa. Pensats per a estudiants de primària i secundària, milloren la comunicació, la creativitat, el treball en equip i la confiança.<br><br>
      📅 Dates: 15–28 juny / 17–28 agost<br>
      🕒 Horari: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      👩‍🏫 Professors dinàmics i qualificats.<br>
      🎉 Activitats lúdiques i creatives per aprendre mentre es diverteixen.<br>
      💰 Places al 50% per a famílies que ho necessitin.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,
      
        "camp.full.theatre.title": "Campament: Anglès a través del Teatre",
        "camp.full.theatre.text": `🌟 Campament d’Anglès: Aprèn a través del Teatre 🌟<br><br>
      Una experiència única on els alumnes aprenen anglès creant i interpretant la seva pròpia obra. Treball en equip, expressió oral i confiança!<br><br>
      📅 Dates: 15–28 juny / 17–28 agost<br>
      🕒 Horari: 8:30–10:30 | 10:15–11:30 | 11:45–13:00<br>
      🎭 Activitats teatrals, jocs lingüístics i representació final.<br>
      💰 Places al 50% per a famílies que ho necessitin.<br><br>
      📧 kidsandstars.camps@gmail.com<br>
      📱 WhatsApp: +48 668 234 331`,
  "nav.matura": "Last Call for Matura",
  "matura.title": "Last Call for Matura",
      "matura.desc": "Curs intensiu d’anglès per a estudiants de batxillerat – l’última oportunitat per repassar, practicar i afrontar la Matura amb confiança."

    }
  };
  

  // Utilities
  function getSavedLang(){
    return localStorage.getItem('siteLang') || null;
  }
  function saveLang(lang){
    localStorage.setItem('siteLang', lang);
  }

  function detectBrowserLang(){
    const nav = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage];
    for (let n of nav) {
      if (!n) continue;
      const prefix = n.slice(0,2).toLowerCase();
      if (['pl','en','it','es'].includes(prefix)) return prefix;
    }
    return 'pl';
  }

  function applyTranslations(lang){
    if (!translations[lang]) lang = 'pl';
    document.documentElement.lang = lang;
    const metaTitle = translations[lang]['meta.title'];
    if (metaTitle) document.title = metaTitle;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = translations[lang][key];
      if (typeof text === 'undefined') return;
      el.innerHTML = text;
    });
  }

  // Set language programmatically (for dropdown & persistence)
  window.setLanguage = function(lang){
    applyTranslations(lang);
    saveLang(lang);
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = lang;
  };

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    const saved = getSavedLang();
    const initial = saved || detectBrowserLang() || 'pl';
    applyTranslations(initial);

    // --- handle dropdown selection ---
    const selector = document.getElementById('languageSelect');
    if (selector) {
      selector.value = initial;
      selector.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
      });
    }
  });
})();

