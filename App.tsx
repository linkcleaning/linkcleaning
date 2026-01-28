
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Info, 
  LayoutGrid, 
  Image as ImageIcon, 
  MessageSquare, 
  Settings, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ArrowRight,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Building2,
  UserCheck,
  ChevronsLeftRight,
  Droplets,
  Paintbrush,
  CalendarDays,
  Flame,
  Zap,
  ShieldCheck,
  Box,
  Instagram,
  Calendar,
  ChevronDown,
  Star,
  Award,
  Users,
  Target,
  Loader2,
  Camera,
  Upload,
  Edit3,
  Waves,
  Heart,
  Shield,
  Leaf,
  Medal,
  ThumbsUp,
  Wind,
  Smile,
  ImagePlus
} from 'lucide-react';

import { 
  SiteSettings, 
  ServiceInfo, 
  PortfolioItem, 
  Inquiry, 
  MajorCategory,
  ServiceCategory 
} from './types';

import { 
  INITIAL_SETTINGS, 
  INITIAL_SERVICES, 
  INITIAL_PORTFOLIO,
  LUCKY_DAYS_DATA
} from './constants';

// --- Utility Functions ---
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

// --- Global Context Mock ---
const useStore = () => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('lc_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  const [services, setServices] = useState<ServiceInfo[]>(() => {
    const saved = localStorage.getItem('lc_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('lc_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('lc_inquiries');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('lc_settings', JSON.stringify(settings));
    localStorage.setItem('lc_services', JSON.stringify(services));
    localStorage.setItem('lc_portfolio', JSON.stringify(portfolio));
    localStorage.setItem('lc_inquiries', JSON.stringify(inquiries));
  }, [settings, services, portfolio, inquiries]);

  return { 
    settings, setSettings, 
    services, setServices, 
    portfolio, setPortfolio, 
    inquiries, setInquiries 
  };
};

// --- Specialized Components ---

const IconicVacuum: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="10" y="32" width="28" height="18" rx="6" fill="currentColor" />
    <rect x="14" y="36" width="20" height="10" rx="2" fill="white" opacity="0.3" />
    <circle cx="16" cy="50" r="5" fill="#333" />
    <circle cx="16" cy="50" r="2" fill="white" />
    <circle cx="32" cy="50" r="5" fill="#333" />
    <circle cx="32" cy="50" r="2" fill="white" />
    <rect x="34" y="36" width="6" height="4" rx="1" fill="#555" />
    <path d="M40 38C48 38 52 34 52 26V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M48 18H56" stroke="#444" strokeWidth="4" strokeLinecap="round" />
    <path d="M52 18V44" stroke="#666" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M44 44H60V50H44V44Z" fill="currentColor" />
    <rect x="46" y="50" width="12" height="2" fill="#222" />
    <path d="M8 36L4 36" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M8 40L3 40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    <path d="M8 44L5 44" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const BackgroundVacuumLoop: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 md:opacity-100">
      <div className="absolute bottom-[10%] md:bottom-[15%] left-0 w-full h-24 md:h-40">
        <div className="absolute animate-vacuum-slide flex items-center gap-4 text-purple-600 drop-shadow-md" style={{ animationDuration: '10s' }}>
          <IconicVacuum className="w-20 h-20 md:w-32 md:h-32" />
        </div>
      </div>
      <div className="absolute top-[20%] md:top-[25%] left-0 w-full h-24 md:h-40">
        <div className="absolute animate-vacuum-slide flex items-center gap-4 text-purple-800 drop-shadow-md" style={{ animationDuration: '15s', animationDelay: '-5s' }}>
          <IconicVacuum className="w-24 h-24 md:w-40 md:h-40" />
        </div>
      </div>
    </div>
  );
};

const InteractiveVacuum: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2561/2561-preview.mp3');
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleVacuum = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      }, 4000);
    }
  };

  return (
    <div className="fixed left-1/2 bottom-12 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 pointer-events-none z-[5] opacity-20 md:hover:opacity-100 transition-opacity duration-500">
      <div 
        onClick={toggleVacuum}
        className={`pointer-events-auto cursor-pointer group relative flex flex-col items-center justify-center p-8 md:p-12 rounded-full transition-all duration-300 ${isPlaying ? 'scale-110 animate-shake' : 'hover:scale-105'}`}
      >
        <div className={`relative z-10 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] bg-white shadow-2xl border-2 md:border-4 transition-colors ${isPlaying ? 'bg-purple-custom text-white border-purple-400' : 'bg-white text-purple-custom border-purple-100'}`}>
          <IconicVacuum className="w-12 h-12 md:w-24 md:h-24" />
        </div>
        <div className={`mt-4 px-4 py-2 rounded-xl text-[10px] md:text-sm font-black tracking-widest transition-all ${isPlaying ? 'bg-purple-custom text-white' : 'bg-white/90 text-slate-500 shadow-sm'}`}>
          {isPlaying ? '작동 중!' : '클릭! 링크클린'}
        </div>
      </div>
    </div>
  );
};

const MainLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const containerClasses = {
    sm: 'w-8 h-8 md:w-10 md:h-10',
    md: 'w-10 h-10 md:w-12 md:h-12',
    lg: 'w-12 h-12 md:w-16 md:h-16'
  };
  const iconSizes = { sm: 14, md: 18, lg: 24 };
  return (
    <div className={`relative flex items-center justify-center rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 shadow-lg overflow-hidden group transition-all duration-500 ${containerClasses[size]}`}>
      <Sparkles size={iconSizes[size]} className="text-white z-10 animate-pulse" />
      <div className="absolute inset-0 border border-white/20 rounded-xl md:rounded-2xl"></div>
    </div>
  );
};

const SparkleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute text-white/20 animate-twinkle star-glow"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        >
          <Star size={10 + Math.random() * 10} fill="white" />
        </div>
      ))}
      <BackgroundVacuumLoop />
      <InteractiveVacuum />
    </div>
  );
};

const LuckyDaysCalendar: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  const [activeMonth, setActiveMonth] = useState('26년 2월');
  const months = Object.keys(LUCKY_DAYS_DATA);

  return (
    <section id="lucky-days" className="py-12 md:py-16 bg-white border-b border-sky-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="hidden md:flex w-12 h-12 bg-purple-100 text-purple-custom rounded-2xl items-center justify-center flex-shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">2026년 <span className="text-purple-custom">손없는 날</span> 안내</h2>
              <p className="text-xs md:text-sm text-slate-500">이사하기 좋은 길일을 확인하고 미리 예약하세요.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => setActiveMonth(month)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl text-[11px] md:text-sm font-bold transition-all border ${
                  activeMonth === month 
                  ? 'bg-purple-custom text-white border-purple-custom shadow-md' 
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white'
                }`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-sky-50 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 border border-sky-100 shadow-inner mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-3xl font-extrabold text-purple-custom mb-3">{activeMonth} 길일 리스트</h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                민속 신앙에서 악귀가 없는 날로, 이사나 개업 등 중요한 행사를 치르기에 좋은 날입니다. 
                해당 일자는 예약이 빠르게 마감되오니 조기 예약을 권장드립니다.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                <a 
                  href={`tel:${settings.phone}`}
                  className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-slate-900 text-white text-sm font-bold rounded-lg md:rounded-xl hover:bg-purple-custom transition-all shadow-md"
                >
                  <Phone size={16} className="mr-2" /> 바로 예약
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-white border border-slate-900 text-slate-900 text-sm font-bold rounded-lg md:rounded-xl hover:bg-slate-50 transition-all"
                >
                  문의 신청 <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full md:w-auto">
              {LUCKY_DAYS_DATA[activeMonth].map((day) => (
                <div key={day} className="bg-white aspect-square w-full min-w-[70px] md:w-28 rounded-2xl md:rounded-3xl flex flex-col items-center justify-center shadow-sm border border-sky-100">
                  <span className="text-slate-400 text-[9px] font-bold mb-0.5">{activeMonth.split(' ')[1]}</span>
                  <span className="text-xl md:text-3xl font-extrabold text-slate-900">{day}</span>
                  <span className="text-purple-custom text-[9px] font-bold mt-0.5">길일</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 border border-[#03C75A]/20 shadow-lg transition-all">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#03C75A] rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl md:text-4xl font-black italic">N</span>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-black text-slate-900 mb-1">링크클린 <span className="text-[#03C75A]">블로그</span></h4>
                <p className="text-slate-500 text-[11px] md:text-sm">제주 시공 현장 사진을 블로그에서 직접 확인하세요.</p>
              </div>
            </div>
            <a 
              href={settings.naverBlogLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#03C75A] text-white text-sm font-black rounded-xl shadow-md hover:-translate-y-0.5 transition-all"
            >
              블로그 시공일지 <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingSideContact: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  return (
    <div className="fixed right-4 md:right-6 bottom-24 md:bottom-32 z-50 flex flex-col space-y-3 items-center">
      <div className="animate-bob relative flex flex-col items-center mb-1">
        <div className="relative p-1.5 md:p-2 bg-white rounded-xl md:rounded-2xl shadow-xl border border-purple-100">
          <IconicVacuum className="w-8 h-8 md:w-12 md:h-12 text-purple-custom" />
        </div>
      </div>

      <a 
        href={settings.kakaoLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 bg-[#FEE500] rounded-full shadow-lg flex items-center justify-center text-[#3c1e1e] hover:scale-110 transition-transform group relative"
      >
        <MessageSquare size={20} fill="currentColor" />
        <span className="hidden md:block absolute right-full mr-3 bg-white px-2 py-1 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 whitespace-nowrap border border-slate-100">카톡 문의</span>
      </a>

      <a 
        href={settings.naverTalkLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 bg-[#03C75A] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform group relative"
      >
        <MessageSquare size={20} />
      </a>

      <a 
        href={settings.instagramLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-11 h-11 md:w-14 md:h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform group relative"
      >
        <Instagram size={20} />
      </a>
    </div>
  );
};

const BeforeAfterDisplay: React.FC<{ before: string; after: string }> = ({ before, after }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-3 p-2 md:p-3 bg-slate-50 border-b border-slate-100">
      <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-slate-200">
        <img src={before} alt="Before" className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-slate-900/60 backdrop-blur-md text-white text-[8px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
          BEFORE
        </div>
      </div>
      <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-white border md:border-2 border-purple-100 shadow-sm">
        <img src={after} alt="After" className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-purple-custom text-white text-[8px] md:text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
          AFTER
        </div>
      </div>
    </div>
  );
};

// --- Layout Components ---

const Header: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '홈', path: '/' },
    { name: '회사소개', path: '/about' },
    { name: '포트폴리오', path: '/portfolio' },
    { name: '문의신청', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 md:space-x-3">
            <MainLogo size="sm" />
            <span className="text-base md:text-xl font-extrabold text-slate-900">{settings.siteName}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-sm font-medium ${location.pathname === link.path ? 'text-purple-custom font-bold border-b-2 border-purple-custom pb-1' : 'text-slate-600'}`}>{link.name}</Link>
            ))}
            <Link to="/admin" className="p-2 text-slate-300 hover:text-purple-custom"><Settings size={18} /></Link>
          </nav>
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/admin" className="text-slate-300"><Settings size={20} /></Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-sky-100 absolute w-full shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-3.5 text-sm font-bold text-slate-700 hover:bg-sky-50 rounded-lg">{link.name}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC<{ settings: SiteSettings }> = ({ settings }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <MainLogo size="sm" />
            <span className="text-xl font-bold text-white tracking-tight">{settings.siteName}</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">제주 전역의 쾌적한 환경을 위해 프리미엄 장비와 친환경 세제로 최상의 서비스를 약속합니다.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">고객지원</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-purple-400" />
              <a href={`tel:${settings.phone}`} className="text-white text-sm font-bold">{settings.phone}</a>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin size={14} className="text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-1.5">
                {settings.address.split(' / ').map((addr, idx) => (
                  <span key={idx} className="text-[11px] md:text-xs bg-slate-800 px-2.5 py-1 rounded border border-slate-700">{addr}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 pt-6 border-t border-slate-800 text-[10px]">© 2016 {settings.siteName}. All rights reserved.</div>
    </footer>
  );
};

const Home: React.FC<{ settings: SiteSettings; services: ServiceInfo[]; portfolio: PortfolioItem[] }> = ({ settings, services, portfolio }) => {
  return (
    <div className="animate-in fade-in duration-500 relative z-10">
      {/* Hero Section Optimized for Mobile */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2070" alt="Jeju" className="w-full h-full object-cover brightness-75 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white w-full text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block px-3 py-1 mb-6 md:mb-8 bg-white/10 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase rounded-full">Jeju Premium Cleaning</span>
            <h1 className="text-3xl md:text-7xl font-extrabold mb-6 md:mb-8 leading-[1.25] md:leading-[1.15]">
              제주의 <span className="text-sky-300">깨끗함</span>, <br className="md:hidden"/>
              공간의 <span className="text-purple-400">품격</span>을 깨우다
            </h1>
            <p className="text-sm md:text-2xl mb-8 md:mb-12 text-slate-200 font-light leading-relaxed max-w-xl md:max-w-2xl mx-auto">
              공간의 가치를 되찾아드리는 <br className="md:hidden"/>
              링크클린의 <span className="text-white font-medium">프리미엄 케어 솔루션</span>
            </p>
            <div className="animate-bounce opacity-40"><ChevronDown size={24} className="mx-auto" /></div>
          </div>
        </div>
      </section>
      
      <LuckyDaysCalendar settings={settings} />

      <section id="services" className="py-16 md:py-24 bg-sky-custom/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900">핵심 <span className="text-purple-custom">전문 서비스</span></h2>
            <div className="w-10 h-0.5 bg-purple-custom mx-auto mt-3"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-white/90 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-sky-100 flex flex-col h-full hover:shadow-lg transition-all group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-sky-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-5 text-purple-custom group-hover:bg-purple-custom group-hover:text-white transition-colors">
                  {service.majorCategory === MajorCategory.PROFESSIONAL && <Sparkles size={28} />}
                  {service.majorCategory === MajorCategory.SPECIAL && <Flame size={28} />}
                  {service.majorCategory === MajorCategory.APPLIANCE && <Zap size={28} />}
                  {service.majorCategory === MajorCategory.PREVENTIVE && <ShieldCheck size={28} />}
                  {service.majorCategory === MajorCategory.MANAGEMENT && <Building2 size={28} />}
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-[11px] md:text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-1.5">
                    {service.subCategories.map((sub, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] md:text-xs font-bold rounded-md border border-slate-100">{sub}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-50">
                  <Link to="/contact" className="text-purple-custom font-bold text-xs md:text-sm flex items-center">견적 신청 <ChevronRight size={14} className="ml-1" /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">시공 전후 <span className="text-purple-custom">리얼 데이터</span></h2>
              <p className="text-slate-500 text-sm mt-1">링크클린의 정직한 시공 사례입니다.</p>
            </div>
            <Link to="/portfolio" className="text-purple-custom text-sm font-bold flex items-center">
              전체 보기 <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.slice(0, 2).map((item) => (
              <div key={item.id} className="bg-white rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl">
                <BeforeAfterDisplay before={item.beforeImg} after={item.afterImg} />
                <div className="p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-purple-50 text-purple-custom text-[9px] md:text-[10px] font-bold rounded-full uppercase">{item.majorCategory}</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-400 text-[10px] md:text-xs font-bold">{item.category}</span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 truncate">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 relative z-10 bg-white">
      <section className="relative h-[60vh] md:h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Interior" />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-purple-200">The Spirit of Link Clean</span>
          <h1 className="text-3xl md:text-7xl font-black mt-4 leading-tight">
            공간의 예술적 <br/> <span className="text-purple-400">가치 복원</span>
          </h1>
        </div>
      </section>
      <section className="py-16 md:py-32 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 leading-tight">
              제주의 자연과 <br/> 숨쉬는 <span className="text-purple-custom">전문가</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-sm md:text-lg leading-relaxed">
              <p>2016년, 제주 도민의 더 나은 삶을 위해 탄생한 링크클린입니다.</p>
              <div className="flex items-center gap-6 pt-4">
                <div><span className="text-3xl md:text-4xl font-black text-slate-900 block">2016</span><span className="text-[10px] font-bold text-slate-400">설립일</span></div>
                <div className="w-[1px] h-10 bg-slate-200"></div>
                <div><span className="text-3xl md:text-4xl font-black text-slate-900 block">3,500+</span><span className="text-[10px] font-bold text-slate-400">누적 프로젝트</span></div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80&w=1000" className="rounded-[2rem] md:rounded-[4rem] shadow-2xl w-full aspect-[4/5] object-cover" alt="Home" />
          </div>
        </div>
      </section>
    </div>
  );
};

const Contact: React.FC<{ settings: SiteSettings; services: ServiceInfo[]; inquiries: Inquiry[]; setInquiries: React.Dispatch<React.SetStateAction<Inquiry[]>> }> = ({ settings, services, inquiries, setInquiries }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', serviceType: '입주청소', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xgokkpaj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', serviceType: '입주청소', message: '' });
      } else { alert("오류가 발생했습니다."); }
    } catch (error) { alert("연결 오류가 발생했습니다."); }
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="py-12 md:py-24 bg-sky-50/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-5xl font-black text-center text-slate-900 mb-10">문의 신청</h1>
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] shadow-xl border border-sky-100">
          {submitted ? (
            <div className="text-center py-10 animate-in zoom-in">
              <CheckCircle size={40} className="mx-auto text-green-500 mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-6">성공적으로 접수되었습니다!</h3>
              <button onClick={() => setSubmitted(false)} className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl">다시 작성</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required name="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="성함" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
                <input required type="tel" name="phone" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="연락처" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none" />
              </div>
              <select name="service" value={formData.serviceType} onChange={e => setFormData({...formData, serviceType: e.target.value})} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none font-bold text-sm">
                {services.map(g => g.subCategories.map(s => <option key={s} value={s}>{s}</option>))}
              </select>
              <textarea rows={5} required name="message" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="상세 내용을 적어주세요." className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl outline-none text-sm"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-purple-custom text-white font-black rounded-xl shadow-lg flex items-center justify-center gap-2">
                {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : '신청 완료'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC<{ portfolio: PortfolioItem[]; setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>> }> = ({ portfolio, setPortfolio }) => {
  const [showForm, setShowForm] = useState(false);
  const [newPf, setNewPf] = useState<Partial<PortfolioItem>>({ title: '', description: '', category: '입주청소', majorCategory: MajorCategory.PROFESSIONAL, beforeImg: '', afterImg: '' });
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const base64 = await fileToBase64(file);
        setNewPf(prev => ({ ...prev, [type === 'before' ? 'beforeImg' : 'afterImg']: base64 }));
      } catch (err) { alert("이미지 로딩 오류"); }
      finally { setIsUploading(false); }
    }
  };

  const handleGuestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPf.title || !newPf.beforeImg || !newPf.afterImg) { alert("사진을 모두 등록해주세요."); return; }
    const item: PortfolioItem = {
      id: Date.now().toString(),
      title: `[고객후기] ${newPf.title}`,
      description: newPf.description || '',
      category: newPf.category as ServiceCategory,
      majorCategory: newPf.majorCategory as MajorCategory,
      beforeImg: newPf.beforeImg!,
      afterImg: newPf.afterImg!,
      date: new Date().toLocaleDateString()
    };
    setPortfolio([item, ...portfolio]);
    setShowForm(false);
    setNewPf({ title: '', description: '', beforeImg: '', afterImg: '' });
  };

  return (
    <div className="py-12 md:py-24 bg-sky-custom/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900">시공 포트폴리오</h2>
          <button onClick={() => setShowForm(!showForm)} className="mt-6 inline-flex items-center px-6 py-3 bg-purple-custom text-white text-sm font-bold rounded-xl shadow-md">
            {showForm ? "취소" : "후기 올리기"}
          </button>
        </div>

        {showForm && (
          <div className="max-w-2xl mx-auto mb-12 bg-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-purple-100">
            <form onSubmit={handleGuestSubmit} className="space-y-4">
              <input required value={newPf.title} onChange={e => setNewPf({...newPf, title: e.target.value})} placeholder="현장 이름" className="w-full px-4 py-3 bg-slate-50 border rounded-xl" />
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-video border-2 border-dashed rounded-xl flex items-center justify-center overflow-hidden bg-slate-50">
                  {newPf.beforeImg ? <img src={newPf.beforeImg} className="w-full h-full object-cover" /> : <div className="text-[10px] text-slate-400">BEFORE</div>}
                  <input required type="file" accept="image/*" onChange={e => handleFileChange(e, 'before')} className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
                <div className="relative aspect-video border-2 border-dashed rounded-xl flex items-center justify-center overflow-hidden bg-slate-50">
                  {newPf.afterImg ? <img src={newPf.afterImg} className="w-full h-full object-cover" /> : <div className="text-[10px] text-slate-400">AFTER</div>}
                  <input required type="file" accept="image/*" onChange={e => handleFileChange(e, 'after')} className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
              </div>
              <textarea rows={3} value={newPf.description} onChange={e => setNewPf({...newPf, description: e.target.value})} placeholder="후기 내용" className="w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm"></textarea>
              <button type="submit" className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl">{isUploading ? "이미지 처리 중" : "등록 완료"}</button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {portfolio.map((item) => (
            <div key={item.id} className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-slate-100 group">
              <BeforeAfterDisplay before={item.beforeImg} after={item.afterImg} />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-purple-custom font-bold text-[9px] uppercase px-2 py-0.5 bg-purple-50 rounded-full">{item.majorCategory}</span>
                  <span className="text-slate-400 text-[9px]"><Clock size={10} className="inline mr-1" /> {item.date}</span>
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1 group-hover:text-purple-custom transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Admin: React.FC<{ settings: SiteSettings; setSettings: React.Dispatch<React.SetStateAction<SiteSettings>>; inquiries: Inquiry[]; portfolio: PortfolioItem[]; setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>; services: ServiceInfo[] }> = ({ settings, setSettings, inquiries, portfolio, setPortfolio, services }) => {
  const [tab, setTab] = useState<'general' | 'inquiries' | 'portfolio'>('general');
  const [newPf, setNewPf] = useState<Partial<PortfolioItem>>({ title: '', description: '', category: '입주청소', majorCategory: MajorCategory.PROFESSIONAL, beforeImg: '', afterImg: '' });
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const base64 = await fileToBase64(file);
        setNewPf(prev => ({ ...prev, [type === 'before' ? 'beforeImg' : 'afterImg']: base64 }));
      } catch (err) { alert("이미지 로딩 오류"); }
      finally { setIsUploading(false); }
    }
  };

  const addPortfolio = () => {
    if (!newPf.title || !newPf.beforeImg || !newPf.afterImg) { alert("입력 오류"); return; }
    const item: PortfolioItem = { id: Date.now().toString(), title: newPf.title!, description: newPf.description || '', category: newPf.category as ServiceCategory, majorCategory: newPf.majorCategory as MajorCategory, beforeImg: newPf.beforeImg!, afterImg: newPf.afterImg!, date: new Date().toLocaleDateString() };
    setPortfolio([item, ...portfolio]);
    setNewPf({ title: '', description: '', category: '입주청소', majorCategory: MajorCategory.PROFESSIONAL, beforeImg: '', afterImg: '' });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2"><Settings /> 관리자</h1>
        <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
          {['general', 'inquiries', 'portfolio'].map(t => (
            <button key={t} onClick={() => setTab(t as any)} className={`px-5 py-2 rounded-lg font-bold text-xs whitespace-nowrap shadow-sm ${tab === t ? 'bg-purple-custom text-white' : 'bg-white text-slate-500'}`}>{t === 'general' ? '기본' : t === 'inquiries' ? '상담' : '사례'}</button>
          ))}
        </div>
        {tab === 'portfolio' && (
          <div className="bg-white p-6 rounded-2xl shadow-sm border mb-8">
            <h2 className="text-lg font-bold mb-6">시공 사례 등록</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" value={newPf.title} onChange={e => setNewPf({...newPf, title: e.target.value})} placeholder="제목" className="w-full p-3 border rounded-xl text-sm" />
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square border-2 border-dashed rounded-xl flex items-center justify-center bg-slate-50 overflow-hidden">
                  {newPf.beforeImg ? <img src={newPf.beforeImg} className="w-full h-full object-cover" /> : <span className="text-[8px]">BEFORE</span>}
                  <input type="file" onChange={e => handleFileChange(e, 'before')} className="absolute inset-0 opacity-0" />
                </div>
                <div className="relative aspect-square border-2 border-dashed rounded-xl flex items-center justify-center bg-slate-50 overflow-hidden">
                  {newPf.afterImg ? <img src={newPf.afterImg} className="w-full h-full object-cover" /> : <span className="text-[8px]">AFTER</span>}
                  <input type="file" onChange={e => handleFileChange(e, 'after')} className="absolute inset-0 opacity-0" />
                </div>
              </div>
            </div>
            <button onClick={addPortfolio} className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm">업로드</button>
          </div>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const store = useStore();
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-purple-100 selection:text-purple-custom relative overflow-x-hidden">
        <SparkleBackground />
        <Header settings={store.settings} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home settings={store.settings} services={store.services} portfolio={store.portfolio} />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio portfolio={store.portfolio} setPortfolio={store.setPortfolio} />} />
            <Route path="/contact" element={<Contact settings={store.settings} services={store.services} inquiries={store.inquiries} setInquiries={store.setInquiries} />} />
            <Route path="/admin" element={<Admin settings={store.settings} setSettings={store.setSettings} inquiries={store.inquiries} portfolio={store.portfolio} setPortfolio={store.setPortfolio} services={store.services} />} />
          </Routes>
        </main>
        <FloatingSideContact settings={store.settings} />
        <Footer settings={store.settings} />
      </div>
    </Router>
  );
};

export default App;
