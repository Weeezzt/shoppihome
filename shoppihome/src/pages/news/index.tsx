import { useState, useEffect } from "react";
import Header from "@/components/Header";
import WideNewsCard from "@/components/news/wideNewsCard";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
}

export default function page() {
  const [news, setNews] = useState<News[]>([]);
  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch("./data/newsData.json");
      const data = await response.json();
      console.log(data);
      setNews(data);
    };
    fetchNews();
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 bg-gray-100">
        <div className="flex flex-col gap-8 w-1/2 mx-auto">
          {news.map((newsItem) => (
            <WideNewsCard key={newsItem.id} news={newsItem} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
