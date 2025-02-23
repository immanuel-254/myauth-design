import ChangePasswordForm from "./components/change-password";
import LoginForm from "./components/login";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <LoginForm/>
      <hr />
      <ChangePasswordForm/>
    </div>
  );
}
