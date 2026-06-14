import { useState } from "react";
import logo from "./assets/logo.png";
import { useEffect, useRef } from "react";
import {
  IconArrowRight,
  IconBrain,
  IconBrandPython,
  IconCalendarEvent,
  IconChartBar,
  IconChevronDown,
  IconClipboardList,
  IconClockHour4,
  IconCompass,
  IconDatabase,
  IconDna2,
  IconFlag,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPresentation,
  IconSchool,
  IconShield,
  IconStar,
  IconTargetArrow,
  IconTrophy,
  IconUsersGroup,
  IconUserStar,
} from "@tabler/icons-react";
import heroGifVideo from "./assets/gif.MP4";
import RegistrationModal from "./RegistrationForm";
import "./App.css";

const navItems = [
  { id: "about", label: "О хакатоне" },
  { id: "projects", label: "Проекты" },
  { id: "terms", label: "Условия проведения" },
  { id: "venue", label: "Место проведения" },
  { id: "contacts", label: "Контактная информация" },
];

const organizerPartners = [
  {
    name: "Факультет искусственного интеллекта РУДН",
    text: "Факультет искусственного интеллекта РУДН",
    image: "/partners/rudn-ai-faculty.png",
  },
  {
    name: "АСКА",
    text: "Association for Single Cell Analysis",
    image: "/partners/org/ASCA_black .png",
  },
  {
    name: "biomedhub / RUDN",
    text: "biomedhub / RUDN",
    image: "/partners/org/biomed_hub.png",
  },
];

const chips = [
  "Биоинформатика",
  "Данные единичных клеток",
  "AI и ML",
  "Прецизионная медицина",
];

