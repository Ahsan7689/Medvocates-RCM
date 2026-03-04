import { useState } from 'react';
import { Input, Button } from '@/components/ui';
import { db } from '@/lib/supabase';
import { validateNewsletter } from '@/utils/validators';
import toast from 'react-hot-toast';

/**
 * NewsletterForm Component
 * Email subscription form for footer
 */
const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    const { isValid, error } = validateNewsletter(email);
    if (!isValid) {
      toast.error(error);
      return;
    }

    setLoading(true);

    try {
      const { error: dbError } = await db.subscribeToNewsletter(email);

      if (dbError) {
        // Check for duplicate email
        if (dbError.code === '23505') {
          toast.error('This email is already subscribed!');
        } else {
          throw dbError;
        }
      } else {
        toast.success('Successfully subscribed to newsletter!');
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth={false}
        className="flex-1"
      />
      <Button
        type="submit"
        variant="secondary"
        size="md"
        loading={loading}
        disabled={loading}
      >
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;