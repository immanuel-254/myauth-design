import { ModeToggle } from "../components/moddle-toggler";
import ResetPasswordForm from "../components/reset-password";

export default function ResetPasswordPage() {
  return (
    <div>
      <div className="absolute right-4 top-2 text-lg me-10"><ModeToggle/></div>
      <ResetPasswordForm/>
    </div>
  )
}
