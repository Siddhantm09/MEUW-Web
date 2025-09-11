import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MEWUWebsite from "./Mewu";
import DonationPage from "./components/DonationPage";
import HistoryPage from "./components/History";
import SecretaryMessagePage from "./components/SecretaryMessagePage";
import CommitteeStructure from "./components/CommiteeStructure";
import LegalPages from "./components/LegalPages";
import MembershipRegistration from "./components/MembershipRegistration";

import UpcomingMeetingsPage from "./components/UpcomingMeetingsPage";
import ProgramsPage from "./components/ProgramsPage";
import SponsorsPage from "./components/SponsorsPage";
import AchievementsPage from "./components/AchievementsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MEWUWebsite />} />
        <Route path="/donations" element={<DonationPage />} />
        <Route
          path="/membershipregistration"
          element={<MembershipRegistration />}
        />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/secretary-message" element={<SecretaryMessagePage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/upcoming-meetings" element={<UpcomingMeetingsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route
          path="/national-committee"
          element={<CommitteeStructure initialTab="national" />}
        />
        <Route
          path="/state-committee"
          element={<CommitteeStructure initialTab="state" />}
        />
        <Route path="/terms" element={<LegalPages initialPage="terms" />} />
        <Route path="/privacy" element={<LegalPages initialPage="privacy" />} />
      </Routes>
    </Router>
  );
}

export default App;
