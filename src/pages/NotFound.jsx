import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FadeIn } from '@/components/animations';

/**
 * 404 Not Found Page
 */
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <h1 className="text-9xl font-serif font-bold text-gold mb-4">
              404
            </h1>

            {/* Error Message */}
            <h2 className="text-h2 font-serif font-bold text-text-primary mb-4">
              Page Not Found
            </h2>

            <p className="text-lg text-text-secondary mb-8 max-w-md mx-auto">
              The page you are looking for does not exist or has been moved. 
              Lets get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<FontAwesomeIcon icon={faHome} />}
                >
                  Go to Homepage
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.history.back()}
                leftIcon={<FontAwesomeIcon icon={faArrowLeft} />}
              >
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-grey">
              <p className="text-sm text-text-muted mb-4">
                Looking for something specific?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <Link to="/solutions" className="text-gold hover:underline">
                  Our Solutions
                </Link>
                <span className="text-grey">•</span>
                <Link to="/who-we-are" className="text-gold hover:underline">
                  About Us
                </Link>
                <span className="text-grey">•</span>
                <Link to="/contact" className="text-gold hover:underline">
                  Contact Us
                </Link>
                <span className="text-grey">•</span>
                <Link to="/blogs" className="text-gold hover:underline">
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default NotFound;