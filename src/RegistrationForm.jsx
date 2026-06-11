import { useEffect, useMemo, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBriefcase,
  IconBuildingBank,
  IconCheck,
  IconDna2,
  IconDots,
  IconLink,
  IconMail,
  IconMapPin,
  IconMicroscope,
  IconRefresh,
  IconSchool,
  IconUser,
  IconX,
} from "@tabler/icons-react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeaLT2MPWF883OFgpove-XBnF7Nur2BCvV9gqNXtW4h1-5EAA/formResponse";

const OTHER_VALUE = "__other_option__";
const EVENT_SUBTITLE = "10–14 октября 2026 • НИИ МКМ и ФИИ РУДН";

const sections = [
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
        type: "radio",
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

const steps = [
  { title: "Регистрация на хакатон", sectionIds: ["participant"] },
  { title: "Навыки и опыт", sectionIds: ["skills"] },
  { title: "Проекты и мотивация", sectionIds: ["projects"] },
];

const sectionById = Object.fromEntries(sections.map((section) => [section.id, section]));

function sectionFields(section) {
  return [...(section.fields ?? []), ...(section.groups ?? []).flatMap((group) => group.fields)];
}

const flatFields = sections.flatMap(sectionFields);

function stepFields(stepIndex) {
  return steps[stepIndex].sectionIds.flatMap((id) => sectionFields(sectionById[id]));
}

function buildInitialValues() {
  const values = {};
  flatFields.forEach((field) => {
    if (field.type === "checkbox") values[field.key] = [];
    else if (field.type === "grid") values[field.key] = {};
    else values[field.key] = "";
    if (field.other) values[`${field.key}__other`] = "";
  });
  return values;
}

function isFieldValid(field, values) {
  if (!field.required) return true;
  const value = values[field.key];
  if (field.type === "checkbox") {
    const hasChoice = Array.isArray(value) && value.length > 0;
    if (value?.includes(OTHER_VALUE)) {
      return hasChoice && values[`${field.key}__other`].trim() !== "";
    }
    return hasChoice;
  }
  if (field.type === "grid") {
    return field.rows.every((row) => value?.[row.entry]);
  }
  return typeof value === "string" && value.trim() !== "";
}

export default function RegistrationModal({ open, onClose }) {
  const [values, setValues] = useState(buildInitialValues);
  const [status, setStatus] = useState("idle");
  const [showErrors, setShowErrors] = useState(false);
  const [step, setStep] = useState(0);

  const invalidKeys = useMemo(() => {
    const set = new Set();
    flatFields.forEach((field) => {
      if (!isFieldValid(field, values)) set.add(field.key);
    });
    return set;
  }, [values]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const setValue = (key, value) => setValues((prev) => ({ ...prev, [key]: value }));

  const toggleCheckbox = (key, option) =>
    setValues((prev) => {
      const current = prev[key] ?? [];
      const next = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [key]: next };
    });

  const setGridValue = (key, rowEntry, column) =>
    setValues((prev) => ({ ...prev, [key]: { ...prev[key], [rowEntry]: column } }));

  const reset = () => {
    setValues(buildInitialValues());
    setShowErrors(false);
    setStep(0);
  };

  const scrollToInvalid = () => {
    requestAnimationFrame(() => {
      const target = document.querySelector(".reg-field.is-invalid");
      target?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  const goNext = () => {
    const invalidInStep = stepFields(step).some((field) => invalidKeys.has(field.key));
    if (invalidInStep) {
      setShowErrors(true);
      scrollToInvalid();
      return;
    }
    setShowErrors(false);
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
    document.querySelector(".reg-modal-body")?.scrollTo({ top: 0 });
  };

  const goBack = () => {
    setShowErrors(false);
    setStep((prev) => Math.max(prev - 1, 0));
    document.querySelector(".reg-modal-body")?.scrollTo({ top: 0 });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (invalidKeys.size > 0) {
      setShowErrors(true);
      scrollToInvalid();
      return;
    }

    const params = new URLSearchParams();
    flatFields.forEach((field) => {
      const value = values[field.key];
      if (field.type === "checkbox") {
        value.forEach((item) => params.append(field.entry, item));
        if (value.includes(OTHER_VALUE)) {
          params.append(`${field.entry}.other_option_response`, values[`${field.key}__other`]);
        }
      } else if (field.type === "grid") {
        field.rows.forEach((row) => {
          if (value[row.entry]) params.append(row.entry, value[row.entry]);
        });
      } else if (value !== "") {
        params.append(field.entry, value);
      }
    });
    params.append("fvv", "1");
    params.append("pageHistory", "0,1,2");

    setStatus("submitting");
    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isLastStep = step === steps.length - 1;
  const currentStep = steps[step];

  return (
    <div className="reg-overlay" onMouseDown={onClose}>
      <div
        className="reg-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Регистрация на хакатон"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button type="button" className="reg-close" aria-label="Закрыть" onClick={onClose}>
          <IconX />
        </button>

        {status === "submitting" && (
          <div className="reg-loading" role="status" aria-live="polite">
            <span className="reg-spinner" aria-hidden="true" />
            <p>Отправляем заявку…</p>
          </div>
        )}

        <header className="reg-modal-head">
          <span className="reg-modal-mark" aria-hidden="true">
            <IconDna2 />
          </span>
          <div className="reg-modal-headings">
            {status !== "success" && (
              <span className="reg-step-badge">
                Шаг {step + 1} из {steps.length}
              </span>
            )}
            <h2>{currentStep.title}</h2>
            <p>{EVENT_SUBTITLE}</p>
          </div>
        </header>

        {status === "success" ? (
          <div className="reg-modal-body">
            <div className="reg-success" role="status">
              <span className="reg-success-icon" aria-hidden="true">
                <IconCheck />
              </span>
              <h3>Заявка отправлена</h3>
              <p>Спасибо! Мы получили вашу регистрацию и свяжемся с вами по указанному email.</p>
              <button type="button" className="reg-submit" onClick={onClose}>
                Закрыть
              </button>
            </div>
          </div>
        ) : (
          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            <div className="reg-modal-body">
              {currentStep.sectionIds.map((id) => {
                const section = sectionById[id];
                return (
                  <div key={section.id} className="reg-section">
                    {currentStep.sectionIds.length > 1 ? (
                      <h3 className="reg-section-title">{section.title}</h3>
                    ) : null}

                    {section.fields?.map((field) => (
                      <Field
                        key={field.key}
                        field={field}
                        values={values}
                        showErrors={showErrors}
                        invalid={invalidKeys.has(field.key)}
                        setValue={setValue}
                        toggleCheckbox={toggleCheckbox}
                        setGridValue={setGridValue}
                      />
                    ))}

                    {section.groups?.map((group) => (
                      <div key={group.title} className="reg-group">
                        <h4 className="reg-group-title">{group.title}</h4>
                        {group.fields.map((field) => (
                          <Field
                            key={field.key}
                            field={field}
                            values={values}
                            showErrors={showErrors}
                            invalid={invalidKeys.has(field.key)}
                            setValue={setValue}
                            toggleCheckbox={toggleCheckbox}
                            setGridValue={setGridValue}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })}

              {showErrors && stepFields(step).some((field) => invalidKeys.has(field.key)) && (
                <p className="reg-error-summary">Заполните обязательные поля, отмеченные звёздочкой.</p>
              )}
              {status === "error" && (
                <p className="reg-error-summary">Не удалось отправить заявку. Попробуйте ещё раз.</p>
              )}
            </div>

            <footer className="reg-modal-foot">
              {step === 0 ? (
                <button type="button" className="reg-ghost-btn" onClick={reset}>
                  <IconRefresh aria-hidden="true" />
                  Очистить
                </button>
              ) : (
                <button type="button" className="reg-ghost-btn" onClick={goBack}>
                  <IconArrowLeft aria-hidden="true" />
                  Назад
                </button>
              )}

              {isLastStep ? (
                <button type="submit" className="reg-submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
                  <IconCheck aria-hidden="true" />
                </button>
              ) : (
                <button type="button" className="reg-submit" onClick={goNext}>
                  Далее
                  <IconArrowRight aria-hidden="true" />
                </button>
              )}
            </footer>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ field, values, showErrors, invalid, setValue, toggleCheckbox, setGridValue }) {
  const isInvalid = showErrors && invalid;
  const fieldClass = `reg-field reg-field-${field.type}${isInvalid ? " is-invalid" : ""}`;

  if (field.type === "text" || field.type === "email") {
    const Icon = field.icon;
    return (
      <div className={fieldClass}>
        <label className="reg-label" htmlFor={field.key}>
          {field.label}
          {field.required && <span className="reg-required" aria-hidden="true"> *</span>}
        </label>
        <div className="reg-input-wrap">
          {Icon && (
            <span className="reg-input-icon" aria-hidden="true">
              <Icon />
            </span>
          )}
          <input
            id={field.key}
            className={`reg-input${Icon ? " has-icon" : ""}`}
            type={field.type === "email" ? "email" : "text"}
            placeholder={field.placeholder}
            value={values[field.key]}
            onChange={(event) => setValue(field.key, event.target.value)}
            required={field.required}
          />
        </div>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className={fieldClass}>
        <label className="reg-label" htmlFor={field.key}>
          {field.label}
          {field.required && <span className="reg-required" aria-hidden="true"> *</span>}
        </label>
        <textarea
          id={field.key}
          className="reg-input reg-textarea"
          rows={3}
          value={values[field.key]}
          onChange={(event) => setValue(field.key, event.target.value)}
          required={field.required}
        />
      </div>
    );
  }

  if (field.type === "cards") {
    return (
      <div className={fieldClass} role="radiogroup" aria-label={field.label}>
        <span className="reg-label">
          {field.label}
          {field.required && <span className="reg-required" aria-hidden="true"> *</span>}
        </span>
        <div className="reg-cards">
          {field.options.map((option) => {
            const Icon = option.icon;
            const active = values[field.key] === option.value;
            return (
              <button
                key={option.value}
                type="button"
                className={`reg-card${active ? " is-active" : ""}`}
                onClick={() => setValue(field.key, option.value)}
                aria-pressed={active}
              >
                <span className="reg-card-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="reg-card-label">{option.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (field.type === "radio") {
    return (
      <div className={fieldClass} role="radiogroup" aria-label={field.label}>
        <span className="reg-label">
          {field.label}
          {field.required && <span className="reg-required" aria-hidden="true"> *</span>}
        </span>
        <div className="reg-options">
          {field.options.map((option) => (
            <label key={option} className="reg-option">
              <input
                type="radio"
                name={field.key}
                value={option}
                checked={values[field.key] === option}
                onChange={() => setValue(field.key, option)}
              />
              <span className="reg-option-mark" aria-hidden="true" />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }

  if (field.type === "checkbox") {
    const selected = values[field.key];
    return (
      <div className={fieldClass}>
        <span className="reg-label">
          {field.label}
          {field.required && <span className="reg-required" aria-hidden="true"> *</span>}
        </span>
        <div className="reg-options">
          {field.options.map((option) => (
            <label key={option} className="reg-option">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleCheckbox(field.key, option)}
              />
              <span className="reg-option-mark reg-option-mark-box" aria-hidden="true" />
              <span>{option}</span>
            </label>
          ))}
          {field.other && (
            <label className="reg-option reg-option-other">
              <input
                type="checkbox"
                checked={selected.includes(OTHER_VALUE)}
                onChange={() => toggleCheckbox(field.key, OTHER_VALUE)}
              />
              <span className="reg-option-mark reg-option-mark-box" aria-hidden="true" />
              <span>Другое:</span>
              <input
                type="text"
                className="reg-input reg-other-input"
                value={values[`${field.key}__other`]}
                onChange={(event) => setValue(`${field.key}__other`, event.target.value)}
                onFocus={() => {
                  if (!selected.includes(OTHER_VALUE)) toggleCheckbox(field.key, OTHER_VALUE);
                }}
              />
            </label>
          )}
        </div>
      </div>
    );
  }

  if (field.type === "grid") {
    return (
      <div className={fieldClass}>
        <span className="reg-label">
          {field.label}
          {field.required && <span className="reg-required" aria-hidden="true"> *</span>}
        </span>
        <div className="reg-grid-scroll">
          <table className="reg-grid">
            <thead>
              <tr>
                <th />
                {field.columns.map((column) => (
                  <th key={column} className="reg-grid-col">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {field.rows.map((row) => (
                <tr key={row.entry}>
                  <th scope="row" className="reg-grid-row">
                    {row.label}
                  </th>
                  {field.columns.map((column) => (
                    <td key={column} className="reg-grid-cell">
                      <label className="reg-grid-radio">
                        <input
                          type="radio"
                          name={row.entry}
                          value={column}
                          checked={values[field.key][row.entry] === column}
                          onChange={() => setGridValue(field.key, row.entry, column)}
                          aria-label={`${row.label}: ${column}`}
                        />
                        <span className="reg-option-mark" aria-hidden="true" />
                      </label>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return null;
}