const projects = [
  {
    number: "1",
    title: "Предсказание мишеней для терапии редких агрессивных заболеваний",
    leader: "Александр Иконников, РУДН",
    goalShort:
      "Выявление и валидация новых молекулярных мишеней для терапии редких агрессивных заболеваний.",
    image: "/partners/project/tema_1.png",
    goal:
      "Выявление и валидация новых молекулярных мишеней для терапии редких агрессивных заболеваний.",
    tasks:
      "Участникам предстоит проанализировать биомедицинские данные, выделить потенциальные терапевтические мишени и подготовить обоснование выбранного подхода.",
    results:
      "Список приоритетных мишеней, краткая аналитическая интерпретация и прототип решения для дальнейшей валидации.",
  },
  {
    number: "2",
    title: "Разработка новых алгоритмов персонализации терапии сарком мягких тканей",
    leader: "Артем Торопов, РУДН",
    goalShort:
      "Разработка и анализ подходов на основе ML и ИИ для персонализации терапии сарком мягких тканей.",
    image: "/partners/project/tema_2.png",
    goal:
      "Разработка и анализ подходов на основе машинного обучения и искусственного интеллекта для персонализации терапии сарком мягких тканей (СМТ) с использованием данных транскриптомики единичных клеток (scRNA-seq).",
    description:
      "Саркомы мягких тканей характеризуются выраженной меж- и внутрипухолевой гетерогенностью, что существенно усложняет выбор эффективной терапии. Современные ML-инструменты (например, модели, подобные scTherapy) позволяют предсказывать чувствительность опухолевых клеток к лекарственным препаратам на основе транскриптомных профилей. Однако для редких опухолей, таких как СМТ, обучающие данные ограничены, а обобщающая способность моделей остается недостаточно изученной.",
    tasks: [
      "проанализировать scRNA-seq данные, охватывающие различные подтипы СМТ;",
      "применить и/или доработать существующие ML-модели для предсказания лекарственной чувствительности;",
      "сравнить предсказанные профили ответа на терапию между подтипами опухолей;",
      "выявить ограничения существующих подходов и предложить улучшения моделей.",
    ],
    results: [
      "прототип ML/AI-пайплайна для предсказания терапии;",
      "сравнительный анализ чувствительности между подтипами СМТ;",
      "предложения по повышению точности и клинической применимости моделей.",
    ],
  },
  {
    number: "3",
    title: "Поиск прогностических факторов рака в молодом возрасте",
    leader: "Павел Ямщиков, Томский НИМЦ",
    goalShort:
      "Поиск и валидация прогностических факторов рака в молодом возрасте на основе интеграции пространственной, одноклеточной и тотальной транскриптомики.",
    image: "/partners/project/tema_3.png",
    goal:
      "Провести поиск прогностических факторов рака в молодом возрасте для больных раком полости рта на основе данных пространственной, одноклеточной и тотальной транскриптомики.",
    description: [
      "За последние десятилетия наблюдается рост заболеваемости раком, диагностированном в возрасте до 50 лет, именуемый молодым, так как около 2/3 случаев приходится на возрастную группу >60 лет. Рак в молодом возрасте, для ряда локализаций, имеет значительные отличия в клинико-патологических характеристиках. Одной из таких локализаций является рак полости рта (РПР), отличающийся в молодом возрасте более агрессивным течением и большей частотой рецидивов.",
      "Специфические молекулярно-генетические изменения в РПР молодого возраста вероятно определяют худший прогноз заболевания. В связи с чем стандартные маркеры прогноза зачастую хуже оценивают выживаемость больных РПР молодого возраста. В клинических отделениях НИИ онкологии Томского НИМЦ существует потребность в новых прогностических маркерах, которые позволят точнее стратифицировать пациентов, оптимизировать тактику лечения и в конечном итоге улучшить показатели выживаемости.",
    ],
    tasks:
      "Участникам предстоит работа с транскриптомом РПР молодого возраста в трех модальностях: пространственная, одноклеточная и тотальная. Пространственная и одноклеточная транскриптомика представлена собственными данными. Пространственная транскриптомика 10x Genomics Visium FFPE включает 10 образцов: 4 из группы с прогрессией и 6 из группы без прогрессии. Транскриптомика единичных клеток SeekGene Full-length включает один образец, парный к данным Visium, что позволит наиболее точно провести анализ клеточной деконволюции. В качестве тотального транскриптома будут взяты публичные данные TCGA/GEO с подробной клинической информацией (возраст, общая выживаемость, выживаемость без прогрессирования и др.) для интеграции с данными пространственной и одноклеточной транскриптомики.",
    results: [
      "выявить патогенетически значимые клеточные и тканевые ниши в данных пространственной транскриптомики РПР в молодом возрасте;",
      "разработать/применить модель, связывающую выявленные ниши пространственной транскриптомики с тотальным транскриптом РПР в молодом возрасте с подробной клинической информацией;",
      "провести приоритезацию ниш по их прогностической значимости у больных РПР в молодом возрасте;",
      "предоставить приоритетный набор прогностических маркеров для более точной оценки прогноза РПР в молодом возрасте в клинике.",
    ],
  },
  {
    number: "4",
    title: "Дифференциальная диагностика злокачественных и нормальных состояний клеток",
    leader: "Александр Яневски, ЕУСПб",
    goalShort:
      "Разработка методов для точного разделения злокачественных клонов и реконструкции их эволюционных связей на основе scRNA-seq и scDNA-seq данных.",
    image: "/partners/project/tema_4.png",
    goal:
      "Разделить злокачественные клетки на клоны точнее современных инструментов клональной реконструкции и восстановить эволюционные связи между ними.",
    description: [
      "Почему рак так часто возвращается после успешного, казалось бы, лечения? Опухоль не однородна: в ней сосуществуют разные клоны клеток, и терапия, уничтожая основную массу, нередко пропускает редкий устойчивый клон, который и дает рецидив. Поэтому, чтобы лечить рационально, опухоль нужно сначала точно разобрать на клоны, и как раз здесь существующие методы систематически ошибаются.",
      "В основе проекта лежит новый метод руководителя, разделяющий злокачественные и нормальные клетки по данным транскриптомики единичных клеток и превосходящий существующие CopyKAT, inferCNV, Numbat и другие подходы. Этот шаг участники получат готовым, вместе с данными по нескольким типам опухолей и объяснением, как он сделан, и на этой чистой основе займутся более тонкой задачей: правильно разделить злокачественные клетки на клоны.",
      "Сложность в том, что scRNA-seq измеряет не геном, а экспрессию генов, где сигнал реальной копийности неизбежно смешан с регуляторной активностью и состоянием клетки. Не разделяя эти компоненты, существующие подходы путают генетические различия с фенотипическими: клетки одного клона в разных состояниях расходятся, а разные клоны в сходном состоянии сливаются, и выделенные клоны отражают уже не геном, а состояние клетки.",
      "Решающее преимущество проекта в редких данных, где для одних и тех же клеток измерены и РНК, и ДНК, так что истинная принадлежность каждой клетки к клону известна по прямому секвенированию ДНК (scDNA-seq). Участникам дают только РНК, они восстанавливают клоны, а результат сверяется с ДНК-истиной поклеточно, что позволяет честно измерить точность и доказать, что клоны настоящие, а не артефакт состояния клеток.",
      "Клиническая значимость прямая: именно клональная архитектура определяет, какой субклон даст метастаз, а какой переживет терапию и вернет болезнь, поэтому при неверно определенных клонах ненадежно все, что строится поверх, от прогноза до выбора лечения. Точная реконструкция клональной структуры и есть фундамент терапии, бьющей по всем субклонам сразу и не оставляющей раку шанса вернуться.",
    ],
    tasks:
      "Разделить злокачественные клетки на клоны точнее современных инструментов клональной реконструкции (SCEVAN, inferCNV) и восстановить эволюционные связи между ними.",
    results: [
      "опыт работы с реальными одноклеточными данными рака (scRNA-seq) нескольких типов опухолей и владение методами вывода копийности и реконструкции клональной структуры;",
      "редкую возможность валидировать результаты по золотому стандарту (парные данные scDNA-seq, клетка-в-клетку) и навык честной оценки моделей по объективной истине, а не «на глаз»;",
      "понимание ключевой проблемы scRNA-seq: как отделить генетический сигнал от регуляторного, а также готовый фрагмент исследования, который можно развивать вплоть до публикации;",
      "возможность поработать напрямую с руководителем проекта, автором scType, scTherapy и SynergyFinder (h-index 34), и получить обратную связь по своему подходу.",
    ],
  },
  {
    number: "5",
    title: "Регуляция клеточной пластичности как стратегия лечения рака",
    leader: "Вера Субракова, Полина Козлова, Томский НИМЦ",
    goalShort:
      "Поиск и интерпретация программ клеточной пластичности, связанных с прогрессией опухоли и устойчивостью к терапии.",
    image: "/partners/project/tema_5.png",
    goal:
      "Найти, описать и интерпретировать клеточные состояния опухоли, связанные с пластичностью, пролиферацией и нарушением дифференцировки, а также, возможно, предложить способы их терапевтического или диагностического таргетирования.",
    description: [
      "Опухолевые клетки обладают высокой пластичностью: они могут менять свое транскрипционное состояние, возвращаться к более примитивным, progenitor-like программам, избегать дифференцировки и формировать клеточные состояния, связанные с прогрессией опухоли, устойчивостью к терапии и рецидивами.",
      "Одним из перспективных направлений онкологии становится поиск универсальных программ клеточной пластичности, которые активируются в разных типах опухолей и могут быть использованы как мишени для ранней диагностики, стратификации риска или терапии.",
      "В основе проекта лежит идея о том, что некоторые опухолевые клетки могут реактивировать программы, характерные для раннего эмбрионального развития. Участникам предстоит работать с данными секвенирования РНК единичных клеток опухолей и эмбриоидных телец, чтобы сравнить транскрипционные состояния опухолевых клеток с эмбрионально-подобными программами дифференцировки.",
    ],
    tasks: [
      "проанализировать данные секвенирования РНК единичных клеток опухолевых образцов и эмбриоидных телец;",
      "найти опухолевые клеточные популяции с признаками высокой пластичности, низкой дифференцировки или progenitor-like состояния;",
      "определить гены, сигнатуры, сигнальные пути и/или транскрипционные факторы, связанные с этим состоянием;",
      "предложить биологическую интерпретацию найденной программы и возможные подходы к ее терапевтическому или диагностическому использованию.",
    ],
    results: [
      "описание клеточных состояний опухоли, связанных с пластичностью, пролиферацией и нарушением дифференцировки;",
      "набор генов, сигнатур, сигнальных путей и/или транскрипционных факторов, связанных с progenitor-like состояниями;",
      "биологическая интерпретация найденных программ клеточной пластичности;",
      "предложения по терапевтическому или диагностическому использованию выявленных программ.",
    ],
  },
  {
    number: "6",
    title: "Эпитоп-специфическое иммунное профилирование при патологиях человека",
    leader: "Кирилл Кириленко, Семён Куприянов, Томский НИМЦ",
    goalShort:
      "Разработка ML-подходов для анализа иммунных репертуаров и выявления эпитоп-специфических иммунных паттернов, связанных с патологиями.",
    image: "/partners/project/tema_6.png",
    goal:
      "Разработка и анализ ML-подходов для эпитоп-специфического иммунного профилирования на основе данных иммунного репертуара и клинической информации.",
    description: [
      "Иммунный ответ при заболеваниях человека во многом определяется тем, какие именно антигены и эпитопы распознаются T- и B-клетками.",
      "Анализ иммунных репертуаров позволяет выявлять клональные расширения, общие паттерны и признаки, потенциально связанные с патологическими состояниями.",
    ],
    tasks:
      "Участникам предстоит проанализировать открытые иммуногеномные данные, применить методы машинного обучения для поиска паттернов в иммунных репертуарах, оценить связь иммунных клонов с эпитопами и категориями патологий, интерпретировать полученные результаты.",
    results: [
      "прототип ML-пайплайна для анализа иммунных репертуаров;",
      "выявление эпитоп-специфических и патологически ассоциированных иммунных паттернов;",
      "предложения по дальнейшему применению таких моделей в диагностике, прогнозе или персонализированной терапии.",
    ],
  },
];

