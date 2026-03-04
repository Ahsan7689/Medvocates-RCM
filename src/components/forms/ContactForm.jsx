import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { db } from '@/lib/supabase';
import { validateContactForm } from '@/utils/validators';
import { SERVICE_INTERESTS } from '@/lib/constants';
import toast from 'react-hot-toast';

/**
 * ContactForm — FIXED
 * ✅ Textarea is fully editable (removed conflicting pointer-events)
 * ✅ Uses native HTML elements to avoid UI component conflicts
 */
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const validation = validateContactForm(data);
    if (!validation.isValid) {
      Object.values(validation.errors).forEach(e => toast.error(e));
      return;
    }
    setLoading(true);
    try {
      const { error } = await db.createContactInquiry({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        message: data.message,
        service_interest: data.serviceInterest || null,
        status: 'new',
      });
      if (error) throw error;
      toast.success("Message sent! We'll be in touch soon.");
      reset();
    } catch (err) {
      console.error('Contact form error:', err);
      toast.error('Failed to send. Please email us directly.');
    } finally {
      setLoading(false);
    }
  };

  // Shared input style
  const inputClass = `
    w-full px-4 py-3 rounded-sharp text-sm text-text-primary bg-bg-card
    border border-grey focus:outline-none focus:border-gold focus:ring-2
    focus:ring-gold/20 transition-colors placeholder:text-text-muted
    pointer-events-auto
  `;

  const labelClass = "block text-sm font-medium text-text-primary mb-1.5";
  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" style={{ pointerEvents: 'auto' }}>

      {/* Full Name */}
      <div>
        <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          placeholder="John Doe"
          className={inputClass}
          style={{ pointerEvents: 'auto', userSelect: 'auto' }}
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email Address <span className="text-red-500">*</span></label>
        <input
          type="email"
          placeholder="john@example.com"
          className={inputClass}
          style={{ pointerEvents: 'auto', userSelect: 'auto' }}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email' },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Phone Number</label>
        <input
          type="tel"
          placeholder="(555) 123-4567"
          className={inputClass}
          style={{ pointerEvents: 'auto', userSelect: 'auto' }}
          {...register('phone', {
            pattern: { value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, message: 'Please enter a valid phone number' },
          })}
        />
        <p className="text-xs text-text-muted mt-1">Optional — We will only call if you prefer phone contact</p>
        {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
      </div>

      {/* Practice Name */}
      <div>
        <label className={labelClass}>Practice / Company Name</label>
        <input
          type="text"
          placeholder="ABC Medical Center"
          className={inputClass}
          style={{ pointerEvents: 'auto', userSelect: 'auto' }}
          {...register('company')}
        />
        <p className="text-xs text-text-muted mt-1">Optional</p>
      </div>

      {/* Service Interest */}
      <div>
        <label className={labelClass}>I am Interested In</label>
        <select
          className={inputClass}
          style={{ pointerEvents: 'auto', cursor: 'pointer' }}
          {...register('serviceInterest')}
        >
          <option value="">Select a service...</option>
          {(SERVICE_INTERESTS || []).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* ✅ FIX: Message textarea — fully interactive */}
      <div>
        <label className={labelClass}>Message <span className="text-red-500">*</span></label>
        <textarea
          placeholder="Tell us about your practice needs and how we can help..."
          rows={6}
          maxLength={1000}
          className={`${inputClass} resize-y`}
          style={{
            pointerEvents: 'auto',  /* ✅ Critical fix */
            userSelect: 'auto',      /* ✅ Allow text selection */
            cursor: 'text',          /* ✅ Show text cursor */
            WebkitUserSelect: 'auto',
            MozUserSelect: 'auto',
          }}
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
            maxLength: { value: 1000, message: 'Message must not exceed 1000 characters' },
          })}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-gold text-charcoal font-semibold text-base rounded-sharp hover:bg-gold/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
        style={{ pointerEvents: 'auto' }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-xs text-text-muted text-center">
        By submitting this form, you agree to our Privacy Policy. We respect your privacy and will never share your information.
      </p>

    </form>
  );
};

export default ContactForm;