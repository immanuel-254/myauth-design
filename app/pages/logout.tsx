import LogoutForm from "../components/logout";
import { ModeToggle } from "../components/moddle-toggler";

export default function LogoutPage() {
  return (
    <div>
      <div className="absolute right-4 top-2 text-lg me-10"><ModeToggle/></div>
      <LogoutForm/>
    </div>
  )
}
