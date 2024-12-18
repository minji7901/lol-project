# 롤 정보 사이트
[배포](https://lol-project-woad.vercel.app/) <br />
next.js를 사용하여 롤 정보를 보여주는 사이트입니다.

## ✅ 기능

- 반응형
- ITEMS : 아이템을 보여줌
- CHAMPION : 챔피언을 보여주며, 해당 캐릭터 클릭시 디테일 페이지로 이동
- CHAMPION ROTATION : tanstack query로 챔피언을 보여주며, 마찬가지로 해당 캐릭터 클릭시 디테일 페이지로 이동
- 다크모드 구현

## 📁 파일구조
```bash
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts // 챔피언 로테이션 API의 라우트를 정의
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx // 특정 챔피언의 상세 페이지를 렌더링
 ┃ ┃ ┣ 📜loading.tsx // 챔피언 페이지 로딩 처리
 ┃ ┃ ┗ 📜page.tsx // 챔피언 리스트 페이지
 ┃ ┣ 📂items
 ┃ ┃ ┣ 📜loading.tsx // 아이템 페이지 로딩 처리
 ┃ ┃ ┗ 📜page.tsx //아이템 페이지
 ┃ ┣ 📂rotation
 ┃ ┃ ┣ 📜error.tsx // 로테이션 페이지 에러 처리
 ┃ ┃ ┣ 📜loading.tsx // 로테이션 페이지 로딩 처리
 ┃ ┃ ┗ 📜page.tsx // 로테이션 페이지
 ┃ ┣ 📜global-error.tsx // 글로벌 에러 처리
 ┃ ┣ 📜globals.css // 글로벌 스타일
 ┃ ┣ 📜layout.tsx //레이아웃 설정
 ┃ ┣ 📜not-found.tsx // 404페이지
 ┃ ┣ 📜page.tsx // 기본 페이지
 ┃ ┗ 📜providers.tsx // tanstack query provider 설정 
 ┣ 📂components
 ┃ ┣ 📂Champion
 ┃ ┃ ┗ 📜ChampionCard.tsx // 챔피언 카드 컴포넌트
 ┃ ┣ 📂item
 ┃ ┃ ┗ 📜ItemCard.tsx // 아이템 카드 컴포넌트
 ┃ ┣ 📜Footer.tsx // 공통 레이아웃 푸터 컴포넌트
 ┃ ┣ 📜Header.tsx // 공통 레이아웃 헤더 컴포넌트
 ┃ ┣ 📜ThemeToggle.tsx // 테마 전환 토글 버튼
 ┃ ┗ 📜Title.tsx // 공통 페이지 타이틀 컴포넌트 
 ┣ 📂public
 ┃ ┗ 📜static.ts // base url 
 ┣ 📂types
 ┃ ┣ 📜Champion.ts // 챔피언 데이터 타입
 ┃ ┣ 📜ChampionRotation.ts // 챔피언 로테이션 관련 타입
 ┃ ┗ 📜Item.ts // 아이템 데이터 타입
 ┗ 📂utils
 ┃ ┣ 📜delay.ts // 지연 시간을 처리하는 함수
 ┃ ┗ 📜serverApi.ts // 서버 API와의 통신을 위한 유틸리티
```
