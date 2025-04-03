import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import BedPage from './pages/BedPage';
import SofaPage from './pages/SofaPage';
import Header from './components/Header'; // 다른 페이지들 헤더
import Footer from './components/Footer';
import SignupModal from './components/SignupModal.jsx';
import LoginModal from "./components/LoginModal.jsx";
import useModal from './hooks/useModal';
import CartPage from './pages/CartPage.jsx';
// 침대 상세페이지
import LatexBed from './pages/BedDetailPage/LatexBed.jsx';
import SuperSingleBed from "./pages/BedDetailPage/SuperSingleBed.jsx";
import LowBed from "./pages/BedDetailPage/LowBed.jsx";
import FabricBed from "./pages/BedDetailPage/FabricBed.jsx";
import MemoryFoam from "./pages/BedDetailPage/MemoryFoam.jsx";
import PremiumLatexBed from "./pages/BedDetailPage/PremiumLatexBed.jsx";
// 소파 상세페이지 import
import FabricSofa from './pages/SofaDetailPage/FabricSofa.jsx';
import CowLeatherSofa from "./pages/SofaDetailPage/CowLeatherSofa.jsx";
import MicrofiberSofa from "./pages/SofaDetailPage/MicrofiberSofa.jsx";
import MultiRoundSofa from "./pages/SofaDetailPage/MultiRoundSofa.jsx";
import VintageSofa from "./pages/SofaDetailPage/VintageSofa.jsx";
import PremiumSofa from "./pages/SofaDetailPage/PremiumSofa.jsx";



  const App = () => {

    const { isModalOpen, openModal, closeModal, isLoginModalOpen, openLoginModal, closeLoginModal } = useModal();  // 모달 상태 관리
    return (
      <BrowserRouter basename="/lunacasa">
        {/* 회원가입 및 로그인 모달 */}
        {isModalOpen && <SignupModal closeModal={closeModal} />}
        {isLoginModalOpen && <LoginModal closeLoginModal={closeLoginModal} />}
        
        {/* 라우트 설정 */}
        <Header openModal={openModal} openLoginModal={openLoginModal} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* 메인 페이지 카테고리 이동 */}
          <Route path="/bed" element={<BedPage />}/>
          <Route path="/sofa" element={<SofaPage />}/>
          {/* 침대 페이지 */}
          <Route path="/bedPage" element={<BedPage />} />
          <Route path="/sofaPage" element={<SofaPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/latex-bed-detail-page" element={<LatexBed />} />
          <Route path="/super-single-bed-detail-page" element={<SuperSingleBed />} />
          <Route path="/low-floor-bed-detail-page" element={<LowBed />} />
          <Route path="/fabric-bed-detail-page" element={<FabricBed />}/>
          <Route path="/premium-memory-foam-bed-detail-page" element={<MemoryFoam />} />
          <Route path="/premium-latex-bed-detail-page" element={<PremiumLatexBed />} />
          {/* 소파 페이지 */}
          <Route path="/fabric-sofa-detail-page" element={<FabricSofa />} />
          <Route path="/cow-leather-sofa-detail-page" element={<CowLeatherSofa />} />
          <Route path="/micro-fiber-sofa-detail-page" element={<MicrofiberSofa />} />
          <Route path="/round-sofa-detail-page" element={<MultiRoundSofa />} />
          <Route path="/italian-vintage-sofa-detail-page" element={<VintageSofa />}/>
          <Route path="/premium-vintage-sofa-detail-page" element={<PremiumSofa />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }


  export default App;
