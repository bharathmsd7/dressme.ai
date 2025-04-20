import { create } from 'zustand'

interface CreateStyleState {
  isOpen: boolean
  selectedImage: string | null
  filename: string // Add this
  measurements: {
    height: string
    chest: string
    neck: string
    waist: string
    shoulder: string
    hip: string
  }
  openCreateStyle: () => void  
  setIsOpen: (open: boolean) => void
  setSelectedImage: (image: string) => void
  setFilename: (name: string) => void // Add this
  setMeasurements: (measurements: CreateStyleState['measurements']) => void
  getPredefinedMeasurements: (filename: string) => CreateStyleState['measurements']
  reset: () => void
}

export const useCreateStyle = create<CreateStyleState>((set, get) => ({
  isOpen: false,
  selectedImage: null,
  filename: '', // Add this
  measurements: {
    height: '',
    chest: '',
    neck: '',
    waist: '',
    shoulder: '',
    hip: '',
  },
  openCreateStyle: () => set({ isOpen: true }), 
  setIsOpen: (open) => set({ isOpen: open }),
  setSelectedImage: (image) => set({ selectedImage: image }),
  setFilename: (name) => set({ filename: name }), // Add this
  setMeasurements: (measurements) => set({ measurements }),
  getPredefinedMeasurements: (filename: string) => {
    console.log("FILE NAME IN STATE" , filename)
    switch(filename) {
      case '1.png':
        return {
          height: '123cm',
          chest: '123cm',
          neck: '123cm',
          waist: '123cm',
          shoulder: '123cm',
          hip: '123cm'
        }
      case '2.png':
        return {
          height: '321cm',
          chest: '321cm',
          neck: '321cm',
          waist: '321cm',
          shoulder: '321cm',
          hip: '321cm'
        }
      default:
        return get().measurements
    }
  },
  reset: () => set({
    selectedImage: null,
    filename: '', // Add this
    measurements: {
      height: '',
      chest: '',
      neck: '',
      waist: '',
      shoulder: '',
      hip: '',
    }
  })
}))