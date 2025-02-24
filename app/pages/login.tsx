import LoginForm from "../components/login";
import { ModeToggle } from "../components/moddle-toggler";

export default function LoginPage() {
  return (
    <div>
      <div className="absolute right-4 top-2 text-lg me-10"><ModeToggle/></div>
      <LoginForm/>
    </div>
  )
}
