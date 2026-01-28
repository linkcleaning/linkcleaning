
import { MajorCategory, ServiceCategory, PortfolioItem, ServiceInfo, SiteSettings } from './types';

export const LUCKY_DAYS_DATA: Record<string, number[]> = {
  '26년 2월': [6, 7, 16, 17, 25, 26],
  '26년 3월': [7, 8, 17, 18, 27, 28],
  '26년 4월': [6, 7, 15, 16, 25, 26],
  '26년 5월': [5, 6, 15, 16, 25, 26],
  '26년 6월': [4, 5, 13, 14, 23, 24],
  '26년 7월': [3, 4, 13, 14, 22, 23]
};

export const INITIAL_SETTINGS: SiteSettings = {
  siteName: "링크클린 (Link Clean)",
  heroTitle: "제주의 자연을 닮은 깨끗함, 공간의 품격을 깨우다",
  heroSubtitle: "단순한 청소를 넘어 공간 본연의 가치를 되찾아드리는 링크클린의\n독보적인 프리미엄 케어 솔루션입니다.",
  phone: "064-763-4545",
  address: "제주시 : 제주특별자치도 제주시 연동 2315-3 / 서귀포시 : 제주특별자치도 서귀포시 서호호근로 86-6",
  kakaoLink: "https://pf.kakao.com/_xfxdrxmM",
  naverTalkLink: "https://talk.naver.com/ct/wc92zf?frm=home",
  naverBlogLink: "https://blog.naver.com/linkcleaning",
  instagramLink: "https://instagram.com/linkcleaning",
  primaryColor: "#E3F2FD",
  accentColor: "#8E24AA",
  logoUrl: "https://api.iconify.design/solar:sparkles-bold-duotone.svg?color=%238e24aa"
};

export const INITIAL_SERVICES: ServiceInfo[] = [
  {
    id: 'm6',
    majorCategory: MajorCategory.MANAGEMENT,
    title: '프리미엄 관리',
    description: '제주 세컨하우스와 별장, 거주 공간을 정기적으로 케어하여 언제나 쾌적한 상태를 유지해 드립니다.',
    subCategories: ['별장관리', '정기관리', '건물관리', '거주정기청소']
  },
  {
    id: 'm2',
    majorCategory: MajorCategory.PROFESSIONAL,
    title: '전문청소',
    description: '공간의 목적에 따른 정밀 클리닝으로 최적의 주거/상업 환경을 조성합니다.',
    subCategories: ['입주청소', '이사청소', '인테리어청소', '거주청소', '외벽&외창청소']
  },
  {
    id: 'm3',
    majorCategory: MajorCategory.SPECIAL,
    title: '특수청소',
    description: '특수한 상황에서의 오염 및 폐기물 처리를 전문 장비 및 인력으로 안전하게 해결합니다.',
    subCategories: ['준공청소', '화재청소', '쓰레기집청소', '유품&고독사청소', '폐기물처리']
  },
  {
    id: 'm5',
    majorCategory: MajorCategory.PREVENTIVE,
    title: '예방시공',
    description: '공간의 오염을 방지하고 쾌적함을 오래 유지하기 위한 전문 시공 솔루션입니다.',
    subCategories: ['줄눈시공', '새집증후군시공', '바닥왁스', '방역&해충소독']
  },
  {
    id: 'm4',
    majorCategory: MajorCategory.APPLIANCE,
    title: '가전청소',
    description: '분해 세척을 통해 보이지 않는 세균과 먼지를 제거하여 가전의 성능과 건강을 지킵니다.',
    subCategories: ['에어컨청소', '냉장고청소', '쇼파&매트리스', '후드청소']
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: '제주시 노형동 신축 아파트 입주청소',
    majorCategory: MajorCategory.PROFESSIONAL,
    category: '입주청소',
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800',
    description: '공사 후 남겨진 미세 먼지와 창틀의 시멘트 가루를 완벽하게 제거하고 친환경 살균 세척을 진행했습니다.',
    date: '2024-03-15'
  },
  {
    id: 'p2',
    title: '연동 오피스텔 원룸 쓰레기집청소',
    majorCategory: MajorCategory.SPECIAL,
    category: '쓰레기집청소',
    beforeImg: 'https://images.unsplash.com/photo-1598425237654-4fc758e50a93?auto=format&fit=crop&q=80&w=1200',
    afterImg: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    description: '심각하게 방치된 생활 쓰레기와 오염원을 완벽하게 분리 수거하고, 특수 고온 멸균 소독을 통해 새 집 같은 컨디션으로 복원해 드렸습니다.',
    date: '2024-03-20'
  }
];
