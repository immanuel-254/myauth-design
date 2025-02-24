import ChangePasswordForm from "../components/change-password";
import NavBar from "../components/navbar";

export default function ChangePasswordPage() {
  return (
    <div>
      <NavBar/>
      <div className="flex flex-col items-center justify-center h-screen">
        <ChangePasswordForm/>
        </div>
    </div>
  )
}
