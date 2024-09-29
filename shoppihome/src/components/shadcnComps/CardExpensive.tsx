import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardDemoProps {
  src: string;
  alt: string;
  title: string;
}

export default function CardExpensive({ src, alt, title }: CardDemoProps) {
  return (
    <Card className="rounded-sm hover:cursor-pointer hover:shadow-md hover:border-blue-500 w-52 h-32">
      <CardHeader className="p-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-full p-0">
        <img src={src} alt={alt} className="w-full h-full rounded-b-sm" />
      </CardContent>
    </Card>
  );
}