import { useEffect, useMemo, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconDna2,
  IconRefresh,
  IconX,
} from "@tabler/icons-react";
import {
  EVENT_SUBTITLE,
  FORM_ACTION,
  OTHER_VALUE,
  sections,
  steps,
} from "./config/registration.config";

const sectionById = Object.fromEntries(sections.map((section) => [section.id, section]));

function sectionFields(section) {
  return [...(section.fields ?? []), ...(section.groups ?? []).flatMap((group) => group.fields)];
}

const flatFields = sections.flatMap(sectionFields);

function stepFields(stepIndex) {
  return steps[stepIndex].sectionIds.flatMap((id) => sectionFields(sectionById[id]));
}

function isMultiValueField(field) {
  return field.type === "checkbox" || (field.type === "cards" && field.multiple);
}

function buildInitialValues() {
  const values = {};
  flatFields.forEach((field) => {
    if (isMultiValueField(field)) values[field.key] = [];
    else if (field.type === "grid") values[field.key] = {};
    else values[field.key] = "";
    if (field.other) values[`${field.key}__other`] = "";
  });
  return values;
}

function isFieldValid(field, values) {
  if (!field.required) return true;
  const value = values[field.key];
  if (isMultiValueField(field)) {
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
      if (isMultiValueField(field)) {
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
    } catch (error) {
      console.error(error);
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
                <button
                  key="submit"
                  type="submit"
                  className="reg-submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
                  <IconCheck aria-hidden="true" />
                </button>
              ) : (
                <button key="next" type="button" className="reg-submit" onClick={goNext}>
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
    const multiple = Boolean(field.multiple);
    const selected = values[field.key];

    return (
      <div className={fieldClass} role={multiple ? "group" : "radiogroup"} aria-label={field.label}>
        <span className="reg-label">
          {field.label}
          {field.required && <span className="reg-required" aria-hidden="true"> *</span>}
        </span>
        <div className="reg-cards">
          {field.options.map((option) => {
            const Icon = option.icon;
            const active = multiple
              ? selected.includes(option.value)
              : selected === option.value;
            return (
              <button
                key={option.value}
                type="button"
                className={`reg-card${active ? " is-active" : ""}`}
                onClick={() =>
                  multiple
                    ? toggleCheckbox(field.key, option.value)
                    : setValue(field.key, option.value)
                }
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
