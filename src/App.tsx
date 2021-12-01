import React, { useState, useEffect } from "react";
import Slider from "./components/Slider";

import { Image } from "interfaces";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [images, setImages] = useState<Image[]>([]);

  /* 画像データは Pixabay API 経由で取得（無料で高画質な写真を提供してくれるサービス） */
  const fetchImages = async () => {
    const baseUrl = "https://pixabay.com/api/";

    const perPage = 20; /* 1ページあたりの取得件数 */
    const key =
      process.env.REACT_APP_PIXABAY_API_KEY || ""; /* Pixabay APIキー */

    const query = new URLSearchParams({
      per_page: perPage.toString(),
      key: key,
    }); /* クエリパラメータを作成 */

    const res = await (await fetch(`${baseUrl}?${query}`)).json();

    setImages(res.hits);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  /* ローディング中の処理 */
  if (isLoading) return <div>Now Loading...</div>;

  return <Slider images={images} />;
};

export default App;
