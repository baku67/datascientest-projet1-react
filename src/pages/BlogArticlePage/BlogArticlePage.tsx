import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./BlogArticlePage.scss";

type DummyPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions?: {
    likes: number;
    dislikes: number;
  };
  views?: number;
  userId: number;
};

type BlogArticle = DummyPost & {
  publishedAt: string;
  readingTime: number;
};

const BLOG_ARTICLE_API_BASE_URL = "https://dummyjson.com/posts";

function buildFakePublicationDate(articleId: number) {
  const date = new Date("2026-05-01T10:00:00.000Z");
  date.setDate(date.getDate() - (articleId - 1) * 4);

  return date.toISOString();
}

function getReadingTime(content: string) {
  const wordsCount = content.trim().split(/\s+/).length;

  return Math.max(1, Math.ceil(wordsCount / 200));
}

function formatPublicationDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function BlogArticlePage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const articleId = useMemo(() => Number(id), [id]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchArticle() {
      if (!Number.isInteger(articleId) || articleId <= 0) {
        setArticle(null);
        setErrorMessage(
          t("blog_article_not_found", {
            defaultValue: "Article introuvable.",
          }),
        );
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setErrorMessage(null);

        const response = await fetch(
          `${BLOG_ARTICLE_API_BASE_URL}/${articleId}?select=id,title,body,tags,reactions,views,userId`,
          { signal: abortController.signal },
        );

        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`);
        }

        const data = (await response.json()) as DummyPost;

        if (!data.id) {
          throw new Error("Article introuvable");
        }

        setArticle({
          ...data,
          publishedAt: buildFakePublicationDate(data.id),
          readingTime: getReadingTime(data.body),
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setArticle(null);
        setErrorMessage(
          t("blog_article_fetch_error", {
            defaultValue: "Impossible de charger cet article pour le moment.",
          }),
        );
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchArticle();

    return () => abortController.abort();
  }, [articleId, t]);

  return (
    <div className="page-nav-footer">
      <NavBar />
      <main className="page__content">
        <section className="blog-detail">
          <Link className="blog-back-button" to="/blog">
            {t("blog_article_back_button", {
              defaultValue: "← Retour au blog",
            })}
          </Link>

          {isLoading && (
            <div className="blog-detail-state" role="status">
              {t("blog_article_loading", {
                defaultValue: "Chargement de l'article...",
              })}
            </div>
          )}

          {!isLoading && errorMessage && (
            <div
              className="blog-detail-state blog-detail-state--error"
              role="alert"
            >
              {errorMessage}
            </div>
          )}

          {!isLoading && !errorMessage && article && (
            <article className="blog-detail-card">
              <header className="blog-detail-card__header">
                <p className="blog-detail-card__eyebrow">
                  {t("blog_article_detail_eyebrow", {
                    defaultValue: "Article",
                  })}
                </p>

                <h1>{article.title}</h1>

                <div className="blog-detail-card__meta">
                  <span>
                    {t("blog_article_author", {
                      author: `User #${article.userId}`,
                      defaultValue: "Par {{author}}",
                    })}
                  </span>
                  <span aria-hidden="true">•</span>
                  <time dateTime={article.publishedAt}>
                    {formatPublicationDate(article.publishedAt)}
                  </time>
                  <span aria-hidden="true">•</span>
                  <span>
                    {t("blog_article_reading_time", {
                      count: article.readingTime,
                      defaultValue: "{{count}} min de lecture",
                    })}
                  </span>
                </div>
              </header>

              <div
                className="blog-detail-card__stats"
                aria-label="Statistiques"
              >
                <span>
                  {t("blog_article_views", {
                    count: article.views ?? 0,
                    defaultValue: "{{count}} vues",
                  })}
                </span>
                <span>
                  {t("blog_article_likes", {
                    count: article.reactions?.likes ?? 0,
                    defaultValue: "{{count}} likes",
                  })}
                </span>
              </div>

              <div className="blog-detail-card__content">
                <h2>
                  {t("blog_article_content_title", {
                    defaultValue: "Contenu de l'article",
                  })}
                </h2>
                <p>{article.body}</p>
              </div>

              <footer className="blog-detail-card__footer">
                <div>
                  <p className="blog-detail-card__tags-label">
                    {t("blog_article_tags_label", {
                      defaultValue: "Tags",
                    })}
                  </p>
                  <div className="blog-detail-card__tags">
                    {article.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                </div>
              </footer>
            </article>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BlogArticlePage;
