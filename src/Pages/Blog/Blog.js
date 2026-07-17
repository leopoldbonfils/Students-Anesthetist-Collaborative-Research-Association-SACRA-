import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Loader } from '../../components/ui/Loader';
import { dataService } from '../../services/dataService';
import { Calendar, User, Clock, ChevronRight } from 'lucide-react';
import './Blog.css';

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await dataService.getBlogPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="blog-page animate-fade-in">
      <PageHeader
        title="News & Articles"
        description="Stay updated with our latest student anesthesia studies, educational webinars, and outreach campaigns."
      />

      {/* Featured Cover Story */}
      {featuredPost && (
        <section className="container section-padding">
          <SectionTitle title="Featured Story" subtitle="Our most recent research breakthrough from the fellowship." />
          <Card className="featured-blog-card" hoverEffect={true}>
            <div className="featured-blog-visual" style={{ position: 'relative', overflow: 'hidden' }}>
              {featuredPost.thumb ? (
                <img src={featuredPost.thumb} alt={featuredPost.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
              ) : (
                <div className="abstract-news-graphic">
                  <Clock size={48} className="news-icon-deco" />
                </div>
              )}
            </div>
            <div className="featured-blog-content">
              <Badge text={featuredPost.category} type="primary" className="blog-cat-badge" />
              <h2 className="featured-blog-title">{featuredPost.title}</h2>
              <p className="featured-blog-summary">{featuredPost.summary}</p>
              <p className="featured-blog-excerpt">{featuredPost.content}</p>
              
              <div className="blog-meta-row">
                <span className="meta-block"><User size={14} /> {featuredPost.author}</span>
                <span className="meta-block"><Calendar size={14} /> {featuredPost.date}</span>
                <span className="meta-block"><Clock size={14} /> {featuredPost.readTime}</span>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Regular Articles Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <SectionTitle
            title="Latest Publications & News"
            subtitle="Browse educational analyses, chapter announcements, and surgical check reports."
          />
          {isLoading ? (
            <Loader type="skeleton-card" count={3} />
          ) : (
            <div className="blog-grid">
              {regularPosts.map((post) => (
                <Card key={post.id} className="blog-grid-card" hoverEffect={true}>
                  <div className="blog-grid-visual-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
                    {post.thumb ? (
                      <img src={post.thumb} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                    ) : null}
                    <span className="placeholder-cat" style={{ zIndex: 1 }}>{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <Badge text={post.category} type="info" className="blog-card-cat" />
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-desc">{post.summary}</p>
                    
                    <div className="blog-grid-meta">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <div className="blog-card-footer">
                      <span className="blog-author-text">By {post.author}</span>
                      <span className="blog-read-more">
                        Read Story <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default Blog;
