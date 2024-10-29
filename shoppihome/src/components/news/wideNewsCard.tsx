import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface News {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
}

interface WideNewsCardProps {
  news: News;
}

const WideNewsCard: React.FC<WideNewsCardProps> = ({ news }) => {
  return (
    <Card className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <div className="md:w-1/3">
        <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="md:w-2/3 p-4">
        <CardHeader>
          <CardTitle className="text-xl font-bold mb-2">{news.title}</CardTitle>
          <CardDescription className="text-gray-700 mb-4">{news.description}</CardDescription>
        </CardHeader>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">{news.date}</span>
          <span className="text-gray-600 text-sm">By {news.author}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default WideNewsCard;
