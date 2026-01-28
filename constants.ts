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
  logoUrl: "data:image/gif;base64,R0lGODlhsQMTBfcAAP//////AP8A//8AAAD//wD/AAAA/wAAAPvSkyMYFfb3x9/dyscACqBYRj86OWUPEVYREmIsLbkDC6AGDZQIDYoJDqgOFX8LD3UMEIUcIHshJJkUG0MaH1EaI3IcLbQfQaUePZoeOYsdNdAgSsUgR+QAf9PT1Nzd3dDR0b2+vqqrq3+6LHmwK3SmKW6cKGiSJl+BJFRtIUhZHjxFGzQ2GcfGhunpvPj4yfHxxerqwOLivNvbuNTUs83Nr5CQhMvLw8XFwYuLiPHx8MDAv4SEg/PveujkeNvZiNbUhtDNg93bjN/dkOHflL+9geTim+rop+/tsbKxhvPxuquqhff1wtzbsevqvs7NptTPa7OvbPn3xsG/m7Sxj8PAnNTTxouESJaRXdPRv93bydDPxS8sGH95TouFVqejhKikhtvZydjWx3FpO5qVeayeV3RsR42Ibn96Y4qJhGhgQI6Ib+fizcnFs7y4qO2/HOC1HOO5JteyMsmrQLujTldOLpySbMG8qrCsncqiG7WQGl5VOaWWaNvVwrGupJ18GYhsGXthGHNsWLawn5mUhqSfkWlSGEpAKFFIMmVeTaqklVZCF5GKe+fm5Ek3FlhQQo2HfCkiFu/JjUY8KzwtFu7Gi+C7g9Ove8WkdOS/iNi2gsysfcCjd7WZcYF7criYbKqMZJyBXDsxI52GZktCNo91VHReRIZzW4JpTGtiWGdSPFlHNT00K19WTXZvaLazsNvZ1zAiFUw7LT40LJyYlaqmoz4vJc/MylJKRTAmIDEkHTsxLK6sq9bU00Y9OZGMii8kIEtDQC0kITEoJbq3tkIoITokHiYcGSogHS8lIl1WVHlycJVSQoJIOnRBNWk8MWI4LlAvJzMgGywdGVpSUGBYVmpiYNx0XdBuWcVpVLljUK5dS6JXRzYtKzsyMExHRq2op1ozLDEmJC0XFD42NWkfGVAcGEMbF6ckHZYiHHcgGssnHzgWFS4ZGEwSEkIUE1AzM1VRUVlWVqKfn8jFxeTi4rm4uP///yH5BAEAAP8ALAAAAACxAxMFAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqFOrXs26tevXsGPLnk27tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868ufPn0KNLn069uvXr2LNr3869u/fv4MOL/x9Pvrz58+jTq1/Pvr379/Djy59Pv779+/jz69/Pv7///wAGKOCABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCRilcCJJ5ao4oo3oehiiizGKKNKL9Y44404hlSjjTn26GNFO+7445BEMhQkj0UmqeSRQirp5JBMIvnklDdGKSWVWJZo5ZVZdgnili96KWaIYLo45pkdlokimmxiqOaabcY54Zswymmng3QmcOeeDObJ558I+gnooAIKSuih/hmK6KL50cnoo42+Cemk9ClK6aXrWYrppublqSenoJbnaaikjjdqqah25+mnqbaK3amuxv9K3aqy1iodrbbm2hyuuvaKHKy+Bjscr8IW+xuxxiarG7LKNlsbs85GCxu0HYEp7bWAAWvRqlFi621d2kbEraPflstWuA6NO6657JaFbkLqxgtnu/R29a5B8uY7b738WnXvQPoGXGe/BEf1r8AIs1rwwkxRm3DCDEesFLMPPyzxxUZxS1DF6mLs8VIch3zkxySDLPLJCpescsYoV7zyy0m1bDHMNBMlM8I15zzUzQHr7PNPPOf789A9BR0v0UjrZPS6STdd09IaOy21TFD/O/XVJVVtNdZcg6Q1uV2HnfXXaopt9khkl3322h+lXSbbcG/ktrVx173t3FbarTdFeOf/vfff6fbNJEoDA76y4INrpKnhFyOeON9HM46x4yNPJLDkElNe+UMzY16w5kFCxLHnBIO++UIik86v6aE3dLLq9LLeOuqpw86u7E3SXrvt3+KeO7yv816u71wW1LLwvRNvpkLHI4+t8mECj7Lzz0O/r/HNUx+t9cvjK7Po0WsfKveFb/y967OLjyn55Qt0c+Cnqz8p+ym7/76Rfss/P/ve38883fp7FP2w5z+ESCqAAuQfwIL2P7UhcFH0+9TSDLi4B/4pglA7SNQsiCgMGs18TOPgoTxIPhF2kITWM+EJUUg8FY6Qhb5z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"
};

