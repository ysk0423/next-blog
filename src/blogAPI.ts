import { notFound } from "next/navigation";
import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }
  // Loading確認用
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const articles = await res.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("エラーが発生しました。");
  }
  // Loading確認用
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const article = await res.json();
  return article;
};
