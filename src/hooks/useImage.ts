import { useEffect, useState } from "react";

const useImage = (imageSrc: string) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setIsLoading(false);
    };
  }, [imageSrc]);

  return { isLoading };
};

export default useImage;
