import { useState } from 'react'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UploadCloud, CheckCircle } from 'lucide-react'

interface PersonalizeDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PersonalizeDialog({ open, onOpenChange }: PersonalizeDialogProps) {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [measurements, setMeasurements] = useState({
    height: '',
    chest: '',
    neck: '',
    waist: '',
    shoulder: '',
    hips: '',
  })
  const [selectedGender, setSelectedGender] = useState<string>('')
  const [selectedBodyType, setSelectedBodyType] = useState<string>('')
  const [selectedAgeGroup, setSelectedAgeGroup] = useState<string>('')
  const [selectedFitType, setSelectedFitType] = useState<string>('')
  const [imageUrl, setImageUrl] = useState("")

  const handleImageUpload = (file: File) => {
    // Handle file upload logic here
    console.log('File uploaded:', file)
  }

  const getButtonClass = (isSelected: boolean) => {
    return `flex-1 ${isSelected 
      ? 'bg-purple-100 border-purple-600 text-purple-900 hover:bg-purple-200' 
      : 'bg-white hover:bg-purple-50'}`
  }

  const handleMeasurementChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeasurements(prev => ({ ...prev, [field]: e.target.value }))
  }

  const getStepContent = () => {
    switch (step) {
      case 1:
        return "Lets set this up!"
      case 2:
        return "Measurements"
      case 3:
        return "Avatar creation"
    }
  }

  const getStepDescription = () => {
    switch (step) {
      case 1:
        return "Hey there! We need some of your details to give personalized shopping experience"
      case 2:
        return "Well! We are getting this to personalize your shopping experience"
      case 3:
        return "Alright! lets create a personalized avatar for you to try on your clothes"
    }
  }

  const handleCreate = async () => {
    setIsLoading(true)
    // Simulate loading for 4 seconds
    await new Promise(resolve => setTimeout(resolve, 4000))
    setIsLoading(false)
    setIsComplete(true)
  }

  if (isLoading) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px] p-0 gap-0">
          <div className="flex items-center justify-center min-h-[400px] w-full">
            <div className="text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 bg-purple-600 rounded-full transform rotate-45 animate-pulse"></div>
                <div className="absolute top-0 right-0 w-6 h-6 bg-purple-400 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Creating avatar.</h2>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  if (isComplete) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px] p-0 gap-0">
          <div className="flex items-center justify-center min-h-[400px] w-full">
            <div className="text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-purple-600 mx-auto" />
              <h2 className="text-2xl font-semibold text-gray-800">Done</h2>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => onOpenChange(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 gap-0">
        <div className="flex">
          {/* Left Section */}
          <div className="bg-white p-8 flex flex-col items-center justify-center text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {getStepContent()}
            </h2>
            <p className="text-sm text-gray-600">
              {getStepDescription()}
            </p>
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-purple-600 rounded-full transform rotate-45"></div>
              <div className="absolute top-0 right-0 w-6 h-6 bg-purple-400 rounded-full"></div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 p-8 bg-gradient-to-br from-purple-50 to-purple-100">
            {step === 1 ? (
              // First step content
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Which of these best describes you</h3>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Gender</label>
                    <div className="flex gap-3">
                      {["Male", "Female", "Others"].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className={getButtonClass(selectedGender === option)}
                          onClick={() => setSelectedGender(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">Body type</label>
                    <div className="flex flex-wrap gap-3">
                      {["Medium", "Muscular", "Athletic", "Small", "big", "Tall"].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className={`${getButtonClass(selectedBodyType === option)} min-w-[120px]`}
                          onClick={() => setSelectedBodyType(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">Age Group</label>
                    <div className="flex flex-wrap gap-3">
                      {["Below 5", "5-20", "20-35", "35-45", "45-55", "above 55"].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className={`${getButtonClass(selectedAgeGroup === option)} min-w-[120px]`}
                          onClick={() => setSelectedAgeGroup(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">Fit type</label>
                    <div className="flex gap-3">
                      {["loose fit", "Tight fit", "Right to size"].map((option) => (
                        <Button
                          key={option}
                          variant="outline"
                          className={getButtonClass(selectedFitType === option)}
                          onClick={() => setSelectedFitType(option)}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : step === 2 ? (
              // Second step content - Measurements
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Body Measurements</h3>
                <p className="text-sm text-gray-600">Please provide your body measurements</p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Height*</label>
                    <Input 
                      placeholder="163 cm"
                      value={measurements.height}
                      onChange={handleMeasurementChange('height')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Chest*</label>
                    <Input 
                      placeholder="45 cm"
                      value={measurements.chest}
                      onChange={handleMeasurementChange('chest')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Neck*</label>
                    <Input 
                      placeholder="24 cm"
                      value={measurements.neck}
                      onChange={handleMeasurementChange('neck')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Waist*</label>
                    <Input 
                      placeholder="82 cm"
                      value={measurements.waist}
                      onChange={handleMeasurementChange('waist')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Shoulder*</label>
                    <Input 
                      placeholder="36 cm"
                      value={measurements.shoulder}
                      onChange={handleMeasurementChange('shoulder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Hips*</label>
                    <Input 
                      placeholder="92 cm"
                      value={measurements.hips}
                      onChange={handleMeasurementChange('hips')}
                    />
                  </div>
                </div>
              </div>
            ) : (
              // Third step content - Image Upload
              <div className="space-y-6">
                <h3 className="text-lg font-medium">Upload Your Image</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                  <div className="flex flex-col items-center gap-2">
                    <UploadCloud className="h-10 w-10 text-gray-400" />
                    <p className="text-sm text-gray-600">Select & drop file to upload here</p>
                    <p className="text-xs text-gray-500">PNG, GIF or JPG up to 10MB</p>
                    <Input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) handleImageUpload(file)
                      }}
                      accept="image/*"
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                        if (fileInput) fileInput.click();
                      }}
                      className="mt-2"
                    >
                      UPLOAD FILE
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Image URL</label>
                  <Input
                    placeholder="Enter image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={() => {
                  if (step > 1) setStep(step - 1)
                  else onOpenChange(false)
                }}
                className="bg-white"
              >
                {step > 1 ? 'Back' : 'Cancel'}
              </Button>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => {
                  if (step < 3) {
                    setStep(step + 1)
                  } else {
                    handleCreate()
                  }
                }}
              >
                {step === 3 ? 'Create' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}