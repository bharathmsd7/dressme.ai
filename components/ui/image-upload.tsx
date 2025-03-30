import { UploadCloud } from "lucide-react"
import { Input } from "./input"
import { Button } from "./button"

interface ImageUploadProps {
  onImageUpload: (file: File) => void
  onUrlChange: (url: string) => void
  imageUrl: string
}

export function ImageUpload({ onImageUpload, onUrlChange, imageUrl }: ImageUploadProps) {
  return (
    <div className="space-y-6">
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
              if (file) onImageUpload(file)
            }}
            accept="image/*"
          />
          <Button
            variant="outline"
            onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}
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
          onChange={(e) => onUrlChange(e.target.value)}
        />
      </div>
    </div>
  )
}