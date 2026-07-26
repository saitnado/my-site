import {
  IconBriefcase,
  IconBuildingBank,
  IconDots,
  IconLink,
  IconMail,
  IconMapPin,
  IconMicroscope,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";

export const FORM_ACTION = "/api/form-response";

export const OTHER_VALUE = "__other_option__";
export const EVENT_SUBTITLE = "10–14 октября 2026 • НИИ МКМ и ФИИ РУДН";

export const sections = [
  {
    id: "participant",
    title: "Участник",
    fields: [
      {
        key: "email",
        entry: "emailAddress",
        type: "email",
        label: "Email",
        placeholder: "example@domain.ru",
        icon: IconMail,
        required: true,
      },
      {
        key: "first",
        entry: "entry.2070121988",
        type: "text",
        label: "Имя",
        placeholder: "Введите ваше имя",
        icon: IconUser,
        required: true,
      },
      {
        key: "last",
        entry: "entry.1448478821",
        type: "text",
        label: "Фамилия",
        placeholder: "Введите вашу фамилию",
        icon: IconUser,
        required: true,
      },
      {
        key: "city",
        entry: "entry.1353807391",
        type: "text",
        label: "Город",
        placeholder: "Укажите ваш город",
        icon: IconMapPin,
        required: true,
      },
      {
        key: "org",
        entry: "entry.976820572",
        type: "text",
        label: "Организация (место учебы или работы)",
        placeholder: "Введите название организации",
        icon: IconBuildingBank,
        required: true,
      },
      {
        key: "status",
        entry: "entry.262812651",
        type: "cards",
        multiple: true,
        label: "Ваш текущий статус",
        required: true,
        options: [
          { value: "Студент (бакалавриат)", label: "Студент (бакалавриат)", icon: IconSchool },
          { value: "Студент (магистратура)", label: "Студент (магистратура)", icon: IconSchool },
          { value: "Аспирант", label: "Аспирант", icon: IconSchool },
          { value: "Исследователь/Научный сотрудник", label: "Исследователь", icon: IconMicroscope },
          { value: "Индустрия", label: "Индустрия", icon: IconBriefcase },
          { value: "Другое", label: "Другое", icon: IconDots },
        ],
      },
      {
        key: "resume",
        entry: "entry.354041445",
        type: "text",
        label: "Ссылка на резюме / GitHub / LinkedIn",
        placeholder: "https://",
        icon: IconLink,
        required: false,
      },
    ],
  },
  {
    id: "skills",
    title: "Навыки и опыт",
    groups: [
      {
        title: "Программирование (Python / R)",
        fields: [
          {
            key: "progLevel",
            entry: "entry.1077771642",
            type: "radio",
            label: "Уровень (программирование)",
            required: true,
            options: [
              "Не использую",
              "Могу читать код",
              "Пишу простые скрипты",
              "Уверенно анализирую данные",
              "Разрабатываю пайплайны / сложные решения",
            ],
          },
          {
            key: "progSkills",
            entry: "entry.1495719992",
            type: "checkbox",
            label: "Навыки (программирование)",
            required: true,
            other: true,
            options: [
              "Анализ данных (pandas / tidyverse)",
              "Визуализация (matplotlib / seaborn / ggplot2)",
              "Работа с большими данными",
              "Разработка пайплайнов",
              "Разработка библиотек / инструментов",
              "Оптимизация / ускорение кода",
              "Работа с API / парсинг",
            ],
          },
        ],
      },
      {
        title: "Машинное обучение / AI",
        fields: [
          {
            key: "mlLevel",
            entry: "entry.732878317",
            type: "radio",
            label: "Уровень (ML/AI)",
            required: true,
            options: [
              "Нет опыта",
              "Использовал sklearn / базовые модели",
              "Разрабатывал и оптимизировал собственные модели",
              "Работал с deep learning",
            ],
          },
          {
            key: "mlSkills",
            entry: "entry.924766605",
            type: "checkbox",
            label: "Навыки (ML/AI)",
            required: true,
            other: true,
            options: [
              "Классификация / регрессия",
              "Кластеризация",
              "Feature selection / engineering",
              "PyTorch / TensorFlow",
              "Autoencoders / VAEs",
              "Transformers",
              "Модели для биологических данных",
            ],
          },
        ],
      },
      {
        title: "Биоинформатика и статистика",
        fields: [
          {
            key: "bioLevel",
            entry: "entry.1733509405",
            type: "radio",
            label: "Уровень (биоинформатика)",
            required: true,
            options: [
              "Нет опыта",
              "Базовый (использовал готовые пайплайны)",
              "Средний (самостоятельный анализ данных)",
              "Продвинутый (адаптирую методы, понимаю ограничения)",
              "Эксперт (разрабатываю методы / инструменты)",
            ],
          },
          {
            key: "bioAreas",
            entry: "entry.1286788267",
            type: "checkbox",
            label: "Области анализа",
            required: true,
            other: true,
            options: [
              "Bulk RNA-seq",
              "scRNA-seq",
              "Spatial transcriptomics",
              "Геномика",
              "Эпигеномика",
              "Протеомика",
              "Метаболомика",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "projects",
    title: "Проекты и мотивация",
    fields: [
      {
        key: "priority",
        type: "grid",
        label: "Выберите приоритет проектов (1 — самый интересный)",
        required: true,
        columns: ["1", "2", "3", "4", "5", "6"],
        rows: [
          { entry: "entry.299605643", label: "Поиск мишеней для терапии редких агрессивных заболеваний" },
          {
            entry: "entry.1047522220",
            label: "Разработка новых алгоритмов персонализации терапии сарком мягких тканей",
          },
          { entry: "entry.1951465246", label: "Поиск прогностических факторов рака в молодом возрасте" },
          {
            entry: "entry.2118926439",
            label: "Дифференциальная диагностика злокачественных и нормальных состояний",
          },
          { entry: "entry.281828917", label: "Регуляция клеточной пластичности как стратегия лечения рака" },
          {
            entry: "entry.1755689227",
            label: "Эпитоп-специфическое иммунное профилирование при патологиях человека",
          },
        ],
      },
      {
        key: "whyPriority",
        entry: "entry.372543327",
        type: "textarea",
        label: "Почему вы выбрали проект с приоритетом 1?",
        required: true,
      },
      {
        key: "bring",
        entry: "entry.293740629",
        type: "textarea",
        label: "Какие навыки вы можете привнести в этот проект?",
        required: false,
      },
      {
        key: "motivation",
        entry: "entry.345122769",
        type: "textarea",
        label: "Почему вы хотите участвовать в хакатоне? Опишите свою мотивацию.",
        required: false,
      },
      {
        key: "have",
        entry: "entry.2073541466",
        type: "checkbox",
        label: "У вас есть:",
        required: true,
        options: [
          "Ноутбук (Linux / Mac / Windows)",
          "Опыт работы с удаленными серверами",
          "Опыт работы с GPU",
          "Ничего из перечисленного",
        ],
      },
    ],
  },
];

export const steps = [
  { title: "Регистрация на хакатон", sectionIds: ["participant"] },
  { title: "Навыки и опыт", sectionIds: ["skills"] },
  { title: "Проекты и мотивация", sectionIds: ["projects"] },
];
