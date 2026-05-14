import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/Footer/Footer";
import NavBar from "../../components/ui/NavBar/NavBar";
import "./BlogPage.scss";
import { Link } from "react-router-dom";

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

type DummyPostsResponse = {
  posts: DummyPost[];
  total: number;
  skip: number;
  limit: number;
};

type BlogArticlePreview = DummyPost & {
  publishedAt: string;
  readingTime: number;
};

const BLOG_API_URL =
  "https://dummyjson.com/posts?limit=5&select=id,title,body,tags,reactions,views,userId";

function buildFakePublicationDate(index: number) {
  const date = new Date("2026-05-01T10:00:00.000Z");
  date.setDate(date.getDate() - index * 4);

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

function BlogPage() {
  const { t } = useTranslation();
  const [articles, setArticles] = useState<BlogArticlePreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchArticles() {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        const response = await fetch(BLOG_API_URL, {
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`);
        }

        const data = (await response.json()) as DummyPostsResponse;

        setArticles(
          data.posts.map((post, index) => ({
            ...post,
            publishedAt: buildFakePublicationDate(index),
            readingTime: getReadingTime(post.body),
          })),
        );
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setErrorMessage(
          t("blog_articles_fetch_error", {
            defaultValue: "Impossible de charger les articles pour le moment.",
          }),
        );
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchArticles();

    return () => abortController.abort();
  }, [t]);

  const totalArticlesLabel = useMemo(
    () =>
      t("blog_articles_count", {
        count: articles.length,
        defaultValue: "{{count}} articles disponibles",
      }),
    [articles.length, t],
  );

  return (
    <div className="page-nav-footer">
      <NavBar />
      <main className="page__content">
        <section className="blog-intro">
          <p className="blog-intro__eyebrow">
            {t("blog_page_eyebrow", { defaultValue: "Blog" })}
          </p>
          <h1>{t("blog_page_title")}</h1>
          <p>{t("blog_page_description")}</p>
        </section>

        <section
          className="blog-articles"
          aria-labelledby="blog-articles-title"
        >
          <div className="blog-articles__header">
            <div>
              <p className="blog-articles__eyebrow">
                {t("blog_articles_section_eyebrow", {
                  defaultValue: "Dernières publications",
                })}
              </p>
              <h2 id="blog-articles-title">
                {t("blog_articles_section_title", {
                  defaultValue: "Articles à découvrir",
                })}
              </h2>
            </div>

            <div className="blog-articles__actions">
              {!isLoading && !errorMessage && (
                <span className="blog-articles__count">
                  {totalArticlesLabel}
                </span>
              )}

              <Link className="blog-add-button" to="/blog/new">
                {t("blog_add_article_button", {
                  defaultValue: "Ajouter un article",
                })}
              </Link>
            </div>
          </div>

          {isLoading && (
            <div className="blog-state" role="status">
              {t("blog_articles_loading", {
                defaultValue: "Chargement des articles...",
              })}
            </div>
          )}

          {!isLoading && errorMessage && (
            <div className="blog-state blog-state--error" role="alert">
              {errorMessage}
            </div>
          )}

          {!isLoading && !errorMessage && (
            <div className="blog-card-list">
              {articles.map((article) => (
                <article className="blog-card" key={article.id}>
                  <div className="blog-card__content">
                    <div className="blog-card__meta">
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

                    <h3>{article.title}</h3>
                    <p>{article.body}</p>

                    <div className="blog-card__tags" aria-label="Tags">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="blog-card__stats" aria-label="Statistiques">
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
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;
