# 7/4 과제

## 제목 : React와 History API 사용하여 SPA Router 기능 구현하기

### 후기
- router는 새로고침을 하지 않기위해 pushState로 주소를 변경 시키고 popstate 이벤트가 변경된 주소를 알아차려 useState변수를 변경하면 변경된 변수에 맞게 화면이 갱신되는 것이다. popstate는 push된 state가 없어지는 즉 뒤로가기 앞으로가기의 경우에만 적용되니 입력될 때 dispatchEvent를 사용하여 강제로 popstate를 사용하여 화면을 갱신한다.
- 이전에는 router를 사용해보고 얼추 이렇게 작동하겠다! 라고 생각하고 넘어갔었는데 이번을 계기로 간단하게라도 직접 구현을 하게 되어 나의 공부방식이 크게 잘못 되었다는 것을 느낀다.
<br>
<strong>중요 코드<strong>

  ```
       history.pushState({page:1},"title",path)
      const popStateEvent = new PopStateEvent('popstate')
      window.dispatchEvent(popStateEvent) //강제로 이벤트를 발생 시킨다.
  ```
