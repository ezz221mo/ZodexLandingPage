import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import LandingPage from '@pages/LandingPage';

function App() {
  return (
    <div className="min-h-screen bg-[#090A0F]">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
