"use client"

import { Header } from '@/components/ui/header'
import { Button } from '@/components/ui/button'

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex gap-8">
          {/* Left Section */}
          <div className="w-1/3 space-y-6">
            <h1 className="text-2xl font-semibold">Our Style Guide</h1>
            
            <div className="space-y-4">
              <div className="w-64 h-64 bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="/uploaded-image.jpg" 
                  alt="Uploaded Image"
                  className="w-full h-full object-cover"
                />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Generate
              </Button>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Style Description</h3>
              <textarea 
                className="w-full h-32 p-3 border rounded-lg resize-none"
                placeholder="Describe the style..."
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Style</h3>
              <div className="flex gap-2">
                {['Casual', 'Formal', 'Semi'].map((style) => (
                  <Button
                    key={style}
                    variant="outline"
                    className="flex-1"
                  >
                    {style}
                  </Button>
                ))}
              </div>
            </div>

            <Button className="w-full">
              Style me
            </Button>
          </div>

          {/* Right Section - Avatar Preview */}
          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="w-96 h-[600px] relative">
              <img 
                src="/avatar-preview.png" 
                alt="Avatar Preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}