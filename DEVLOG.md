# PBI Robot Education Center - 개발일지

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
