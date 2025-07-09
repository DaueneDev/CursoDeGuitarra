import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Payments } from './Payments';
import { Thankyou } from './Thankyou';
function MainPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

function PaymentsPage() {
  const navigate = useNavigate();
  return <Payments onConfirm={() => navigate('/thankyou')} onBack={() => navigate('/')} />;
}

function ThankyouPage() {
  const navigate = useNavigate();
  return <Thankyou onBack={() => navigate('/')} />;
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
      </Routes>
    </Router>
  );
}