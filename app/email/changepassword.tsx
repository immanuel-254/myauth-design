export default function ChangePasswordVerification() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center">
            <h1 className="text-xl font-bold">Change Your Password</h1>
        </div>
        <div className="mt-6">
            <p className="text-sm">
                You are receiving this email because you have requested to change your Password. 
				Click on the link below to verify that you wish to make this changes:
            </p>
        </div>
        <div className="mt-6 text-center">
            <a href="#">Change Password</a>
        </div>
        <div className="mt-6 text-sm">
            <p>If you did not request to change your password, you can safely ignore this email.</p>
        </div>
        <div className="mt-6 text-center text-xs">
            <p>&copy; 2025 myauth. All rights reserved.</p>
        </div>
    </div>
    )
  }