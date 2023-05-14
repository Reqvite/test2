import { useEffect, useState } from "react";

function useMediaQuery(query: string): any {
  const [matches, setMatches] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(!!mediaQueryList.matches);
    listener();
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
