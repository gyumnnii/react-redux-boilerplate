# React + Recoil + Reactstrap + React-router 보일러 플레이트

## 프로젝트 설명

해당 프로젝트는 CRA를 이용하여 사용할 기본 라이브러리 및 포매터 설정을 완료한 보일러 플레이트입니다.

## 사용법

### 저장소 복제

```sh
git clone https://github.com/gyumnnii/react-boiler-plate
```

### 실행

- 패키지 매니저로 `yarn`을 사용하고 있습니다.

```
// 패키지 다운로드
yarn

// 실행 (localhost:3000)
yarn start
```

### 적용한 라이브러리

설정한 라이브러리는 다음과 같습니다.
|라이브러리|버전|
|--|--|
|reactstrap|^8.9.0|
|recoil|^0.1.2 (베타)|
|axios|^0.21.1|
|typescript|^4.1.2|
|react-router-dom|^5.2.0|
|husky|4|
|lint-staged|^10.5.4|
|eslint|^7.21.0|
|prettier|^2.2.1|
**이외에는 CRA에서 기본적으로 설정한 버전을 따라가고 있습니다**

### 디렉토리

현재 생성된 디렉토리 구조는 다음과 같습니다.
|디렉토리|설명|
|--|--|
|src|소스 코드 폴더|
|src/api|API call 함수|
|src/components|React Component|
|src/pages|React Component(페이지 단위)|
|src/recoil|Recoil Atom/Selector|
|src/router|React-router Component|
