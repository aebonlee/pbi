# PBI Robot Education Center - 개발일지

## 2026-03-15 | 타이틀 배경색 블루 컬러 적용

### 개요
히어로, 섹션 타이틀, CTA 타이틀의 그래디언트 텍스트를 **메인 블루(primary #0056b3) 배경 + 흰색 텍스트** 스타일로 변경하였습니다.

---

### 변경 사항

#### `src/components/shared/SectionTitle.tsx`
- h2: `gradient-text` → `text-white bg-primary px-6 py-2 rounded-lg`
- `section-title-bar` 장식 제거 → 블루 배경 자체가 시각 강조 역할

#### `src/components/home/HeroSection.tsx`
- h1: `gradient-text-hero` → `text-white bg-primary px-6 py-3 rounded-xl`

#### `src/components/home/CTASection.tsx`
- h2: `gradient-text-hero` → `text-white bg-primary px-6 py-2 rounded-lg`

---

### 빌드 결과

```
✓ Compiled successfully in 4.0s
✓ Generating static pages (58/58) in 1104.2ms
```

---

## 2026-03-15 | Open Graph (OG) 메타 태그 및 미리보기 이미지 추가

### 개요
카카오톡, 페이스북, 트위터 등 소셜 미디어에서 URL 공유 시 미리보기(제목, 설명, 이미지)가 정상 표시되도록 Open Graph 메타 태그와 OG 이미지를 추가하였습니다.

---

### 변경 사항

#### OG 이미지 생성 — `public/images/og/default.png`
- 1200×630px PNG 이미지 (소셜 미디어 권장 규격)
- 3색 그래디언트 배경 (primary → edu-teens → edu-kids)
- 로봇 아이콘 + "PBI 로봇 교육센터" 타이틀 + 부제 + 태그라인
- sharp 라이브러리로 SVG → PNG 변환 생성

#### `src/app/[locale]/layout.tsx` — OG 메타 태그 완성
- `og:url`: `https://pbi.dreamitbiz.com`
- `og:title`: 한/영 사이트 제목
- `og:description`: 한/영 사이트 설명
- `og:type`: `website`
- `og:image`: `/images/og/default.png` (1200×630)
- `og:site_name`: PBI 로봇 교육센터
- `og:locale`: `ko_KR` / `en_US`
- `twitter:card`: `summary_large_image` 추가

#### `src/app/layout.tsx` — 루트 메타데이터 업데이트
- 이전 제품 사이트 제목/설명 → 교육 사이트로 변경

---

### 수정 파일 (3개)

| 파일 | 변경 내용 |
|------|----------|
| `public/images/og/default.png` | OG 미리보기 이미지 신규 생성 (1200×630) |
| `src/app/[locale]/layout.tsx` | OG/Twitter 메타 태그 완성 |
| `src/app/layout.tsx` | 루트 메타데이터 교육 사이트로 변경 |

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.5s
✓ Generating static pages (58/58) in 1130.2ms
```

---

### Git 커밋 이력

| 커밋 | 내용 |
|------|------|
| `feat: PBI Robot 로봇 수영장 청소기 브랜드 사이트 초기 구축` | 전체 소스코드, 이미지, 설정파일 87개 파일 |
| `ci: GitHub Actions 배포 워크플로 추가` | GitHub Pages 자동 빌드 & 배포 설정 |
| `feat: 제품 사이트를 로봇 교육 사이트로 전면 전환` | 교육과정, 온라인학습, 체험프로그램, 강사진 등 |
| `style: 히어로 및 섹션 타이틀 그래디언트 컬러 적용` | 그래디언트 텍스트, 교육 테마 색상 강화 6개 파일 |
| `feat: Open Graph 메타 태그 및 OG 이미지 추가` | 소셜 공유 미리보기 지원 |

---

## 2026-03-15 | 히어로 & 타이틀 컬러 강화

### 개요
히어로 섹션과 각 섹션 타이틀이 단색(text-text-primary)으로만 구성되어 밋밋했던 문제를 해결하기 위해 그래디언트 텍스트, 교육 테마 색상, 장식 요소를 전면 적용하였습니다.

---

### 변경 사항

#### `src/app/globals.css` — 그래디언트 CSS 클래스 추가
| 클래스 | 색상 | 용도 |
|--------|------|------|
| `.gradient-text` | primary → accent | 섹션 타이틀 (기존, 미사용→활용) |
| `.gradient-text-warm` | edu-kids(오렌지) → edu-teens(보라) | 따뜻한 톤 강조용 |
| `.gradient-text-cool` | edu-adults(청록) → edu-corporate(초록) | 차가운 톤 강조용 |
| `.gradient-text-hero` | primary → edu-teens → edu-kids | 히어로 타이틀 전용 3색 그래디언트 |
| `.section-title-bar` | primary → accent 가로 바 | 섹션 타이틀 하단 장식 바 |

#### `src/components/home/HeroSection.tsx` — 히어로 컬러 강화
- h1: `text-text-primary` → `gradient-text-hero` (3색 그래디언트)
- 배경 블롭 투명도: 10% → 15~20%로 증가
- edu-corporate 색상 블롭 1개 추가 (총 4개)

#### `src/components/shared/SectionTitle.tsx` — 섹션 타이틀 컬러 강화
- h2: `text-text-primary` → `gradient-text` (primary → accent 그래디언트)
- 타이틀 하단에 `section-title-bar` 그래디언트 컬러바 장식 추가
- 중앙 정렬 시 바도 중앙 정렬 (`section-title-bar-center`)

#### `src/components/home/CTASection.tsx` — CTA 섹션 컬러 강화
- h2: `text-text-primary` → `gradient-text-hero` (3색 그래디언트)
- 배경: `from-primary/5` → `from-primary/10`, `to-accent/5` → `to-edu-teens/10`
- 보더: `border-border` → `border-primary/20`
- 배경 블롭 투명도 증가 + edu-corporate 블롭 추가

#### `src/components/home/WhyUsSection.tsx` — 아이콘 색상 개별화
- 4개 카드 아이콘: 단일 `text-primary` → 각각 다른 교육 테마 색상
  - 전문 강사진: edu-kids (오렌지)
  - 실습 중심: edu-teens (보라)
  - 전 연령 대상: edu-adults (청록)
  - 만족도: edu-corporate (초록)

#### `src/components/home/TestimonialSection.tsx` — 인용 아이콘 색상 변경
- Quote 아이콘: `text-primary/20` → `text-edu-teens/30` (보라 톤)

---

### 수정 파일 (6개)

| 파일 | 변경 내용 |
|------|----------|
| `src/app/globals.css` | 그래디언트 텍스트 4종 + 섹션 타이틀 바 CSS 추가 (+35줄) |
| `src/components/home/HeroSection.tsx` | 히어로 h1 그래디언트 + 배경 블롭 강화 |
| `src/components/shared/SectionTitle.tsx` | h2 그래디언트 + 하단 컬러바 장식 |
| `src/components/home/CTASection.tsx` | CTA h2 그래디언트 + 배경 강화 |
| `src/components/home/WhyUsSection.tsx` | 아이콘 4색 교육 테마 개별 적용 |
| `src/components/home/TestimonialSection.tsx` | Quote 아이콘 보라 톤 변경 |

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.6s
✓ Generating static pages (58/58) in 1048.9ms
```

- 컴파일: 4.6초
- 정적 페이지 생성: 58개 / 1048.9ms
- TypeScript 에러: 0개

---

### Git 커밋 이력

| 커밋 | 내용 |
|------|------|
| `feat: PBI Robot 로봇 수영장 청소기 브랜드 사이트 초기 구축` | 전체 소스코드, 이미지, 설정파일 87개 파일 |
| `ci: GitHub Actions 배포 워크플로 추가` | GitHub Pages 자동 빌드 & 배포 설정 |
| `feat: 제품 사이트를 로봇 교육 사이트로 전면 전환` | 교육과정, 온라인학습, 체험프로그램, 강사진 등 |
| `style: 히어로 및 섹션 타이틀 그래디언트 컬러 적용` | 그래디언트 텍스트, 교육 테마 색상 강화 6개 파일 |

---

## 2026-03-15 | 로봇 교육 사이트로 전면 전환

### 개요
기존 PBI Robot 제품 사이트(pbirobot.dreamitbiz.com)를 **로봇 교육 사이트**(pbi.dreamitbiz.com)로 전면 교체하였습니다.
대상: 전 연령(키즈~성인~기업). 콘텐츠: 교육과정 + 온라인학습 + 체험프로그램 종합.

기술 스택(Next.js 16, TypeScript, Tailwind v4, next-intl, Framer Motion 등)과 빌드/배포 인프라(Static Export, GitHub Actions → GitHub Pages)는 그대로 유지.

---

### 변경 사항 요약

#### 삭제된 기능
- 제품 카탈로그 (AquaSense 2 Pro/Ultra)
- 온라인 스토어 + 장바구니 (Zustand cart-store)
- 블로그
- 견적 요청
- 회사 연혁 / 브랜드 페이지
- 제품 이미지 (pbi_1~9.webp)

#### 신규 기능
- **교육과정** (8개): 키즈 로봇 탐험대, 주니어 로봇 코딩, 청소년 로봇 공학 입문, 청소년 AI 로봇 프로젝트, 성인 로봇 프로그래밍 기초, 성인 로봇 자동화 실무, 기업 로봇 도입 워크숍, 기업 스마트팩토리 로봇 교육
- **온라인학습** (6개): 로봇의 이해, 센서와 액추에이터, 로봇 프로그래밍 기초, AI와 로봇의 만남, 수중 로봇 기술, 로봇 윤리와 미래
- **체험프로그램** (5개): 여름 로봇 캠프, 가족 로봇 체험 워크숍, 로봇 공장 견학, PBI 로봇 챌린지 대회, 학교 방문 로봇 교실
- **강사진** (6명): 로봇 공학, AI, 키즈 교육, 메카트로닉스, 스마트팩토리, 수중 로봇 전문가
- **교육 FAQ** (12개): 일반, 교육과정, 체험프로그램, 결제/환불 4개 카테고리
- **수강생 후기** 섹션 (홈페이지)
- **교육 테마 색상**: edu-kids(#ff6b35), edu-teens(#7c3aed), edu-adults(#0891b2), edu-corporate(#059669)

#### 수정된 파일
- `public/CNAME`: pbirobot.dreamitbiz.com → pbi.dreamitbiz.com
- `src/lib/constants.ts`: SITE_CONFIG, NAV_ITEMS(7개), EDUCATION_CENTER_INFO
- `src/lib/images.ts`: 교육 관련 이미지 경로
- `src/app/globals.css`: 교육 테마 색상 토큰 추가
- `messages/ko.json`, `messages/en.json`: 전면 교체 (교육 사이트 메시지)
- `src/app/[locale]/layout.tsx`: 메타데이터 교육 사이트로 변경
- `src/app/[locale]/page.tsx`: 홈 구성 변경 (CourseShowcase, WhyUsSection, TestimonialSection)
- Header: NAV_ITEMS 7개, 장바구니 아이콘 제거, 상담 신청 버튼
- Footer: 교육 링크, 교육센터 정보
- 소개/FAQ/문의 컴포넌트: 교육 콘텐츠로 수정

---

### 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| 프레임워크 | Next.js (App Router) | 16.1.6 |
| 언어 | TypeScript | ^5 |
| 스타일링 | Tailwind CSS | v4 |
| 다국어 | next-intl | ^4.8.3 |
| 애니메이션 | Framer Motion | ^12.34.3 |
| 폼 | react-hook-form + Zod | ^7.71.2 / ^4.3.6 |
| 아이콘 | Lucide React | ^0.575.0 |
| 빌드 | Turbopack + Static Export | - |

---

### 프로젝트 구조

```
D:\pbi/
├── messages/              # 다국어 메시지 (ko.json, en.json)
├── public/                # 정적 파일 (CNAME: pbi.dreamitbiz.com)
├── src/
│   ├── app/               # Next.js App Router 페이지
│   │   ├── [locale]/      # 다국어 라우팅
│   │   │   ├── about/     # 교육센터 소개
│   │   │   ├── contact/   # 교육 상담 문의
│   │   │   ├── courses/   # 교육과정 목록 + 상세([slug])
│   │   │   ├── faq/       # 교육 FAQ
│   │   │   ├── instructors/ # 강사진
│   │   │   ├── learning/  # 온라인학습 목록 + 상세([slug])
│   │   │   └── programs/  # 체험프로그램 목록 + 상세([slug])
│   │   ├── globals.css    # 글로벌 스타일 (교육 테마 포함)
│   │   ├── layout.tsx     # 루트 레이아웃
│   │   ├── page.tsx       # 루트 리다이렉트 (/ko)
│   │   └── not-found.tsx  # 404 페이지
│   ├── components/
│   │   ├── about/         # 소개 컴포넌트 (3개)
│   │   ├── contact/       # 문의 컴포넌트 (3개)
│   │   ├── courses/       # 교육과정 컴포넌트 (4개)
│   │   ├── faq/           # FAQ 컴포넌트 (1개)
│   │   ├── home/          # 홈 컴포넌트 (5개)
│   │   ├── instructors/   # 강사진 컴포넌트 (2개)
│   │   ├── layout/        # 레이아웃 컴포넌트 (3개)
│   │   ├── learning/      # 온라인학습 컴포넌트 (3개)
│   │   ├── programs/      # 체험프로그램 컴포넌트 (3개)
│   │   ├── shared/        # 공유 컴포넌트 (2개)
│   │   └── ui/            # UI 기본 컴포넌트 (4개)
│   ├── data/              # 정적 데이터 (교육과정, 학습, 프로그램, 강사, FAQ)
│   ├── i18n/              # 국제화 설정
│   ├── images/            # 이미지 에셋 (logo.webp)
│   ├── lib/               # 유틸리티 (cn, formatPrice, constants, images)
│   └── types/             # TypeScript 타입 (education.ts)
├── PLAN.md                # 구축 계획서
├── DEVLOG.md              # 개발일지
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

### 구현된 페이지 (총 58개 정적 페이지)

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 홈 | `/ko`, `/en` | 히어로, 인기 교육과정, Why Us, 수강생 후기, CTA |
| 교육과정 목록 | `/[locale]/courses` | 연령대/레벨 필터 + 8개 교육과정 그리드 |
| 교육과정 상세 | `/[locale]/courses/[slug]` | 커리큘럼, 특징, 수강 정보 사이드바 (8 slugs × 2) |
| 온라인학습 목록 | `/[locale]/learning` | 카테고리 필터 + 6개 학습 콘텐츠 그리드 |
| 온라인학습 상세 | `/[locale]/learning/[slug]` | 콘텐츠 상세 + 태그 (6 slugs × 2) |
| 체험프로그램 목록 | `/[locale]/programs` | 유형 필터 + 5개 프로그램 그리드 |
| 체험프로그램 상세 | `/[locale]/programs/[slug]` | 프로그램 하이라이트, 정보, CTA (5 slugs × 2) |
| 강사진 | `/[locale]/instructors` | 6명 강사 프로필 그리드 |
| 소개 | `/[locale]/about` | 교육 비전, 핵심 가치, 인증/파트너 |
| FAQ | `/[locale]/faq` | 4개 카테고리 탭 + 아코디언 (12개 Q&A) |
| 문의 | `/[locale]/contact` | 교육 상담 폼 (관심 분야 선택) + 교육센터 정보 |
| 404 | `/_not-found` | 커스텀 404 페이지 |

---

### 주요 기능

1. **전 연령 교육과정**: 키즈(5~10세), 청소년(11~18세), 성인, 기업 4개 연령대별 맞춤 과정
2. **교육과정 필터링**: 연령대 + 레벨(입문/중급/고급) 이중 필터
3. **온라인 학습 콘텐츠**: 영상, 문서, 인터랙티브 3가지 유형
4. **체험 프로그램**: 캠프, 워크숍, 견학, 대회 4가지 유형
5. **전문 강사진**: 6명 강사 프로필 (전문 분야, 약력)
6. **수강생 후기**: 홈페이지 테스티모니얼 섹션
7. **교육 상담 폼**: 관심 분야 선택 포함 상담 신청
8. **다국어 지원**: 한국어/영어 완전 지원
9. **반응형 디자인**: 모바일 ~ 데스크탑 대응
10. **정적 사이트 생성**: 58개 페이지 SSG

---

### 빌드 결과

```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 4.5s
✓ Generating static pages (58/58) in 1048.9ms
```

- 컴파일: 4.5초
- 정적 페이지 생성: 58개 / 1048.9ms
- TypeScript 에러: 0개

---

### 배포

- **플랫폼**: GitHub Pages
- **도메인**: `pbi.dreamitbiz.com` (CNAME 변경)
- **CI/CD**: GitHub Actions 자동 배포
  - `main` 브랜치 푸시 시 자동 빌드 & 배포
  - 워크플로 파일: `.github/workflows/deploy.yml`
- **빌드 방식**: `next build` → `out/` 디렉토리 정적 export → GitHub Pages 업로드

---

### Git 커밋 이력

| 커밋 | 내용 |
|------|------|
| `feat: PBI Robot 로봇 수영장 청소기 브랜드 사이트 초기 구축` | 전체 소스코드, 이미지, 설정파일 87개 파일 |
| `ci: GitHub Actions 배포 워크플로 추가` | GitHub Pages 자동 빌드 & 배포 설정 |
| `feat: 제품 사이트를 로봇 교육 사이트로 전면 전환` | 교육과정, 온라인학습, 체험프로그램, 강사진 등 |

---

### 향후 계획

- [ ] 교육 관련 실제 이미지/사진 추가
- [ ] 온라인 학습 콘텐츠 플랫폼 연동 (영상 플레이어, 인터랙티브 콘텐츠)
- [ ] 수강 신청/결제 시스템 연동
- [ ] Google Analytics / 카카오맵 연동
- [ ] 수강생 포털 (학습 진도 관리)
- [ ] 블로그/뉴스 섹션 추가 (교육 소식)

---

## 2026-03-14 | 프로젝트 초기 구축

### 개요
PBI Robot(주식회사 피비아이)의 AI 로봇 수영장 청소기 브랜드 사이트를 Next.js 기반으로 개발하였습니다.
(이후 2026-03-15에 교육 사이트로 전면 전환됨)

- 컴파일: 5.1초
- 정적 페이지 생성: 30개 / 918.9ms
- 에러: 0개
- 배포: GitHub Pages (`pbirobot.dreamitbiz.com`)
