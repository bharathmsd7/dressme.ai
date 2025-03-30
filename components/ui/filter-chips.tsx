import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface FilterChipProps {
  label: string
  active?: boolean
  onClose?: () => void
}

export function FilterChip({ label, active, onClose }: FilterChipProps) {
  return (
    <Button
      variant={active ? "secondary" : "outline"}
      className="rounded-full h-8 bg-purple-100 hover:bg-purple-200 text-purple-900"
      size="sm"
    >
      {label}
      {onClose && (
        <X className="ml-2 h-4 w-4" onClick={onClose} />
      )}
    </Button>
  )
}