const dnaDots = Array.from({ length: 28 }, (_, index) => {
  const progress = index / 27;
  const wave = Math.sin(progress * Math.PI * 4);
  const size = 0.55 + Math.cos(progress * Math.PI * 4) * 0.12;

  return {
    id: index,
    top: `${5 + progress * 90}%`,
    left: `${50 + wave * 15}%`,
    right: `${50 - wave * 15}%`,
    size: `${size}rem`,
    opacity: 0.62 + Math.abs(wave) * 0.26,
  };
});

const stats = [
  { value: "72", caption: "часа\nкомандной работы", icon: "time" },
  { value: "3-5", caption: "человек\nв команде", icon: "team" },
  { value: "25+", caption: "экспертов\nи менторов", icon: "cap" },
  { value: "6", caption: "проектных\nнаправлений", icon: "compass" },
];

const hackathonDays = [
  {
    day: "День 1",
    text: "Открытие, две вводные лекции, пленарный доклад, знакомство с модераторами и проектами, формирование команд, командная работа",
  },
  {
    day: "День 2",
    text: "Пленарный доклад, продолжение командной работы",
  },
  {
    day: "День 3",
    text: "Пленарный доклад, продолжение командной работы",
  },
  {
    day: "День 4",
    text: "Пленарный доклад, продолжение командной работы",
  },
  {
    day: "День 5",
    text: "Защита проектов, определение победителей, награждение, закрытие",
  },
];