export const INITIAL_SERVICES: ServiceInfo[] = [
  {
    id: 'professional-cleaning',
    title: '프리미엄 입주/이사청소',
    description: '가장 많은 분들이 선택하시는 링크클린의 대표 서비스입니다. 미세먼지 제거부터 살균까지 공간 전체를 완벽하게 케어합니다.',
    majorCategory: MajorCategory.PROFESSIONAL,
    subCategories: ['입주청소', '이사청소', '인테리어청소', '거주청소'],
    process: [
      { title: '현장 진단 및 오염 체크', desc: '공간의 특성과 오염도를 파악하여 최적의 약제와 장비를 선정합니다.' },
      { title: '구석구석 건식 클리닝', desc: '천장, 벽면, 바닥의 미세먼지와 이물질을 강력한 흡입기로 제거합니다.' },
      { title: '친환경 세제 습식 클리닝', desc: '독일 키엘사의 친환경 세제를 사용하여 찌든 때와 오염을 말끔히 제거합니다.' },
      { title: '고온 스팀 살균', desc: '주방, 화장실 등 균이 번식하기 쉬운 곳에 150도 고온 스팀 살균을 실시합니다.' },
      { title: '자외선 오존 소독', desc: '눈에 보이지 않는 공기 중의 바이러스와 냄새까지 케어합니다.' }
    ],
    equipment: ['독일 키엘 친환경 세제', '산업용 고성능 청소기', '고온 스팀기', '오존 발생기'],
    features: ['100% 본사 직영 시공', '친환경 세제 사용 원칙', '철저한 사후 관리 서비스']
  },
  {
    id: 'special-cleaning',
    title: '특수/난청소 솔루션',
    description: '화재, 고독사, 쓰레기집 등 일반적인 방법으로는 해결하기 어려운 오염을 전문 기술로 복원해 드립니다.',
    majorCategory: MajorCategory.SPECIAL,
    subCategories: ['준공청소', '화재청소', '쓰레기집청소', '유품&고독사청소', '폐기물처리'],
    process: [
      { title: '긴급 현장 출동 및 상담', desc: '특수 상황에 맞춰 즉각적인 조치와 견적을 안내드립니다.' },
      { title: '폐기물 분류 및 배출', desc: '체계적인 분류를 통해 폐기물을 합법적으로 처리합니다.' },
      { title: '특수 약제 세척', desc: '오염원인에 따른 전용 특수 약제로 심한 악취와 오염을 제거합니다.' },
      { title: '원상 복구 작업', desc: '단순 청소를 넘어 공간이 다시 사용될 수 있도록 복원합니다.' }
    ],
    equipment: ['특수 탈취 장비', '화학 오염 제거제', '대형 폐기물 트럭', '방역용 연무기'],
    features: ['프라이버시 철저 보장', '신속하고 정밀한 현장 대응', '냄새 제거 보증제 실시']
  },
  {
    id: 'appliance-cleaning',
    title: '가전 케어 마스터',
    description: '에어컨, 냉장고 내부의 곰팡이와 세균을 완전 분해 세척하여 쾌적한 가전 환경을 만듭니다.',
    majorCategory: MajorCategory.APPLIANCE,
    subCategories: ['에어컨청소', '냉장고청소', '후드청소'],
    process: [
      { title: '가전 작동 상태 점검', desc: '분해 전 정상 작동 여부를 확인합니다.' },
      { title: '부품 완전 분해', desc: '전문 기술자가 내부 부품을 하나하나 꼼꼼하게 분해합니다.' },
      { title: '고압 물 세척', desc: '열교환기와 내부 구석구석을 강력한 고압수로 세척합니다.' },
      { title: '건조 및 조립', desc: '세척된 부품을 완전히 건조시킨 후 재조립합니다.' }
    ],
    equipment: ['가전 전용 고압 세척기', '친환경 가전 세정제', '부품 건조기'],
    features: ['전문 엔지니어 직접 방문', '가전 고장 보험 가입', '시공 전후 상태 확인']
  },
  {
    id: 'preventive-cleaning',
    title: '예방 및 시공 케어',
    description: '새집증후군, 줄눈 시공 등 생활 오염을 예방하고 공간의 내구성을 높이는 전문 시공 서비스입니다.',
    majorCategory: MajorCategory.PREVENTIVE,
    subCategories: ['줄눈시공', '새집증후군시공', '바닥왁스', '방역&해충소독'],
    process: [
      { title: '시공 부위 클리닝', desc: '시공 전 부착력 강화를 위해 해당 부위를 완벽하게 세척합니다.' },
      { title: '전문 약제 도포/시공', desc: '최고급 안료와 친환경 약제를 사용하여 시공을 진행합니다.' },
      { title: '검수 및 마무리', desc: '시공 상태를 정밀하게 확인하고 주의사항을 안내합니다.' }
    ],
    equipment: ['독일 줄눈제', '베이크아웃 장비', '초미립자 살포기'],
    features: ['최고급 정품 자재 사용', '반영구적인 내구성', '공간의 미적 가치 향상']
  },
  {
    id: 'management-cleaning',
    title: '프리미엄 정기 관리',
    description: '건물, 사무실, 별장 등을 정기적으로 방문하여 최상의 컨디션을 유지해 드리는 맞춤형 관리입니다.',
    majorCategory: MajorCategory.MANAGEMENT,
    subCategories: ['별장관리', '정기관리', '건물관리', '사무실관리', '계단관리'],
    process: [
      { title: '맞춤형 관리 플랜 수립', desc: '공간의 용도와 요구 사항에 맞는 정기 방문 일정을 잡습니다.' },
      { title: '전담 팀 배치', desc: '해당 공간을 잘 이해하는 전담 인력을 배치하여 일관된 품질을 제공합니다.' },
      { title: '정기 점검 보고', desc: '매 시공 후 작업 내용과 특이사항을 고객님께 보고드립니다.' }
    ],
    equipment: ['전담 차량 및 장비', '맞춤형 관리 매뉴얼'],
    features: ['체계적인 정기 방문 시스템', '장기 계약 할인 혜택', '365일 비대면 관리 서비스 가능']
  }
];

export const INITIAL_PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: '제주 연동 프리미엄 아파트 입주청소',
    category: '입주청소',
    majorCategory: MajorCategory.PROFESSIONAL,
    beforeImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000',
    afterImg: 'https://images.unsplash.com/photo-1527352723443-c47c82761e05?auto=format&fit=crop&q=80&w=1000',
    description: '인테리어 후 미세먼지와 보양지를 완벽하게 제거하고 친환경 살균 소독을 완료했습니다.',
    date: '2025. 12. 10'
  },
  {
    id: 'p2',
    title: '서귀포 신축 빌라 준공 청소 현장',
    category: '준공청소',
    majorCategory: MajorCategory.SPECIAL,
    beforeImg: 'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1000',
    afterImg: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1000',
    description: '공사 잔여물과 백시멘트 가루를 특수 장비로 말끔히 제거하여 바로 입주 가능한 상태로 만들었습니다.',
    date: '2025. 12. 15'
  }
];
