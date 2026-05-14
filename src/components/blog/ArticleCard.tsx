import { Link } from "react-router-dom";
import "./ArticleCard.scss";

export type ArticleCardStat = {
  label: string;
  value: string;
};

type ArticleCardProps = {
  title: string;
  excerpt: string;
  to: string;
  ariaLabel: string;
  publishedAt: string;
  publishedAtLabel: string;
  readingTimeLabel: string;
  tags?: string[];
  stats?: ArticleCardStat[];
};

function ArticleCard({
  title,
  excerpt,
  to,
  ariaLabel,
  publishedAt,
  publishedAtLabel,
  readingTimeLabel,
  tags = [],
  stats = [],
}: ArticleCardProps) {
  return (
    <Link className="article-card" to={to} aria-label={ariaLabel}>
      <div className="article-card__content">
        <div className="article-card__meta">
          <time dateTime={publishedAt}>{publishedAtLabel}</time>
          <span aria-hidden="true">•</span>
          <span>{readingTimeLabel}</span>
        </div>

        <h3>{title}</h3>
        <p>{excerpt}</p>

        {tags.length > 0 && (
          <div className="article-card__tags" aria-label="Tags">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )}
      </div>

      {stats.length > 0 && (
        <div className="article-card__stats" aria-label="Statistiques">
          {stats.map((stat) => (
            <span key={stat.label}>{stat.value}</span>
          ))}
        </div>
      )}
    </Link>
  );
}

export default ArticleCard;
