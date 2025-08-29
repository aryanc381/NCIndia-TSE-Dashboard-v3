import { Email } from '@/components/email';
import { ModeToggle } from '@/components/theme-toggle';

function Dash() {
  return (
    <div className='flex gap-[2vw]'>
        <ModeToggle />
        <Email />
    </div>
  )
}

export default Dash;