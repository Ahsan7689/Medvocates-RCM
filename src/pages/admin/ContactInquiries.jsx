import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button, Badge, Select, Spinner } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faPhone, faBuilding, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { db } from '@/lib/supabase';
import { formatDate } from '@/lib/utils';
import toast from 'react-hot-toast';

/**
 * ContactInquiries Component
 * View and manage contact form submissions
 */
const ContactInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchInquiries();
  }, [filter]);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const { data, error } = filter === 'all' 
        ? await db.getContactInquiries()
        : await db.getContactInquiries(filter);

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast.error('Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      const { error } = await db.updateContactInquiryStatus(id, newStatus);
      if (error) throw error;

      toast.success('Status updated');
      fetchInquiries();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      new: 'alert',
      contacted: 'gold',
      resolved: 'success',
    };
    return <Badge variant={variants[status] || 'default'}>{status}</Badge>;
  };

  const filterOptions = [
    { value: 'all', label: 'All Inquiries' },
    { value: 'new', label: 'New' },
    { value: 'contacted', label: 'Contacted' },
    { value: 'resolved', label: 'Resolved' },
  ];

  const statusOptions = [
    { value: 'new', label: 'New' },
    { value: 'contacted', label: 'Contacted' },
    { value: 'resolved', label: 'Resolved' },
  ];

  return (
    <div className="contact-inquiries min-h-screen bg-bg-primary">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/admin/dashboard">
              <Button variant="ghost">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-h2 font-serif font-bold text-text-primary">
              Contact Inquiries
            </h1>
          </div>

          <div className="w-64">
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              options={filterOptions}
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center py-12">
            <Spinner size="lg" />
          </div>
        )}

        {/* No Inquiries */}
        {!loading && inquiries.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-text-secondary text-lg">
                No inquiries found.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Inquiries List */}
        {!loading && inquiries.length > 0 && (
          <div className="space-y-4">
            {inquiries.map((inquiry) => (
              <Card key={inquiry.id} hoverable>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-text-primary">
                          {inquiry.name}
                        </h3>
                        {getStatusBadge(inquiry.status)}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon icon={faEnvelope} />
                          <a 
                            href={`mailto:${inquiry.email}`}
                            className="hover:text-gold transition-colors"
                          >
                            {inquiry.email}
                          </a>
                        </div>
                        {inquiry.phone && (
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <a 
                              href={`tel:${inquiry.phone}`}
                              className="hover:text-gold transition-colors"
                            >
                              {inquiry.phone}
                            </a>
                          </div>
                        )}
                        {inquiry.company && (
                          <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faBuilding} />
                            <span>{inquiry.company}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-text-muted mb-2">
                        {formatDate(inquiry.created_at, 'relative')}
                      </p>
                      {inquiry.service_interest && (
                        <Badge variant="default" size="sm">
                          {inquiry.service_interest}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4 p-4 bg-bg-secondary rounded-card">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {inquiry.message}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center space-x-3">
                    <Select
                      value={inquiry.status}
                      onChange={(e) => updateStatus(inquiry.id, e.target.value)}
                      options={statusOptions}
                      className="w-48"
                    />
                    <a href={`mailto:${inquiry.email}`}>
                      <Button variant="secondary" size="sm">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Reply
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Count */}
        {!loading && inquiries.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-text-muted text-sm">
              Showing {inquiries.length} {filter === 'all' ? '' : filter} inquir{inquiries.length === 1 ? 'y' : 'ies'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInquiries;