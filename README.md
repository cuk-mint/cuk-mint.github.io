# MINT Lab — 연구실 홈페이지

**M**achine **I**ntelligence, **N**atural Language & **T**rustworthiness
가톨릭대학교 인공지능학과

Jekyll + GitHub Pages. **서버 불필요, 비용 0원.**

---

## 이중언어 구조 (EN 기본 / KO 보조)

- 기본 사이트는 **영어**입니다. 우측 상단 **EN | KO** 탭으로 한국어 버전으로 전환합니다.
- 한국어 페이지는 `ko/` 폴더에 있고 주소는 `/ko/...` 입니다 (예: `/research/` ↔ `/ko/research/`).
- **데이터(논문·뉴스·연구주제·구성원)는 한 곳에서 관리**되고 두 언어 페이지가 같이 씁니다.
  한국어 문구는 `_ko` 필드에 넣습니다 (`text_ko`, `summary_ko`, `detail_ko`, `bio_ko`).
  `_ko` 필드가 없으면 영어가 대신 표시되므로, 급하면 영어만 채워도 사이트는 안 깨집니다.
- 페이지 자체의 문구(예: Join Us 본문)를 고칠 때는 **영어 파일과 `ko/` 파일 양쪽**을 고쳐야 합니다.

## 자주 하는 작업

### 논문 추가

`_data/publications.yml` 에서 해당 섹션 **맨 위**에 추가합니다.

```yaml
- title: "논문 제목"
  authors: "저자1, 저자2, Yongil Kim, 저자3"
  venue: "EMNLP"
  year: 2026
  note: "Oral"                       # 없으면 이 줄 삭제
  selected: true                     # 홈 화면에도 노출할 때만
  links:
    arxiv: "https://arxiv.org/abs/..."
    code:  "https://github.com/..."
```

- `Yongil Kim` 은 **자동으로 굵게 + 밑줄** 처리됩니다 (`_config.yml` 의 `pi_name` 기준)
- 공동 1저자는 이름 뒤에 `*` 를 붙이면 됩니다: `Yongil Kim*`
- `links` 안에서 필요 없는 줄은 지우면 버튼이 안 나옵니다

### 뉴스 추가

`_data/news.yml` **맨 위**에 추가합니다. `text`는 영어(기본 사이트), `text_ko`는 한국어(/ko/)입니다.

```yaml
- date: "2026-09"
  tag: paper                          # paper | award | talk | lab
  text: "*Paper Title* has been accepted to **ACL 2027**."
  text_ko: "*논문 제목* 논문이 **ACL 2027**에 게재 승인되었습니다."
```

`**굵게**`, `*기울임*`, `[링크](https://...)` 를 쓸 수 있습니다.

### 과제 추가 (Research 페이지 상단)

`_data/projects.yml` 의 `government:` / `industry:` 아래에 추가합니다.
비어 있으면 페이지에 안내 문구가 대신 표시됩니다.

```yaml
government:
  - title: "과제명"
    agency: "IITP"
    period: "2027.03 – 2030.02"
    role: "PI"
```

### 구성원 추가

`_data/members.yml` 의 `graduate:` / `undergraduate:` 아래에 추가합니다.

```yaml
graduate:
  - name: "Hong Gildong"
    name_ko: "홍길동"
    role: "M.S. Student"
    photo: "hong.jpg"                 # assets/img/people/ 에 넣고 파일명만
    started: "2027.03"
```

사진이 없으면 이름 첫 글자가 자동으로 들어갑니다.
비어 있으면(`[]`) People 페이지에 "모집 중" 안내가 대신 표시됩니다.

### 연구 주제 수정

`_data/research.yml`. `summary` 는 홈 화면 카드에, `detail` 은 Research 페이지에 들어갑니다.

### 연구실 이름 · 주소 · 이메일 변경

`_config.yml` 상단만 고치면 사이트 전체에 반영됩니다.

---

## 반영 방법

```
파일 수정  →  git add . && git commit -m "add EMNLP 2027 paper"  →  git push
```

push 하면 GitHub가 알아서 빌드합니다. **약 30초~1분 뒤** 사이트에 반영됩니다.
빌드 상태는 저장소의 **Actions** 탭에서 확인할 수 있습니다.

> Git이 없다면 [GitHub Desktop](https://desktop.github.com/) 을 쓰거나,
> github.com 저장소 화면에서 파일을 직접 편집(연필 아이콘)해도 됩니다.
> 논문 한 줄 추가 정도는 웹에서 편집하는 게 오히려 빠릅니다.

---

## 로컬 미리보기 (선택)

없어도 됩니다. 하지만 크게 뜯어고칠 때는 있으면 편합니다.

```bash
# Ruby 설치 후 (Windows: https://rubyinstaller.org/)
gem install bundler
bundle install
bundle exec jekyll serve
# → http://127.0.0.1:4000
```

---

## 커스텀 도메인 연결 (`mint.catholic.ac.kr`)

1. 학교 전산정보처에 요청: `mint.catholic.ac.kr` 의 **CNAME 레코드**를 `cuk-mint.github.io` 로 지정
2. 저장소 루트에 `CNAME` 파일 생성, 내용은 한 줄: `mint.catholic.ac.kr`
3. `_config.yml` 의 `url` 을 `https://mint.catholic.ac.kr` 로 변경
4. 저장소 **Settings → Pages → Custom domain** 에 입력하고 **Enforce HTTPS** 체크

HTTPS 인증서는 GitHub가 무료로 자동 발급/갱신합니다.

---

## 폴더 구조

```
_config.yml              사이트 전역 설정 (이름, 주소, 메뉴)
_data/
  publications.yml       논문          ← 가장 자주 건드림
  news.yml               뉴스          ← 두 번째로 자주
  members.yml            구성원
  research.yml           연구 주제
_layouts/                페이지 골격
_includes/               반복되는 조각 (nav, footer, 논문 한 줄)
assets/
  css/style.css          디자인 — 색은 파일 맨 위 :root 변수
  js/main.js             메뉴 토글, 논문 필터
  img/people/            구성원 사진을 여기에
index.html               홈
publications.html        논문
people.html              구성원
research.html            연구
courses.md               강의
join.md                  학생 모집
contact.html             연락처
```

---

## 채워야 할 것 (TODO)

- [x] 연구실 이름 — MINT Lab
- [x] 로고 (`assets/img/logo.svg`, `favicon.svg`) — 민트 잎 + 신경망 잎맥
- [x] 교수 프로필 사진 (`assets/img/people/yongil-kim.jpg`)
- [x] 주소 — N223호, 니콜스관 2층 (영/한)
- [x] 영어 기본 + 한국어(/ko/) 이중언어 구조
- [ ] `_config.yml` — 학교 이메일 나오면 교체
- [ ] `courses.md` / `ko/courses.md` — 실제 개설 학기·과목 확인
- [ ] 과제 생기면 `_data/projects.yml` 에 추가

## 브랜드

| 항목 | 값 |
|---|---|
| 딥 민트 (본문 포인트) | `#0f7a5a` — 흰 배경 대비 5.3:1, 본문 텍스트 기준 통과 |
| 진한 단계 (hover) | `#0b6146` |
| 밝은 민트 (로고·장식) | `#2fbd8d` |
| 옅은 민트 (배경) | `#e7f6ef` |

색을 바꾸려면 `assets/css/style.css` 맨 위 `:root` 블록만 고치면 됩니다.
