# 컨벤션

## 목차
- [컨벤션](#컨벤션)
  - [목차](#목차)
  - [Gitlab 컨벤션](#gitlab-컨벤션)
  - [JIRA 태스크 컨벤션](#jira-태스크-컨벤션)

<br>

## Gitlab 컨벤션
<br>

  - 기본
    - init 제외하고 **git add . 금지! (수정한 소스 파일만 add 해주세요) 
    - feature branch(ex. front-회원가입페이지)는 dev에 PR 처리 후 삭제
    - master,dev branch 부터는 CI/CD(Jenkins) 연결 후 자동 빌드

<br>
    
  - 브랜치 양식
    - master = latest release
    - develop
      - develop/FE
      - develop/BE
      - develop/EM
    - feature
      - feature/FE/[feature name]
      - feature/BE/[feature name]
      - feature/EM/[feature name]
        - ex. feature/FE/mainpage
    - fix
      - fix/[issue num]
    - extra
      - extra
      - 기타 문서 수정 등 위에 해당하지 않는 경우

<br>

  - 커밋 양식
    -상세기능 or 바뀐거 구체적으로 적기
      - feature
      -feat : 새로운 기능 추가
      -fix : 버그 수정
      -docs : 문서 수정
      -style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
      -refactor : 코드 리펙토링
      -test : 테스트 코드, 리펙토링 테스트 코드 추가
      -ex. ```
        지라이슈번호 #comment [FE/BE/EM]-[feature]
        [담당자이름]: 상세 커밋내용 기입
        #150 [FE] fix- 메인페이지

        이민규: 메인페이지 api부분 수정하였습니다.
        ```

<br>

  - Additional Commit
      - docs
          - Markdown, Image 등 문서를 생성 혹은 수정한 경우
          - docs:간단한 설명
      - style
          - 중괄호, 세미콜론 위치 등의 간단한 변경 (logic 변경 x)
          - style:수정한 파일
      - test
          - 테스트를 추가, 변경 하는 경우 (production code 변경 x)
          - test:수정한 파일
      - chore
          - 기타 모든 잡무
          - 예를 들어, 설정파일(package.json, application.json 등)을 변경한 경우
          - chore:수정한 파일

<br>

## JIRA 태스크 컨벤션
- 머릿말에 [BE], [FE], [Design], [Extra]를 달아서 분류한다.
