import { login } from "@/lib/actions/auth"

const SignInWithGoogle = () => {
  const handleSignIn = () => {
    login("google");
  }

  return (
    <div>
      <button className="p-4 bg-black text-white rounded-md font-sans hover:bg-gray-700" onClick={handleSignIn}>
        Sign in with Google
      </button>

    </div>
  )
}

export default SignInWithGoogle
