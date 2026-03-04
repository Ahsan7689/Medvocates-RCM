import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt, 
  faEnvelope, 
  faPlus,
  faChartLine,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/hooks/useAuth';
import { db } from '@/lib/supabase';

/**
 * AdminDashboard Component
 * Main admin dashboard with overview and quick actions
 */
const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalInquiries: 0,
    newInquiries: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch blog stats
      const { data: allPosts } = await db.getBlogPosts();
      const { data: publishedPosts } = await db.getBlogPosts('published');
      const { data: draftPosts } = await db.getBlogPosts('draft');

      // Fetch inquiry stats
      const { data: allInquiries } = await db.getContactInquiries();
      const { data: newInquiries } = await db.getContactInquiries('new');

      setStats({
        totalPosts: allPosts?.length || 0,
        publishedPosts: publishedPosts?.length || 0,
        draftPosts: draftPosts?.length || 0,
        totalInquiries: allInquiries?.length || 0,
        newInquiries: newInquiries?.length || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const quickActions = [
    {
      icon: faPlus,
      title: 'Create Blog Post',
      description: 'Write a new article',
      link: '/admin/blog-editor',
      variant: 'primary',
    },
    {
      icon: faEnvelope,
      title: 'View Inquiries',
      description: 'Check contact form submissions',
      link: '/admin/inquiries',
      variant: 'secondary',
    },
  ];

  const statCards = [
    {
      icon: faFileAlt,
      label: 'Total Posts',
      value: stats.totalPosts,
      color: 'text-gold',
    },
    {
      icon: faChartLine,
      label: 'Published',
      value: stats.publishedPosts,
      color: 'text-success',
    },
    {
      icon: faFileAlt,
      label: 'Drafts',
      value: stats.draftPosts,
      color: 'text-text-muted',
    },
    {
      icon: faEnvelope,
      label: 'New Inquiries',
      value: stats.newInquiries,
      color: 'text-alert',
    },
  ];

  return (
    <div className="admin-dashboard min-h-screen bg-bg-primary">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-h2 font-serif font-bold text-text-primary mb-2">
              Admin Dashboard
            </h1>
            <p className="text-text-secondary">
              Welcome back, {user?.email}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="secondary">
                View Site
              </Button>
            </Link>
            <Button variant="ghost" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-text-primary">{stat.value}</p>
                  </div>
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    className={`text-3xl ${stat.color}`}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-h4 font-serif font-semibold text-text-primary mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card hoverable className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-sharp bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon icon={action.icon} className="text-xl text-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                          {action.title}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {action.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-h4 font-serif font-semibold text-text-primary mb-4">
            Management Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/admin/blog-editor">
              <Button variant="secondary" fullWidth className="justify-start">
                <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                Manage Blog Posts
              </Button>
            </Link>
            <Link to="/admin/inquiries">
              <Button variant="secondary" fullWidth className="justify-start">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Manage Inquiries
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;