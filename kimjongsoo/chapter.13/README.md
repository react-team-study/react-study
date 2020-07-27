### Chapter.13 리액트 라우터로 SPA 개발하기



### SPA (Single Page Application)



1. SPA?

> 단일 페이지 애플리케이션
>
> SPA는 기본적으로 단일 페이지로 구성되며 기존의 서버 사이드 렌더링과 비교할 때, 배포가 간단하며 네이티브 앱과 유사한 사용자 경험을 제공할 수 있다는 장점이 있다.
>
> link tag를 사용하는 전통적인 웹 방식은 새로운 페이지 요청 시마다 정적 리소스가 다운로드되고 전체 페이지를 다시 렌더링하는 방식을 사용하므로 새로고침이 발생되어 사용성이 좋지 않다. 그리고 변경이 필요없는 부분를 포함하여 전체 페이지를 갱신하므로 비효율적이다.
>
> SPA는 기본적으로 웹 애플리케이션에 필요한 모든 정적 리소스를 최초에 한번 다운로드한다. 이후 새로운 페이지 요청 시, 페이지 갱신에 필요한 데이터만을 전달받아 페이지를 갱신하므로 전체적인 트래픽을 감소할 수 있고, 전체 페이지를 다시 렌더링하지 않고 변경되는 부분만을 갱신하므로 새로고침이 발생하지 않아 네이티브 앱과 유사한 사용자 경험을 제공할 수 있다.
>
> SPA의 경우 서버에서 사용자에게 제공하는 페이지는 한 종류이지만, 해당 페이지에서 로딩된 자바스크립트와 현재 사용자 브라우저의 주소상태에 따라 다양한 화면을 보여줄 수 있다.
>  <b>(다른 주소에 다른 화면을 보여주는 것을 라우팅이라고 하며 리액트의 경우 브라우저 API 직접 사용 혹은 라이브러리를 사용하여 이 작업을 할 수 있다.)</b>



2. SPA 단점

> 1. SPA는 웹 애플리케이션에 필요한 모든 정적 리소스를 최초에 한번 다운로드하기 때문에 초기 구동 속도가 상대적으로 느리다
>    - **코드스플리팅** 을 통해 라우트 별로 파일을 나누어 트래픽과 로딩속도 개선 가능
> 2. SEO(검색엔진 최적화) 문제
>    - **서버사이드렌더링**을 통해 해결 가능



### React Router

1. 리액트 라우팅 라이브러리 

- react-router
- reach-router
- Next.js



2. React-router 

- 설치

```
yarn add reac-router-dom
```



- Router, Route, Link, Switch 등 라우팅에서 사용되는 컴포넌트를 제공한다.



- 프로젝트에 라우터 적용 (Router)

  - root 컴포넌트에 BrowserRouter 라는 컴포넌트를 사용하여 감싸면 된다.

    ```react
    /* index.js */
    
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {BrowserRoute} from 'react-router-dom';
    import './index.css';
    import App from './App';
    import * as serviceWorker from './serviceWorker';
    
    ReactDOM.render(
    	<BrowserRouter>
      	<App/>
      </BrowserRouter>
      document.getElementById('root');
    )
    
    serviceWorker.unregister();
    ```

- Route 컴포넌트로 특정 주소에 컴포넌트 연결이 가능하다.

```react
/*
path : 주소 규칙
component: 보여줄 컴포넌트
주소가 경로가 일부 겹칠 경우를 피하기 위해서 exact라는 props를 true로 설정
(ex: / , /about)

path props를 배열로 설정시 여러 경로에서 같은 컴포넌트를 보여줄 수 있다.
*/
<Route path="" component={} exact></Route>

/*
	component 대신 render 라는 props를 이용하여 jsx로 전달 가능.
*/
<Route path="" render={()=><div></div>}
```



- Link 컴포넌트를 통해 컴포넌트 클릭 시 다른 주소로 이동이 가능하다.

  - 일반적인 웹에서 a 태그를 통해 페이지 전환과 달리 페이지를 새로 부르지 않고 애플리케이션은 그대로 유지한 상태에서 HTML5 History API 를 사용해 페이지의 주소만 변경 시켜준다. 
  - Link 컴포넌트 자체는 a 태그로 이루어져 있지만 , 페이지 전환을 방지하는 기능이 내장되어 있다.

  ```react
  /*
  to: 주소
  */
  <Link to=""></Link>
  ```



- URL 파라미터 , 쿼리

  - 페이지 주소 정의 시 유동적인 값을 전달해야할 때 사용하는 것으로 파라미터와 쿼리로 분류 가능
  - 파라미터 예시 : /about/name
  - 쿼리 예시: /about?flag=true
  - 일반적으로 파라미터는 특정 값으로 데이터를 조회할때 많이 사용되며, 쿼리는 어떤 키워드 검색 및 페이지에 필요한 옵션을 전달할때 대체로 많이 사용된다.
    

  1. Route 컴포넌트에서 URL 파라미터 사용 시

  - Route 에서 사용되는 컴포넌트에서 받아오는 match라는 객체 안의 params 값을 참조.

  2. Route 컴포넌트에서 URL 쿼리 사용 시

  - Route 에서 사용되는 컴포넌트에서 받아오는 location 객체를 참조하면 search 값에서 조회 가능하다.
  - search 값은 문자열이므로 특정 값을 가져오기 위해서는 객체형태로 변환 해주어야 한다. (qs라이브러리 사용시 편리함)
    

- 서브라우트

  - 서브 라우트는 라우트 내부에 라우트를 정의 하는 것을 의미.



- 부가기능

1. history

   - 라우트로 사용된 컴포넌트에서 match, location 과 함께 전달되는 props 중 하나로 컴포넌트 내에 구현하는 메서드에서 라우터 API 호출할 수 있도록 해준다.
   - 일반적으로 특정 버튼 눌렀을때 뒤로가기 혹은 로그인 후 화면전환, 다른 페이지 이탈 방지 등에 활용한다.

2. withRouter

   - withRouter 함수는 HoC 로 라우트로 사용된 컴포넌트가 아니어도 match, location. history 객체를 참조할 수 있도록 해준다.

   ```react
   /*
   match 객체의 경우 현재 자신을 보여주고 있는 라우트 컴포넌트 기준으로 객체가 전달된다.
   */
   import React from 'react';
   import {withRouter} from 'react-router-dom';
   
   const MyComponent = ({location, match, history}) => {
   	return <div></div>;
   }
   
   export default withRouter(MyComponent);
   ```

3. Switch

   - Switch 컴포넌트는 여러 Route 컴포넌트를 감싸서 그중 일치하는 단 하나의 Route 컴포넌트만 렌더링 시켜준다.
   - 일반적으로 모든 주소 규칙과 일치 하지 않을 때 보여줄 Not Found 페이지를 구현할때 사용하면 좋다.

4. NavLink

   - Link 컴포넌트와 비슷함
   - 현재 경로와 Link에서 사용하는 경로가 일치하는 경우 특정 스타일 혹은 CSS 클래스를 적용할 수 있는 컴포넌트
   - NavLink에서 링크 활성화 시 스타일 적용할 때 activeStyle 값을 사용, CSS 클래스 적용할 때 activeClassName 값을 props 로 넣어주면 된다.



