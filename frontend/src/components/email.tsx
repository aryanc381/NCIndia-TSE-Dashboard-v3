import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Email() {
  return (
    <div className="flex w-[25vw] max-w-sm items-center gap-1">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        Search
      </Button>
    </div>
  )
}
