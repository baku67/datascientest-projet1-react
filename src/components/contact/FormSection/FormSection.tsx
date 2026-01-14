import { useTranslation } from "react-i18next";

function FormSection() {
  const { t } = useTranslation();

  return (
    <form className="contact-form">
      <label>
        {t("contact_form_name_label")}
        <input
          type="text"
          name="name"
          placeholder={t("contact_form_name_placeholder")}
        />
      </label>
      <label>
        {t("contact_form_forname_label")}
        <input
          type="text"
          name="forname"
          placeholder={t("contact_form_forname_placeholder")}
        />
      </label>
      <label>
        {t("contact_form_email_label")}
        <input
          type="email"
          name="email"
          placeholder={t("contact_form_email_placeholder")}
        />
      </label>
      <label>
        {t("contact_form_message_label")}
        <textarea
          name="message"
          placeholder={t("contact_form_message_placeholder")}
        ></textarea>
      </label>
      <button type="submit">{t("contact_form_submit_button")}</button>
    </form>
  );
}

export default FormSection;
