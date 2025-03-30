"use client"

import { Header } from '@/components/ui/header'
import { Button } from '@/components/ui/button'
import { UploadCloud } from 'lucide-react'
import Link from 'next/link'

export default function UploadImagePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Link href="/">Main</Link>
          <span>›</span>
          <span>Upload Image</span>
        </div>

        <div className="max-w-xl mx-auto space-y-6">
          <h1 className="text-2xl font-semibold text-center">Upload Your Image</h1>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <UploadCloud className="h-10 w-10 text-gray-400" />
              <p className="text-sm text-gray-600">Drop your image here</p>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              <Button variant="outline" className="mt-2">
                Choose File
              </Button>
            </div>
          </div>

          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Continue
          </Button>
        </div>
      </main>
    </div>
  )
}