
import { useEffect, useRef } from "react";

export default function useUpdate(fn: () => void, deps: any[]) {
  let {current} = useRef(0);
  useEffect(() => {
    current += 1;
    if(current >= 1){
        fn();
    }
  }, deps);
}
