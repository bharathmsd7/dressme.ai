import Image from 'next/image'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ProductCardProps {
  image: string
  title: string
  description: string
}

export function ProductCard({ image, title, description }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
      <CardHeader className="space-y-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
    </Card>
  )
}