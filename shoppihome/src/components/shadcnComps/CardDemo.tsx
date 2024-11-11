import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CardDemoProps {
  src: string;
  alt: string;
  title: string;
}

export default function CardDemo({ src, alt, title }: CardDemoProps) {
  return (
    <Card className="w-11/12 md:w-9/12 lg:w-full mx-auto hover:cursor-pointer rounded-sm hover:shadow-md">
      <CardHeader className="p-4">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full h-full p-2">
        <img src={src} alt={alt} className="w-full rounded-sm" />
      </CardContent>
    </Card>
  );
}
