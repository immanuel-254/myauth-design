import ChangePasswordForm from "./components/change-password";
import LoginForm from "./components/login";
import LogoutForm from "./components/logout";
import { ModeToggle } from "./components/moddle-toggler";
import NavBar from "./components/navbar";
import ResetPasswordForm from "./components/reset-password";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <ModeToggle/>
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
