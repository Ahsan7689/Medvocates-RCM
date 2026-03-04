import { Link } from 'react-router-dom';
import { Card, CardContent, Badge } from '@/components/ui';
import { formatDate, truncate, calculateReadingTime, extractTextFromRichText } from '@/lib/utils';

/**
 * BlogCard Component
 * Individual blog post card for grid display
 */
const BlogCard = ({ post }) => {
  const {
    slug,
    title,
    excerpt,
    featured_image,
    category,
    published_at,
    content,
    author_name,
  } = post;

  // Extract plain text from rich content for reading time
  const plainText = extractTextFromRichText(content);
  const readingTime = calculateReadingTime(plainText);

  return (
    <Link to={`/blogs/${slug}`} className="block h-full group">
      <Card hoverable className="h-full flex flex-col">
        {/* Featured Image */}
        {featured_image && (
          <div className="aspect-video w-full overflow-hidden rounded-t-card">
            <img 
              src={featured_image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        )}

        <CardContent className="flex-1 flex flex-col p-6">
          {/* Category Badge */}
          {category && (
            <div className="mb-3">
              <Badge variant="gold" size="sm">
                {category}
              </Badge>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-serif font-semibold text-text-primary mb-3 group-hover:text-gold transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-grow">
              {truncate(excerpt, 120)}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-text-muted pt-4 border-t border-grey">
            <div className="flex items-center space-x-3">
              {author_name && <span>{author_name}</span>}
              {published_at && (
                <>
                  <span>•</span>
                  <span>{formatDate(published_at, 'short')}</span>
                </>
              )}
            </div>
            <span>{readingTime}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;