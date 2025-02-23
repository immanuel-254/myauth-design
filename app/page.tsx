import ChangePasswordForm from "./components/change-password";
import LoginForm from "./components/login";
import NavBar from "./components/navbar";
import ResetPasswordForm from "./components/reset-password";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <LoginForm/>
      <hr />
      <ChangePasswordForm/>
      <hr />
      <ResetPasswordForm/>
    </div>
  );
}
