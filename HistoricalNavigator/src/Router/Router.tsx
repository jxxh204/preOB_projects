import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext("");

type RouteType = {path:string, component:React.ReactNode}


export function Router({children}:{children:React.ReactNode}) {
    const [location, setLocation] = useState(window.location.pathname);


    useEffect(() => {
      const popstateListener = () => {
        setLocation(window.location.pathname);
      };

      window.addEventListener('popstate', popstateListener);
      return ()=>{
        window.removeEventListener('popstate', popstateListener);
      }
    },[])
    return ( <RouterContext.Provider value={location} >
        {children}
    </RouterContext.Provider> );
}

export function Route(props:RouteType) {
  const {path, component} = props; // 입력된 path
  const location = useContext(RouterContext); // local path
    if (location !== path.toLowerCase()) { // path 확인.
      return null;
    }
    
    return component;
}

export function useRouter() {

    const push = (path:string) => {
      history.pushState({page:1},"title",path)
      const popStateEvent = new PopStateEvent('popstate')
      window.dispatchEvent(popStateEvent) //강제로 이벤트를 발생 시킨다.
      // 이벤트 발생으로 화면을 갱신하여 새로고침이 일어나지 않는다.
    }

    return {push}
}