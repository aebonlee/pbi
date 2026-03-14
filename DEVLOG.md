# PBI Robot - 개발일지

## 2026-03-14 | 프로젝트 초기 구축

### 개요
PBI Robot(주식회사 피비아이)의 AI 로봇 수영장 청소기 브랜드 사이트를 Next.js 기반으로 개발하였습니다.

---

### 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 16.1.6 |
| 언어 | TypeScript | ^5 |
| 스타일링 | Tailwind CSS | v4 |
| 다국어 | next-intl | ^4.8.3 |
| 애니메이션 | Framer Motion | ^12.34.3 |
| 상태관리 | Zustand | ^5.0.11 |
| 폼 | react-hook-form + Zod | ^7.71.2 / ^4.3.6 |
| 아이콘 | Lucide React | ^0.575.0 |
| 빌드 | Turbopack + Static Export | - |

---

### 프로젝트 구조

```
D:\pbi/
├── messages/              # 다국어 메시지 (ko.json, en.json)
├── public/                # 정적 파일 (SVG, CNAME)
├── src/
│   ├── app/               # Next.js App Router 페이지
│   │   ├── [locale]/      # 다국어 라우팅
│   │   │   ├── about/     # 회사소개, 연혁, 브랜드
│   │   │   ├── blog/      # 블로그
│   │   │   ├── contact/   # 문의
│   │   │   ├── faq/       # FAQ
│   │   │   ├── products/  # 제품 목록 + 상세([slug])
│   │   │   ├── quote/     # 견적 요청
│   │   │   └── store/     # 스토어 + 장바구니
│   │   ├── globals.css    # 글로벌 스타일 (Tailwind 테마)
│   │   ├── layout.tsx     # 루트 레이아웃
│   │   ├── page.tsx       # 루트 리다이렉트 (/ko)
│   │   └── not-found.tsx  # 404 페이지
│   ├── components/
│   │   ├── about/         # 회사소개 컴포넌트 (5개)
│   │   ├── blog/          # 블로그 컴포넌트 (1개)
│   │   ├── contact/       # 문의 컴포넌트 (3개)
│   │   ├── faq/           # FAQ 컴포넌트 (1개)
│   │   ├── home/          # 홈 컴포넌트 (4개)
│   │   ├── layout/        # 레이아웃 컴포넌트 (3개)
│   │   ├── products/      # 제품 컴포넌트 (3개)
│   │   ├── quote/         # 견적 컴포넌트 (1개)
│   │   ├── shared/        # 공유 컴포넌트 (3개)
│   │   ├── store/         # 스토어 컴포넌트 (2개)
│   │   └── ui/            # UI 기본 컴포넌트 (4개)
│   ├── data/              # 정적 데이터 (제품, FAQ, 연혁)
│   ├── i18n/              # 국제화 설정 (routing, request, navigation)
│   ├── images/            # 이미지 에셋 (logo, pbi_1~9.webp)
│   ├── lib/               # 유틸리티 (cn, formatPrice, constants, images)
│   ├── store/             # Zustand 스토어 (장바구니)
│   └── types/             # TypeScript 타입 정의
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

### 구현된 페이지 (총 30개 정적 페이지)

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/ko`, `/en` | 히어로 슬라이드쇼, 제품 쇼케이스, 회사 하이라이트, CTA |
| 회사소개 | `/[locale]/about` | 비전, 3대 핵심가치, 인증 및 수상 |
| 연혁 | `/[locale]/about/journey` | 2019~2025 타임라인 |
| 브랜드 | `/[locale]/about/brand` | 로고, PBI 의미, 브랜드 컬러, 사용 가이드 |
| 제품 목록 | `/[locale]/products` | AquaSense 2 Pro/Ultra 카드 + 비교 테이블 |
| 제품 상세 | `/[locale]/products/[slug]` | 이미지 갤러리, 기능, 사양 테이블 |
| 스토어 | `/[locale]/store` | 온라인 구매 (장바구니 담기) |
| 장바구니 | `/[locale]/store/cart` | 수량 조절, 합계, 결제 |
| 블로그 | `/[locale]/blog` | 6개 블로그 포스트 (뉴스, 기술, 팁, 이벤트) |
| FAQ | `/[locale]/faq` | 4개 카테고리 탭 + 아코디언 (10개 Q&A) |
| 문의 | `/[locale]/contact` | 문의 폼 + 회사 정보 카드 |
| 견적 요청 | `/[locale]/quote` | 견적 요청 폼 (회사명, 수영장 정보 등) |
| 404 | `/_not-found` | 커스텀 404 페이지 |

---

### 주요 기능

1. **다국어 지원 (한국어/영어)**
   - next-intl 기반 라우팅 (`/ko/...`, `/en/...`)
   - 헤더 언어 전환 버튼 (Globe 아이콘)
   - 모든 텍스트 메시지 파일 분리 (`messages/ko.json`, `messages/en.json`)

2. **반응형 디자인**
   - 모바일 ~ 데스크탑 완벽 대응
   - 모바일 햄버거 메뉴
   - Tailwind CSS v4 커스텀 테마 (--color-primary, --color-section 등)

3. **애니메이션**
   - Framer Motion 기반 ScrollReveal (스크롤 시 페이드인)
   - 히어로 배경 슬라이드쇼 (6초 간격 자동 전환)
   - 방향별 진입 애니메이션 (up, down, left, right)

4. **장바구니 시스템**
   - Zustand + persist 미들웨어 (localStorage 저장)
   - 수량 증감, 삭제, 합계 계산
   - 가격 포맷팅 (KRW/USD)

5. **폼 시스템**
   - react-hook-form + Zod 스키마 유효성 검증
   - 문의 폼 / 견적 요청 폼
   - mailto 기반 제출

6. **SEO 최적화**
   - 페이지별 동적 Metadata (title, description, OpenGraph)
   - 정적 사이트 생성 (SSG)
   - Pretendard 웹폰트

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 5.1s
✓ Generating static pages (30/30) in 918.9ms
```

- 컴파일: 5.1초
- 정적 페이지 생성: 30개 / 918.9ms
- 에러: 0개

---

### 향후 계획

- [ ] GitHub Pages 또는 Vercel 배포
- [ ] 실제 제품 이미지 교체
- [ ] 블로그 CMS 연동 (Contentful, Sanity 등)
- [ ] 결제 시스템 연동
- [ ] Google Analytics / 카카오맵 연동
- [ ] PWA 지원
