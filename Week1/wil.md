# 프론트 1주차

## 맛보기
- HTML - CSS - JavaScript - Dom - Event
- 하트를 누르면 화면이 바뀜 

## 웹은 어떻게 만들어지는가

### 세가지 역할: 
- 무엇이 있는가(HTML): 화면에 있는걸 코드로 표현
- 어떻게 보일지(CSS): 색상, 크기, 간격 등등 정함(디자인 느낌)
- 어떻게 동작하는지(JavaScript): 

## JavaScript
- 개발자 도구(windows): Ctrl + Shift + I or F12
``` document.querySelector("h1").textContent = "안녕하세요!" ```
- 화면에서 h1 찾고 "안녕하세요"로 바꿈
- DOM(Document Object Model): 문서 표준 양식 느낌, 이걸로 JS가 요소 찾고 바꿈
- 사용자는 코드 입력하지 않음 -> 클릭했을 때 JS를 실행되게 하자
- Event: 사람이 클릭했다 + 키보드 입력, 스크롤 등 사용자의 행동

### 사람의 행동 -> Event -> JavaScript -> 화면의 변화