import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Calculators from '@/pages/Calculators';
import ExerciseLibrary from '@/pages/ExerciseLibrary';
import Rehabilitation from '@/pages/Rehabilitation';
import Nutrition from '@/pages/Nutrition';
import About from '@/pages/About';
import Analysis from '@/pages/Analysis';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import Dashboard from '@/pages/Dashboard';
import ScrollToTop from './components/layout/ScrollToTop';
import NotFound from './pages/NotFound';
import EvidenceBase from '@/pages/EvidenceBase';
import Methodology from '@/pages/Methodology';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const NO_FOOTER_ROUTES = ['/sign-in', '/sign-up'];

function AppLayout() {
  const { pathname } = useLocation();
  const hideFooter = NO_FOOTER_ROUTES.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/exercises" element={<ExerciseLibrary />} />
          <Route path="/rehabilitation" element={<Rehabilitation />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/about" element={<About />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/evidence-base" element={<EvidenceBase />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </AuthProvider>
  );
}