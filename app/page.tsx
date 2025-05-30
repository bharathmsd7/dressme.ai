"use client"
import { Header } from '@/components/ui/header'
import { FilterChip } from '@/components/ui/filter-chips'
import { ProductCard } from '@/components/ui/product-card'
import { LayoutGrid, List, Grid3X3, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from "@/components/ui/switch"
import { PersonalizeDialog } from '@/components/ui/personalize-dialog'
import { useState } from 'react'
import { useCreateStyle } from '@/store/use-create-style' // Add this import

export default function Dashboard() {
  const [personalizeOpen, setPersonalizeOpen] = useState(false)
  const { filename } = useCreateStyle() 

  const getImagePath = (index: number) => {
    console.log("selected iamge", filename)
    if (!filename) return `/dashboard/withoutstyle/anil${index}.png`
    
    if (filename === '1.png') {
        return `/dashboard/withstyle1/amai${index}.png`
    }
    if (filename === '2.png') {
        return `/dashboard/withstyle2/cat${index}.png`
    }

    return `/dashboard/withoutstyle/anil${index}.png`
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Recommended" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">Filters(+)</Button>
            <Button variant="outline">Sort(↓)</Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Personalise it</span>
              <Switch onCheckedChange={(checked) => setPersonalizeOpen(checked)} />
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon"><LayoutGrid className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Grid3X3 className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><List className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon"><Menu className="h-4 w-4" /></Button>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto">
          <FilterChip label="Black pants" active />
          <FilterChip label="white shirts" active />
          <FilterChip label="My Product name" />
          <FilterChip label="My Product name" />
          <FilterChip label="My Product name" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            image={getImagePath(1)}
            title="Product Name"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(2)}
            title="Product Name"
            description="Description of the product"
          />
          {/* Replace all other ProductCard image props with getImagePath() */}
          <ProductCard
            image={getImagePath(3)}
            title="Product list 1"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(4)}
            title="Product list 1"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(5)}
            title="Product Name"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(6)}
            title="Product Name"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(7)}
            title="Product list 1"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(8)}
            title="Product list 1"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(9)}
            title="Product Name"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(10)}
            title="Product Name"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(11)}
            title="Product list 1"
            description="Description of the product"
          />
          <ProductCard
            image={getImagePath(12)}
            title="Product list 1"
            description="Description of the product"
          />
        </div>
      </main>

      <PersonalizeDialog 
        open={personalizeOpen} 
        onOpenChange={setPersonalizeOpen}
      />
    </div>
  )
}
