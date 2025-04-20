"use client"
import { useState } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'
import { useCreateStyle } from '@/store/use-create-style'
import { ImageUpload } from './image-upload'
import { X, Search, Ruler, Wand2  } from 'lucide-react' 

export function CreateStyleDialog() {
  const { isOpen, setIsOpen, setSelectedImage, selectedImage, setFilename, filename } = useCreateStyle()
  const [isLoading, setIsLoading] = useState(false)
  const [showMeasurements, setShowMeasurements] = useState(false)
  const [measurements, setMeasurements] = useState({
    height: '',
    chest: '',
    neck: '',
    waist: '',
    shoulder: '',
    hip: '',
  })

  const [loadingMessage, setLoadingMessage] = useState({ 
    text: 'Analysing your image',
    icon: Search 
  })

  const loadingStates = [
    { text: 'Analysing your image', icon: Search },
    { text: 'Measuring sizes', icon: Ruler },
    { text: 'Fit check', icon: Wand2 }
  ]

  const handleImageUpload = (file: File) => {
    setFilename(file.name) // Save filename when image is uploaded
    setSelectedImage(URL.createObjectURL(file))
  }

  const handleContinue = async () => {
    setIsLoading(true)
    for (const state of loadingStates) {
      setLoadingMessage(state)
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    if (filename !== '1.png' && filename !== '2.png') {
      setMeasurements({
        height: '',
        chest: '',
        neck: '',
        waist: '',
        shoulder: '',
        hip: '',
      })
      setIsLoading(false)
      setShowMeasurements(true)
      return
    }
    
    const predefinedMeasurements = useCreateStyle.getState().getPredefinedMeasurements(filename)
    setMeasurements(predefinedMeasurements)
    
    setIsLoading(false)
    setShowMeasurements(true)
  }

  const [isApplying, setIsApplying] = useState(false)
  const [applyMessage, setApplyMessage] = useState('')

  const applyLoadingStates = [
    "Stitching your clothes",
    "Tailoring for you",
    "Ironing neat"
  ]

  const handleApply = async () => {
    setIsApplying(true)
    
    for (const message of applyLoadingStates) {
      setApplyMessage(message)
      await new Promise(resolve => setTimeout(resolve, 1666)) // 5 seconds total for 3 messages
    }
    
    useCreateStyle.getState().setMeasurements(measurements)
    setIsOpen(false)
    setShowMeasurements(false)
    setIsApplying(false)
  }

  const handleRemoveImage = () => {
    setSelectedImage('')
    setFilename('') // Reset filename when image is removed
    setShowMeasurements(false)

  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) setIsOpen(false)
    }}>
      <DialogContent className="sm:max-w-[90%] w-[80%] h-[80%] overflow-y-auto backdrop-blur-2xl">
        {isApplying ? (
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center">
            <div className="flex flex-col items-center gap-8">
              <Loader2 className="h-24 w-24 animate-spin text-purple-600" />
              <p className="text-2xl font-medium text-purple-900">{applyMessage}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 h-full p-16">
            {/* Left Section */}
            <div className="space-y-4 h-full">
              <h3 className="text-lg font-bold">Upload Your Image</h3>
              {selectedImage ? (
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 h-[calc(100%-2rem)]">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10 hover:bg-gray-100/80"
                    onClick={handleRemoveImage}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <img 
                    src={selectedImage} 
                    alt="Uploaded" 
                    className="w-full h-full object-contain" 
                  />
                </div>
              ) : (
                <ImageUpload onImageUpload={handleImageUpload} />
              )}
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center space-y-4 p-8">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full gap-4">
                  <div className="flex items-center gap-2">
                    {loadingMessage.icon && <loadingMessage.icon className="h-5 w-5 animate-spin text-purple-600" />}
                    <p className="text-lg font-medium text-purple-900">{loadingMessage.text}</p>
                  </div>
                  <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
                </div>
              ) : showMeasurements && selectedImage ? (
                <>
                  {filename !== '1.png' && filename !== '2.png' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      Cant analyse this image. Please try with a different image.
                    </div>
                  )}
                  <h3 className="text-lg font-bold">Body Measurements</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(measurements).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <label className="text-sm font-medium capitalize text-gray-500">{key}</label>
                        <p className="text-lg font-semibold text-gray-900">{value}</p>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 mt-4 text-lg px-8 font-bold"
                    onClick={handleApply}
                  >
                    Apply
                  </Button>
                </>
              ) : (
                <Button
                  className="bg-purple-600 hover:bg-purple-700 font-bold text-lg px-8"
                  onClick={handleContinue}
                  disabled={!selectedImage}
                >
                  Analyse
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}