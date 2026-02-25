
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import TripListScreen from './screens/TripListScreen';
import TripDetailScreen from './screens/TripDetailScreen';
import BookingScreen from './screens/BookingScreen';
import ChatScreen from './screens/ChatScreen';
import ReviewScreen from './screens/ReviewScreen';
import ProfileScreen from './screens/ProfileScreen';
import PublishScreen from './screens/PublishScreen';
import IdentityVerificationScreen from './screens/IdentityVerificationScreen';
import TrustProfileScreen from './screens/TrustProfileScreen';
import ReportUserScreen from './screens/ReportUserScreen';
import ModerationDashboardScreen from './screens/ModerationDashboardScreen';
import ReportDetailScreen from './screens/ReportDetailScreen';
import SafetyWarningScreen from './screens/SafetyWarningScreen';
import PremiumScreen from './screens/PremiumScreen';
import EarningsScreen from './screens/EarningsScreen';
import ReferralScreen from './screens/ReferralScreen';
import CommunityScreen from './screens/CommunityScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import WelcomeBonusScreen from './screens/WelcomeBonusScreen';
import TicketScreen from './screens/TicketScreen';
import TripTrackingScreen from './screens/TripTrackingScreen';
import WomenOnlyScreen from './screens/WomenOnlyScreen';
import WomenOnlyResultsScreen from './screens/WomenOnlyResultsScreen';
import WomenVerificationScreen from './screens/WomenVerificationScreen';

import CancelTripScreen from './screens/CancelTripScreen';

import RefundConfirmationScreen from './screens/RefundConfirmationScreen';

import SuspendedAccountScreen from './screens/SuspendedAccountScreen';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <Routes>
              <Route path="/" element={<OnboardingScreen />} />
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/welcome-bonus" element={<WelcomeBonusScreen />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/trips" element={<TripListScreen />} />
              <Route path="/trip-detail" element={<TripDetailScreen />} />
              <Route path="/booking" element={<BookingScreen />} />
              <Route path="/ticket" element={<TicketScreen />} />
              <Route path="/cancel-trip" element={<CancelTripScreen />} />
              <Route path="/refund-confirmation" element={<RefundConfirmationScreen />} />
              <Route path="/suspended-account" element={<SuspendedAccountScreen />} />
              <Route path="/trip-tracking" element={<TripTrackingScreen />} />
              <Route path="/women-only" element={<WomenOnlyScreen />} />
              <Route path="/women-verification" element={<WomenVerificationScreen />} />
              <Route path="/women-only-results" element={<WomenOnlyResultsScreen />} />
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="/review" element={<ReviewScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/publish" element={<PublishScreen />} />
              <Route path="/identity-verification" element={<IdentityVerificationScreen />} />
              <Route path="/trust-profile" element={<TrustProfileScreen />} />
              <Route path="/report-user" element={<ReportUserScreen />} />
              <Route path="/safety-warning" element={<SafetyWarningScreen />} />
              <Route path="/premium" element={<PremiumScreen />} />
              <Route path="/earnings" element={<EarningsScreen />} />
              <Route path="/referral" element={<ReferralScreen />} />
              <Route path="/community" element={<CommunityScreen />} />
              <Route path="/checkout" element={<CheckoutScreen />} />
              <Route path="/admin/moderation" element={<ModerationDashboardScreen />} />
              <Route path="/admin/report/:id" element={<ReportDetailScreen />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  );
};

export default App;