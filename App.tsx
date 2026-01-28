import React, { useState } from 'react';
import { Phone, Calendar, CheckCircle, ChevronRight, MessageSquare, Instagram, Menu } from 'lucide-react';

// --- 1. 작은 부품들 (컴포넌트) 정의 ---

const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="text-2xl font-black text-[#7B39FD] tracking-tighter">
        링크클린 <span className="text-[#5B21D1] text-xs font-normal ml-1">JEJU</span>
      </div>
      <nav className="hidden md:flex space-x-8 font-medium text-gray-600">
        <a href="#hero" className="hover:text-[#7B39FD]">홈</a>
        <a href="#portfolio" className="hover:text-[#7B39FD]">시공사례</a>
        <a href="#services" className="hover:text-[#7B39FD]">서비스</a>
        <a href="#booking" className="hover:text-[#7B39FD]">예약안내</a>
      </nav>
      <button className="bg-[#7B39FD] text-white px-6 py-2.5 rounded-full font-bold shadow-lg">상담신청</button>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero" className="pt-20 relative h-[85vh] flex items-center justify-center text-white bg-hero-overlay">
    <div className="max-w-7xl mx-auto px-4 w-full text-center relative z-10 animate-fade-in">
      <div className="inline-block bg-gray-800/60 border border-gray-500 px-4 py-1 rounded mb-6 text-sm tracking-widest font-light">
        JEJU PREMIUM CLEANING SOLUTION
      </div>
      <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
        제주의 깨끗함<br /><span className="text-sky-300">공간의 품격</span>을 깨우다
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
        공간 본연의 가치를 되찾아드리는 링크클린만의 프리미엄 케어 솔루션을 경험해보세요.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-white text-[#7B39FD] px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-xl">상세보기</button>
        <button className="bg-[#7B39FD] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#5B21D1] transition shadow-xl">실시간 예약</button>
      </div>
    </div>
  </section>
);

// --- 2. 메인 앱 시작 ---

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        {/* 이미지 2, 3에서 보여준 포트폴리오와 예약 섹션이 이 아래로 이어집니다. */}
        <section id="booking" className="py-24 bg-[#F2F7FF]">
           <div className="max-w-7xl mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold mb-8">2026년 손없는 날 안내</h2>
             <div className="bg-white p-8 rounded-3xl shadow-sm inline-block">
                {/* 캘린더 구현 부분 */}
                <p className="text-gray-500">2월 예약 가능한 날짜: 6, 7, 16, 17, 25, 26</p>
             </div>
           </div>
        </section>
      </main>

      {/* Floating Call 버튼 (모바일) */}
      <div className="md:hidden fixed bottom-8 right-8 z-40 animate-bounce">
        <a href="tel:0504-763-6545" className="w-16 h-16 bg-[#7B39FD] rounded-2xl flex items-center justify-center text-white shadow-2xl">
          <Phone size={28} />
        </a>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-4 text-center">
        <p>© 2026 링크클린. All rights reserved.</p>
      </footer>
    </div>
  );
}
