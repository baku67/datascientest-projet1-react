import { type FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./BlogCreatePage.scss";

type BlogFormValues = {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string;
};

const initialFormValues: BlogFormValues = {
  title: "",
  excerpt: "",
  content: "",
  author: "",
  tags: "",
};

function BlogCreatePage() {
  const { t } = useTranslation();
  const [formValues, setFormValues] =
    useState<BlogFormValues>(initialFormValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof BlogFormValues, value: string) => {
    setIsSubmitted(false);
    setFormValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Formulaire factice pour l'instant : à remplacer par un appel API plus tard.
    console.log("Nouvel article factice", formValues);

    setIsSubmitted(true);
    setFormValues(initialFormValues);
  };

  return (
    <div className="page-nav-footer">
      <NavBar />

      <main className="page__content">
        <section className="blog-create-page">
          <Link className="blog-back-button" to="/blog">
            {t("blog_article_back_button", {
              defaultValue: "← Retour au blog",
            })}
          </Link>

          <div className="blog-create-page__header">
            <p className="blog-create-page__eyebrow">
              {t("blog_create_eyebrow", { defaultValue: "Nouvel article" })}
            </p>
            <h1>
              {t("blog_create_title", {
                defaultValue: "Ajouter un article",
              })}
            </h1>
            <p>
              {t("blog_create_description", {
                defaultValue:
                  "Ce formulaire est factice pour le moment. Il permet de préparer l'écran de création avant le branchement au backend.",
              })}
            </p>
          </div>

          {isSubmitted && (
            <div className="blog-create-alert" role="status">
              <strong>
                {t("blog_create_success_title", {
                  defaultValue: "Article simulé !",
                })}
              </strong>
              <span>
                {t("blog_create_success_message", {
                  defaultValue:
                    "Le formulaire a bien été validé, mais rien n'est encore enregistré en base.",
                })}
              </span>
            </div>
          )}

          <form className="blog-create-form" onSubmit={onSubmit}>
            <div className="blog-create-form__row">
              <label className="blog-create-field">
                <span>
                  {t("blog_create_form_title_label", {
                    defaultValue: "Titre",
                  })}
                </span>
                <input
                  required
                  type="text"
                  value={formValues.title}
                  onChange={(event) => updateField("title", event.target.value)}
                  placeholder={t("blog_create_form_title_placeholder", {
                    defaultValue: "Ex: Les nouveautés React à surveiller",
                  })}
                />
              </label>

              <label className="blog-create-field">
                <span>
                  {t("blog_create_form_author_label", {
                    defaultValue: "Auteur",
                  })}
                </span>
                <input
                  type="text"
                  value={formValues.author}
                  onChange={(event) =>
                    updateField("author", event.target.value)
                  }
                  placeholder={t("blog_create_form_author_placeholder", {
                    defaultValue: "Ex: Basile",
                  })}
                />
              </label>
            </div>

            <label className="blog-create-field">
              <span>
                {t("blog_create_form_excerpt_label", {
                  defaultValue: "Résumé / preview",
                })}
              </span>
              <textarea
                required
                rows={3}
                value={formValues.excerpt}
                onChange={(event) => updateField("excerpt", event.target.value)}
                placeholder={t("blog_create_form_excerpt_placeholder", {
                  defaultValue:
                    "Écris une courte introduction qui apparaîtra sur la card de preview.",
                })}
              />
            </label>

            <label className="blog-create-field">
              <span>
                {t("blog_create_form_content_label", {
                  defaultValue: "Contenu",
                })}
              </span>
              <textarea
                required
                rows={8}
                value={formValues.content}
                onChange={(event) => updateField("content", event.target.value)}
                placeholder={t("blog_create_form_content_placeholder", {
                  defaultValue: "Rédige le contenu complet de l'article...",
                })}
              />
            </label>

            <label className="blog-create-field">
              <span>
                {t("blog_create_form_tags_label", {
                  defaultValue: "Tags",
                })}
              </span>
              <input
                type="text"
                value={formValues.tags}
                onChange={(event) => updateField("tags", event.target.value)}
                placeholder={t("blog_create_form_tags_placeholder", {
                  defaultValue: "react, frontend, bonnes pratiques",
                })}
              />
            </label>

            <div className="blog-create-form__actions">
              <Link className="blog-create-form__cancel" to="/blog">
                {t("blog_create_cancel_button", { defaultValue: "Annuler" })}
              </Link>

              <button className="blog-create-form__submit" type="submit">
                {t("blog_create_submit_button", {
                  defaultValue: "Simuler l'ajout",
                })}
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default BlogCreatePage;