const lecturers = [
  {
    name: "Евгений Денисов",
    image: "/partners/lectors/Evgeny_Denisov.png",
    role: "Доктор биологических наук, профессор РАН, заместитель директора по научной работе НИИ онкологии Томского НИМЦ, зав. лабораторией биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ, зав. лабораторией биологии единичных клеток НИИ молекулярной и клеточной медицины Медицинского института РУДН",
    location: "Томск, Москва",
    tags: ["Онкология", "Данные единичных клеток", "Опухолевая прогрессия"],
  },
  {
    name: "Антон Поддубский",
    image: "/partners/lectors/Anton_Poddubsky.png",
    role: "Кандидат технических наук, директор Факультета искусственного интеллекта РУДН",
    location: "Москва",
    tags: ["Искусственный интеллект", "ФИИ РУДН", "Подготовка AI-кадров"],
  },
  {
    name: "Иван Тюкин",
    image: "/partners/lectors/Ivan_Tyukin.png",
    role: "Доктор технических наук, Сколковский институт науки и технологий (Сколтех), РУДН",
    location: "Москва",
    tags: ["Искусственный интеллект", "Сколтех", "РУДН"],
  },
  {
    name: "Александр Яневски",
    image: "/partners/lectors/Alexander_Yanevsky.png",
    role: "PhD, Assistant Professor, Европейский университет Санкт-Петербурга / University of Helsinki",
    location: "Санкт-Петербург",
    tags: ["Вычислительная биология", "Клеточная диагностика", "ЕУСПб"],
  },
  {
    name: "Johnny Yu",
    image: "/partners/lectors/Johnny_Yu.png",
    role: "PhD, Chief Scientific Officer & сооснователь, Tahoe Therapeutics",
    location: "San Francisco, USA",
    tags: ["Прецизионная медицина", "Биотех", "Разработка лекарств"],
  },
  {
    name: "Weidi Xie",
    image: "/partners/lectors/Weidi Xie.jpg",
    role: "Associate Professor, Shanghai Jiao Tong University; visitor researcher, University of Oxford",
    location: "Shanghai, China",
    tags: ["ИИ в биомедицине", "Вычислительная биология", "Oxford"],
  },
];

