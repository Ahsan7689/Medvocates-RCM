// ============================================
// FORM VALIDATION HELPERS
// ============================================

/**
 * Contact form validation
 */
export const validateContactForm = (data) => {
  const errors = {};

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation (optional but if provided must be valid)
  if (data.phone) {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(data.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Blog post validation
 */
export const validateBlogPost = (data) => {
  const errors = {};

  // Title validation
  if (!data.title || data.title.trim().length < 5) {
    errors.title = 'Title must be at least 5 characters';
  }

  // Slug validation
  if (!data.slug || data.slug.trim().length < 3) {
    errors.slug = 'Slug must be at least 3 characters';
  }

  // Content validation
  if (!data.content || data.content.length === 0) {
    errors.content = 'Content cannot be empty';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Newsletter validation
 */
export const validateNewsletter = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email || !emailRegex.test(email)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address',
    };
  }

  return { isValid: true, error: null };
};