
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
    id: 'professional',
    majorCategory: MajorCategory.PROFESSIONAL,
    title: '전문청소',
    description: '공간의 목적에 따른 정밀 클리닝으로 최적의 주거/상업 환경을 조성합니다.',
    subCategories: ['입주청소', '이사청소', '인테리어청소', '거주청소', '외벽&외창청소'],
    process: [
      { title: '사전 점검', desc: '현장 오염도 측정 및 파손 여부 확인' },
      { title: '건식 청소', desc: '고성능 진공 장비로 1차 미세먼지 제거' },
      { title: '습식 세척', desc: '친환경 세제와 고온 스팀으로 고착 오염 제거' },
      { title: '디테일 케어', desc: '창틀, 배수구, 전등갓 등 구석구석 정밀 클리닝' },
      { title: '살균 마무리', desc: 'UV 살균 및 피톤치드 향균 코팅 제공' }
    ],
    equipment: ['산업용 건습식 청소기', '고온 스팀 살균기', '독일제 키르히 세척기', '친환경 다목적 세정제'],
    features: ['본사 직영팀 운영', '하루 한 집 정성 시공', '무상 A/S 보장']
  },
  {
    id: 'special',
    majorCategory: MajorCategory.SPECIAL,
    title: '특수청소',
    description: '특수한 상황에서의 오염 및 폐기물 처리를 전문 장비 및 인력으로 안전하게 해결합니다.',
    subCategories: ['준공청소', '화재청소', '쓰레기집청소', '유품&고독사청소', '폐기물처리'],
    process: [
      { title: '특수 상담', desc: '비밀 보장 맞춤 견적 및 작업 범위 확정' },
      { title: '대량 폐기물 수거', desc: '폐기물법 준수 전문 수거 및 분리 배출' },
      { title: '심층 오염 제거', desc: '특수 약품을 이용한 강력 세척 및 복원' },
      { title: '탈취 및 소독', desc: '오존 발생기 및 특수 약품으로 악취 완전 제거' },
      { title: '원상 복구', desc: '공간 재사용을 위한 최종 멸균 작업' }
    ],
    equipment: ['오존 탈취기', '고강도 압축 분무기', '산업용 폐기물 장비', '화학 보호 장구'],
    features: ['24시간 긴급 대응', '철저한 비밀 유지', '원스톱 폐기물 처리']
  },
  {
    id: 'preventive',
    majorCategory: MajorCategory.PREVENTIVE,
    title: '예방시공',
    description: '공간의 오염을 방지하고 쾌적함을 오래 유지하기 위한 전문 시공 솔루션입니다.',
    subCategories: ['줄눈시공', '새집증후군시공', '바닥왁스', '방역&해충소독'],
    process: [
      { title: '표면 전처리', desc: '시공 부위 정밀 세척 및 유분 제거' },
      { title: '친환경 시공', desc: '저자극 고성능 코팅제/줄눈제 도포' },
      { title: '경화 대기', desc: '최적의 부착력을 위한 정밀 경화 시간 준수' },
      { title: '품질 검수', desc: '들뜸 현상 및 기포 유무 육안 확인' },
      { title: '관리 가이드', desc: '시공 후 유지 관리를 위한 고객 안내' }
    ],
    equipment: ['고급 줄눈 전용기', '베이크아웃 열풍 장비', '포그 방역 분사기', '수입산 프리미엄 코팅제'],
    features: ['시공 1년 무상 보증', '친환경 인증 제품 사용', '최신 트렌드 색상 보유']
  },
  {
    id: 'appliance',
    majorCategory: MajorCategory.APPLIANCE,
    title: '가전청소',
    description: '분해 세척을 통해 보이지 않는 세균과 먼지를 제거하여 가전의 성능과 건강을 지킵니다.',
    subCategories: ['에어컨청소', '냉장고청소', '쇼파&매트리스', '후드청소'],
    process: [
      { title: '정상 작동 확인', desc: '세척 전 기기 가동 및 이상 여부 진단' },
      { title: '완전 분해', desc: '부품 하나하나 정밀하게 분해 및 나열' },
      { title: '고압 스팀 세척', desc: '보이지 않는 냉각핀, 팬 사이 곰팡이 제거' },
      { title: '약품 중화/건조', desc: '잔류 세제 제거를 위한 헹굼 및 완전 건조' },
      { title: '재조립 및 검수', desc: '원상 복구 후 최종 정상 가동 확인' }
    ],
    equipment: ['가전 전용 고압 세척기', '부품 전용 세척 대대', '핀 전용 정밀 솔', '특수 친환경 약품'],
    features: ['전문 가전 케어 마스터 시공', '파손 보험 가입', '시공 전후 사진 제공']
  },
  {
    id: 'management',
    majorCategory: MajorCategory.MANAGEMENT,
    title: '프리미엄 관리',
    description: '제주 세컨하우스와 별장, 사무실 공간을 정기적으로 케어하여 언제나 쾌적한 상태를 유지해 드립니다.',
    subCategories: ['별장관리', '사무실관리', '건물관리', '계단관리'],
    process: [
      { title: '맞춤형 스케줄링', desc: '고객 방문 주기 및 사용 용도에 따른 케어 계획 수립' },
      { title: '정기 순찰 케어', desc: '부재 시 환기, 습도 조절, 시설물 이상 점검' },
      { title: '정밀 정기 청소', desc: '약속된 주기별 내부 딥 클리닝 진행' },
      { title: '긴급 방문 지원', desc: '고객 입도 전 최상의 상태 세팅 지원' },
      { title: '현황 리포트', desc: '작업 내용 및 현장 사진 모바일 보고' }
    ],
    equipment: ['스마트 도어락 연동 시스템', '원격 습도 측정 장비', '정기 케어 전용 키트'],
    features: ['전담 매니저 매칭', '제주 전역 커버리지', '비대면 관리 서비스']
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
    date: '2025-06-15'
  },
  {
    id: 'p2',
    title: '연동 오피스텔 원룸 쓰레기집청소',
    majorCategory: MajorCategory.SPECIAL,
    category: '쓰레기집청소',
    beforeImg: 'https://images.unsplash.com/photo-1598425237654-4fc758e50a93?auto=format&fit=crop&q=80&w=1200',
    afterImg: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
    description: '심각하게 방치된 생활 쓰레기와 오염원을 완벽하게 분리 수거하고, 특수 고온 멸균 소독을 통해 새 집 같은 컨디션으로 복원해 드렸습니다.',
    date: '2025-10-20'
  }
];