const moderators = [
  {
    name: "Александр Иконников",
    image: "/partners/moderators/Alexander_Ikonnikov.jpg",
    role: "младший научный сотрудник лаборатории биологии единичных клеток НИИ молекулярной и клеточной медицины РУДН",
    location: "Москва",
    initials: "АИ",
    tags: ["Редкие заболевания", "Терапевтические мишени", "Данные единичных клеток"],
  },
  {
    name: "Артем Торопов",
    image: "/partners/moderators/Artem_Tropov.jpg",
    role: "стажёр-исследователь лаборатории биологии единичных клеток НИИ молекулярной и клеточной медицины РУДН",
    location: "Москва",
    tags: ["Саркомы", "Персонализация терапии", "Данные единичных клеток"],
  },
  {
    name: "Павел Ямщиков",
    image: "/partners/moderators/Pavel_Yamshchikov.png",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Онкология", "Прогностические факторы"],
  },
  {
    name: "Александр Яневски",
    image: "/partners/moderators/Alexander_Yanevsky.png",
    role: "PhD, Assistant Professor, Европейский университет Санкт-Петербурга / University of Helsinki",
    location: "Санкт-Петербург",
    tags: ["Вычислительная биология", "Дифференциальная диагностика", "ЕУСПб"],
  },
  {
    name: "Вера Субракова",
    image: "/partners/moderators/Vera_Subrakova.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Клеточная пластичность", "Онкология"],
  },
  {
    name: "Полина Козлова",
    image: "/partners/moderators/Polina_Kozlova.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Клеточная пластичность", "Терапевтический ответ"],
  },
  {
    name: "Кирилл Кириленко",
    image: "/partners/moderators/Kirill_Kirilenko.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Иммунное профилирование", "Эпитопы"],
  },
  {
    name: "Семён Куприянов",
    image: "/partners/moderators/Semyon_Kupriyanov.jpg",
    role: "специалист в области биоинформатики лаборатории биологии опухолевой прогрессии НИИ онкологии Томского НИМЦ",
    location: "Томск",
    tags: ["Биоинформатика", "Иммунология", "Патологии человека"],
  },
];

const requirementCards = [
  {
    icon: "python",
    title: "Python или R",
    text: "Уверенное чтение кода, работа с базовыми библиотеками для анализа биологических данных.",
  },
  {
    icon: "database",
    title: "Работа с базами данных",
    text: "Умение находить записи в NCBI (Entrez), UniProt по ID; поиск датасетов в GEO, Zenodo. Знание веб-инструментов для анализа биомедицинских данных.",
  },
  {
    icon: "chart",
    title: "Анализ данных",
    text: "Опыт статистического анализа биомедицинских данных (геномных, транскриптомных, больших клинических данных).",
  },
  {
    icon: "dna",
    title: "Биологическая интерпретация",
    text: "Умение интерпретировать результаты анализа (биологическое образование или опыт участия в биологических исследованиях).",
  },
  {
    icon: "brain",
    title: "Машинное обучение",
    text: "Знание базовых инструментов ML.",
  },
];

const iconMap = {
  brain: IconBrain,
  calendar: IconCalendarEvent,
  cap: IconSchool,
  chart: IconChartBar,
  clipboard: IconClipboardList,
  compass: IconCompass,
  database: IconDatabase,
  dna: IconDna2,
  flag: IconFlag,
  mail: IconMail,
  python: IconBrandPython,
  shield: IconShield,
  star: IconStar,
  target: IconTargetArrow,
  team: IconUsersGroup,
  time: IconClockHour4,
  trophy: IconTrophy,
};

function TermIcon({ name }) {
  const Icon = iconMap[name];

  return Icon ? <Icon aria-hidden="true" /> : null;
}

