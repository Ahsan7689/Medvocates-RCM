import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import { Layout } from '@/components/layout';

// Pages
import Home from '@/pages/Home';
import WhoWeAre from '@/pages/WhoWeAre';
import Contact from '@/pages/Contact';
import HIPAACompliance from '@/pages/HIPAACompliance';
import ChatWidget from '@/components/ChatWidget';
// Solution Pages
import VirtualAssistance from '@/pages/solutions/VirtualAssistance';
import MedicalBilling from '@/pages/solutions/MedicalBilling';
import Credentialing from '@/pages/solutions/Credentialing';
import DMESetup from '@/pages/solutions/DMESetup';
import WebsiteDevelopment from '@/pages/solutions/WebsiteDevelopment';
import SocialMediaMarketing from '@/pages/solutions/SocialMediaMarketing';
import GoogleBusinessSetup from '@/pages/solutions/GoogleBusinessSetup';
import GraphicDesign from '@/pages/solutions/GraphicDesign';

// Specialty Pages
import DME from '@/pages/specialties/DME';
import Pharmacy from '@/pages/specialties/Pharmacy';
import Laboratories from '@/pages/specialties/Laboratories';
import InternalMedicine from '@/pages/specialties/InternalMedicine';
import FamilyMedicine from '@/pages/specialties/FamilyMedicine';
import Gastroenterology from '@/pages/specialties/Gastroenterology';
import WoundCare from '@/pages/specialties/WoundCare';
import ASC from '@/pages/specialties/ASC';
import Ophthalmology from '@/pages/specialties/Ophthalmology';
import HomeHealth from '@/pages/specialties/HomeHealth';
import Dental from '@/pages/specialties/Dental';

// Blog Pages
import BlogList from '@/pages/blog/BlogList';
import BlogDetail from '@/pages/blog/BlogDetail';

// Admin Pages
import AdminLogin from '@/pages/admin/AdminLogin';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import BlogEditor from '@/pages/admin/BlogEditor';
import ContactInquiries from '@/pages/admin/ContactInquiries';
import ProtectedRoute from '@/pages/admin/ProtectedRoute';

// 404 Page
import NotFound from '@/pages/NotFound';

/**
 * Main App Component
 * Routing and global providers
 */
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hipaa-compliance" element={<HIPAACompliance />} />
              
              {/* Solution Pages */}
              <Route path="/solutions/virtual-assistance" element={<VirtualAssistance />} />
              <Route path="/solutions/medical-billing" element={<MedicalBilling />} />
              <Route path="/solutions/credentialing" element={<Credentialing />} />
              <Route path="/solutions/dme-setup" element={<DMESetup />} />
              <Route path="/solutions/website-development" element={<WebsiteDevelopment />} />
              <Route path="/solutions/social-media-marketing" element={<SocialMediaMarketing />} />
              <Route path="/solutions/google-business-setup" element={<GoogleBusinessSetup />} />
              <Route path="/solutions/graphic-design" element={<GraphicDesign />} />

              {/* Specialty Pages */}
              <Route path="/specialties/dme" element={<DME />} />
              <Route path="/specialties/pharmacy" element={<Pharmacy />} />
              <Route path="/specialties/laboratories" element={<Laboratories />} />
              <Route path="/specialties/internal-medicine" element={<InternalMedicine />} />
              <Route path="/specialties/family-medicine" element={<FamilyMedicine />} />
              <Route path="/specialties/gastroenterology" element={<Gastroenterology />} />
              <Route path="/specialties/wound-care" element={<WoundCare />} />
              <Route path="/specialties/asc" element={<ASC />} />
              <Route path="/specialties/ophthalmology" element={<Ophthalmology />} />
              <Route path="/specialties/home-health" element={<HomeHealth />} />
              <Route path="/specialties/dental" element={<Dental />} />

              {/* Blog Pages */}
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />

              {/* Admin Pages */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blog-editor"
                element={
                  <ProtectedRoute>
                    <BlogEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blog-editor/:id"
                element={
                  <ProtectedRoute>
                    <BlogEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/inquiries"
                element={
                  <ProtectedRoute>
                    <ContactInquiries />
                  </ProtectedRoute>
                }
              />

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--bg-card)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-card)',
              },
              success: {
                iconTheme: {
                  primary: 'var(--color-success)',
                  secondary: 'var(--bg-card)',
                },
              },
              error: {
                iconTheme: {
                  primary: 'var(--color-alert)',
                  secondary: 'var(--bg-card)',
                },
              },
            }}
          />
        </Router>
      <ChatWidget />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;