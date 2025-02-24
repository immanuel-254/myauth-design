import ChangePasswordForm from "./components/change-password";
import LoginForm from "./components/login";
import LogoutForm from "./components/logout";
import { ModeToggle } from "./components/moddle-toggler";
import NavBar from "./components/navbar";
import ResetPasswordForm from "./components/reset-password";

export default function Home() {
  return (
    <div>
      <div className="absolute right-4 top-2 text-lg me-10"><ModeToggle/></div>
      <LoginForm/>
      <hr />
      <ChangePasswordForm/>
      <hr />
      <ResetPasswordForm/>
      <hr />
      <LogoutForm/>
    </div>
  );
}