function App() {
  const heroRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [regOpen, setRegOpen] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let frame = 0;

    const updateParallax = () => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const offset = rect.top * -0.18;

      hero.style.setProperty("--hero-parallax", `${offset}px`);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const elements = Array.from(
      document.querySelectorAll(
        ".about-stat-card, .about-info-card, .lecturer-card, .moderator-card, .project-card, .terms-card, .terms-info-card, .terms-alert, .map-card, .section-head, .about-reference-copy"
      )
    );
    if (!elements.length) return undefined;

    elements.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <div className="landing">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hackatomics 2026">
          <img className="brand-logo" src={logo} alt="" />
          <span className="brand-copy">
            Hackatomics
            <b>2026</b>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <IconMenu2 aria-hidden="true" />
        </button>

        <nav className={`menu ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            О хакатоне
          </a>

          <div className="menu-item has-dropdown">
            <a className="menu-link" href="#organizers" onClick={() => setMenuOpen(false)}>
              Организаторы
              <IconChevronDown className="dropdown-caret" aria-hidden="true" />
            </a>
            <div className="organizers-dropdown" aria-label="Организаторы">
              <div className="dropdown-roles">
                <a href="#organizers" onClick={() => setMenuOpen(false)}>
                  <span className="role-icon" aria-hidden="true">
                    <IconPresentation />
                  </span>
                  <span>
                    <strong>Лекторы</strong>
                    <small>Ведущие эксперты в области биоинформатики и ИИ</small>
                  </span>
                </a>
                <a href="#organizers" onClick={() => setMenuOpen(false)}>
                  <span className="role-icon" aria-hidden="true">
                    <IconUserStar />
                  </span>
                  <span>
                    <strong>Менторы</strong>
                    <small>Практики и исследователи, готовые помочь командам</small>
                  </span>
                </a>
              </div>

              <div className="dropdown-partners">
                <p>Организаторы</p>
                <div className="partner-menu-grid">
                  {organizerPartners.map((partner) => (
                    <a
                      className="partner-menu-card"
                      href="#organizers"
                      key={partner.name}
                      onClick={() => setMenuOpen(false)}
                    >
                      <img src={partner.image} alt="" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navItems.slice(1).map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="btn btn-header"
          onClick={() => {
            setMenuOpen(false);
            setRegOpen(true);
          }}
        >
          Регистрация
          <IconArrowRight aria-hidden="true" />
        </button>
      </header>

      <main id="top">
        <section className="hero section-dark" ref={heroRef}>
          <video
            className="hero-video-bg"
            src={heroGifVideo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
          <div className="hero-copy">
            <p className="eyebrow">Bioinformatics + AI + Precision Medicine</p>
            <h1>
              <span className="hero-title-main">Hackatomics</span>
              <span className="hero-title-year">
                2026
                <span className="hero-title-date">10-14 октября</span>
              </span>
            </h1>
            <p className="lead">72 часа, чтобы создать решения для прецизионной медицины</p>

            <div className="chip-row">
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="actions">
              <button type="button" className="btn btn-primary" onClick={() => setRegOpen(true)}>
                Участвовать
                <IconArrowRight aria-hidden="true" />
              </button>
              <a className="btn btn-ghost" href="#about">
                Подробнее
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section-light about about-reference">
          <div className="about-reference-top">
            <div className="about-reference-copy">
              <h2>О хакатоне</h2>
              <p>
                Омиксные технологии на уровне единичных клеток вместе с искусственным
                интеллектом открывают новые возможности для изучения молекулярного ландшафта тканей
                и органов. Хакатон объединяет специалистов для поиска инновационных решений в
                прецизионной медицине.
              </p>
            </div>
            <div className="about-reference-stats">
              {stats.map((item) => (
                <article key={item.value} className="about-stat-card">
                  <span className="about-stat-icon" aria-hidden="true">
                    <TermIcon name={item.icon} />
                  </span>
                  <strong>{item.value}</strong>
                  <span>
                    {item.caption.split("\n").map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </span>
                </article>
              ))}
            </div>
          </div>

          <div className="about-reference-grid">
            <article className="about-info-card about-relevance">
              <div className="about-card-title">
                <span className="about-card-icon" aria-hidden="true">
                  <TermIcon name="target" />
                </span>
                <h3>Актуальность</h3>
              </div>
              <p>
                Омиксные технологии на уровне единичных клеток позволяют исследовать геном,
                транскриптом, протеом и метаболом каждой клетки с высокой точностью.
              </p>
              <p className="about-bold">Применение ИИ для анализа этих данных помогает выявлять:</p>
              <ul>
                <li>молекулярные механизмы развития патологий;</li>
                <li>новые подтипы заболеваний;</li>
                <li>перспективные диагностические и терапевтические мишени.</li>
              </ul>
            </article>

            <article className="about-info-card about-goal">
              <div className="about-card-title">
                <span className="about-card-icon" aria-hidden="true">
                  <TermIcon name="flag" />
                </span>
                <h3>Цель</h3>
              </div>
              <p>
                Объединить усилия исследователей, биоинформатиков и специалистов ИИ для создания
                инновационных подходов в прецизионной медицине на основе данных единичных клеток.
              </p>
            </article>

            <article className="about-info-card about-days">
              <div className="about-card-title">
                <span className="about-card-icon" aria-hidden="true">
                  <TermIcon name="calendar" />
                </span>
                <h3>Дни хакатона</h3>
              </div>
              <div className="about-days-list">
                {hackathonDays.map((item) => (
                  <div className="about-day-row" key={item.day}>
                    <span className="about-day-label">{item.day}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="organizers" className="section-dark">
          <div className="section-head compact on-dark">
            <h2>Организаторы</h2>
          </div>
          <div className="organizer-group">
            <h3 className="organizer-subhead">Лекторы</h3>
            <div className="lecturers-grid">
              {lecturers.map((person) => (
                <article key={person.name} className="lecturer-card">
                  <img className="lecturer-photo" src={person.image} alt={person.name} />
                  <div className="lecturer-copy">
                    <h3>{person.name}</h3>
                    <p>{person.role}</p>
                    <span className="lecturer-location">
                      <IconMapPin className="location-pin" aria-hidden="true" />
                      {person.location}
                    </span>
                    <div className="lecturer-tags">
                      {person.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="muted-note">Список лекторов будет дополняться.</p>
          </div>
          <div className="organizer-group">
            <h3 className="organizer-subhead">Менторы</h3>
            <div className="moderators-grid">
              {moderators.map((moderator) => (
                <article key={moderator.name} className="moderator-card">
                  {moderator.image ? (
                    <img
                      className={`moderator-photo ${
                        moderator.name === "Семён Куприянов" ? "moderator-photo-semyon" : ""
                      }`}
                      src={moderator.image}
                      alt={moderator.name}
                    />
                  ) : (
                    <div className="moderator-photo-placeholder" aria-hidden="true">
                      {moderator.initials}
                    </div>
                  )}
                  <div className="moderator-copy">
                    <h3>{moderator.name}</h3>
                    <p>{moderator.role}</p>
                    <span className="lecturer-location">
                      <IconMapPin className="location-pin" aria-hidden="true" />
                      {moderator.location}
                    </span>
                    <div className="lecturer-tags">
                      {moderator.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-dark projects-section">
          <div className="section-head compact on-dark">
            <h2>Проекты</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-copy">
                  <h3>
                    <span>{project.number}.</span> {project.title}
                  </h3>
                  <p className="project-leader">{project.leader}</p>
                  <div className="project-goal">
                    <strong>Цель проекта:</strong>
                    <p>{project.goalShort}</p>
                  </div>
                  <button className="project-more" type="button" onClick={() => setActiveProject(project)}>
                    Подробнее
                    <IconArrowRight aria-hidden="true" />
                  </button>
                </div>
                <img className="project-image" src={project.image} alt="" />
              </article>
            ))}
          </div>
        </section>

        {activeProject ? (
          <div className="project-modal-backdrop" role="presentation" onMouseDown={() => setActiveProject(null)}>
            <div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                className="project-modal-close"
                type="button"
                aria-label="Закрыть окно"
                onClick={() => setActiveProject(null)}
              >
                ×
              </button>
              <p className="project-modal-kicker">Проект {activeProject.number}</p>
              <h3 id="project-modal-title">{activeProject.title}</h3>
              <dl className="project-modal-details">
                <div>
                  <dt>Руководитель</dt>
                  <dd>{activeProject.leader}</dd>
                </div>
                <div>
                  <dt>Цель проекта</dt>
                  <dd>{activeProject.goal}</dd>
                </div>
                {activeProject.description ? (
                  <div>
                    <dt>Контекст проекта</dt>
                    <dd>
                      {Array.isArray(activeProject.description) ? (
                        <div className="project-modal-paragraphs">
                          {activeProject.description.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      ) : (
                        activeProject.description
                      )}
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt>Что предстоит сделать участникам</dt>
                  <dd>
                    {Array.isArray(activeProject.tasks) ? (
                      <ul className="project-modal-list">
                        {activeProject.tasks.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      activeProject.tasks
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Ожидаемые результаты</dt>
                  <dd>
                    {Array.isArray(activeProject.results) ? (
                      <ul className="project-modal-list">
                        {activeProject.results.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      activeProject.results
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ) : null}

        <section id="terms" className="section-light terms-section">
          <div className="terms-orbit" aria-hidden="true" />
          <div className="terms-helix" aria-hidden="true">
            {dnaDots.slice(0, 18).map((dot) => (
              <span key={dot.id} style={{ top: dot.top, left: dot.left, right: dot.right }} />
            ))}
          </div>
          <div className="section-head compact terms-head">
            <h2>Условия проведения</h2>
            <p>
              Участникам предстоит работать на стыке <span>биологии</span>,{" "}
              <span>анализа данных</span> и <span>машинного обучения</span>.
            </p>
          </div>

          <div className="terms-subhead">
            <span className="terms-subhead-icon" aria-hidden="true">
              <TermIcon name="clipboard" />
            </span>
            <h3>Требования для участников</h3>
          </div>

          <p className="terms-kicker">Обязательные компетенции:</p>
          <div className="terms-grid">
            {requirementCards.map((card, index) => (
              <article className="terms-card" key={card.title}>
                <span className="terms-icon" aria-hidden="true">
                  <TermIcon name={card.icon} />
                </span>
                <h3>
                  {index + 1}. {card.title}
                </h3>
                <span className="terms-card-line" aria-hidden="true" />
                <p>{card.text}</p>
              </article>
            ))}

            <article className="terms-card terms-card-accent">
              <span className="terms-icon" aria-hidden="true">
                <TermIcon name="star" />
              </span>
              <h3>Будет преимуществом:</h3>
              <span className="terms-card-line" aria-hidden="true" />
              <p>
                Опыт анализа RNA-seq данных на уровне единичных клеток. Продвинутые знания в ML/AI: опыт
                создания и обучения deep learning моделей (autoencoders, VAEs, transformers) для
                работы с биологическими данными.
              </p>
            </article>
          </div>

          <div className="terms-alert">
            <span className="terms-alert-icon" aria-hidden="true">
              <TermIcon name="shield" />
            </span>
            <strong>ВАЖНО</strong>
            <p>
              Мы не ожидаем от вас экспертного уровня во всём сразу. Главное — желание разбираться
              в задачах на стыке биологии и анализа данных.
            </p>
          </div>

          <div className="terms-info-grid">
            <article className="terms-info-card">
              <span className="terms-icon" aria-hidden="true">
                <TermIcon name="trophy" />
              </span>
              <h3>Информация о призах</h3>
              <span className="terms-card-line" aria-hidden="true" />
              <p>
                Призовой фонд хакатона — 450 000 рублей. Команды-победители будут отмечены
                денежными призами, а каждый участник получит сертификат и памятный подарок.
              </p>
            </article>

            <article className="terms-info-card">
              <span className="terms-icon" aria-hidden="true">
                <TermIcon name="clipboard" />
              </span>
              <h3>Регистрация</h3>
              <span className="terms-card-line" aria-hidden="true" />
              <p>
                Регистрация на хакатон открыта. Заполните анкету участника — это займёт несколько
                минут.
              </p>
              <button type="button" className="terms-email-btn" onClick={() => setRegOpen(true)}>
                <TermIcon name="mail" />
                Зарегистрироваться
              </button>
            </article>
          </div>
        </section>

        <section id="registration" className="section-dark registration-section">
          <div className="registration-copy">
            <span className="registration-icon" aria-hidden="true">
              <TermIcon name="mail" />
            </span>
            <div>
              <h2>Регистрация на хакатон</h2>
              <p>
                Заполните анкету участника хакатона по омиксным технологиям и ИИ. Поля, отмеченные
                звёздочкой, обязательны.
              </p>
              <button
                type="button"
                className="btn btn-primary registration-cta"
                onClick={() => setRegOpen(true)}
              >
                Заполнить анкету
                <IconArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
          <img className="registration-door" src="/partners/project/door.png" alt="" aria-hidden="true" />
        </section>

        <section id="venue" className="section-light venue">
          <div className="venue-copy">
            <h2>Место проведения</h2>
            <h3>НИИ МКМ и ФИИ РУДН</h3>
            <p className="venue-address">Москва, Подольское шоссе, 8</p>
            <p>
              Современное пространство для работы, нетворкинга и презентации решений в сфере
              биомедицины и ИИ.
            </p>
          </div>
          <div className="map-card">
            <iframe
              className="map-frame"
              src="https://yandex.ru/map-widget/v1/?ll=37.624007%2C55.713864&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjY4NTU1MRJH0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAsINCf0L7QtNC-0LvRjNGB0YHQutC-0LUg0YjQvtGB0YHQtSwgOCI%2C&z=18"
              title="Место проведения на Яндекс.Картах"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-actions">
              <a
                className="map-btn"
                href="https://yandex.ru/maps/-/CPhUEKYD"
                target="_blank"
                rel="noreferrer"
              >
                <IconMapPin aria-hidden="true" />
                Вход в НИИ
              </a>
              <a
                className="map-btn map-btn-primary"
                href="https://2gis.ru/moscow/search/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%88%D0%BE%D1%81%D1%81%D0%B5%2C%208"
                target="_blank"
                rel="noreferrer"
              >
                2ГИС
              </a>
              <a
                className="map-btn map-btn-primary"
                href="https://yandex.ru/maps/-/CPhUEKYD"
                target="_blank"
                rel="noreferrer"
              >
                Я.Карты
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer id="contacts" className="site-footer section-dark">
        <div className="footer-top">
          <p className="footer-brand">Hackatomics 2026</p>
          <p>10-14 октября, 72 часа для идей, которые меняют медицину.</p>
          <div className="socials">
            <a href="#">Telegram</a>
            <a href="#">VK</a>
            <a href="#">GitHub</a>
          </div>
          <button
            type="button"
            className="btn btn-primary footer-registration"
            onClick={() => setRegOpen(true)}
          >
            Зарегистрироваться <IconArrowRight aria-hidden="true" />
          </button>
        </div>
        <div className="footer-bottom">
          <span>© Hackatomics 2026</span>
          <a href="#">Контакты</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>

      <RegistrationModal open={regOpen} onClose={() => setRegOpen(false)} />
    </div>
  );
}

export default App;
