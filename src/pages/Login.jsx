import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-7">
          {/* Logo */}
          <div className="flex items-center gap-1 mb-6 justify-center">
            <span className="text-[#003580] font-extrabold text-2xl">stay</span>
            <span className="bg-[#febb02] text-[#003580] rounded px-1 text-2xl font-extrabold">
              finder
            </span>
          </div>

          <h1 className="text-xl font-bold text-gray-900 mb-1">Sign in or create an account</h1>
          <p className="text-sm text-gray-600 mb-6">
            Use your email address to continue
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0071c2] focus:ring-1 focus:ring-[#0071c2]"
              />
            </div>

            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm outline-none focus:border-[#0071c2] focus:ring-1 focus:ring-[#0071c2]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0071c2] hover:bg-[#005ea2] text-white rounded py-2.5 text-sm font-semibold transition"
            >
              Continue
            </button>
          </form>

          <div className="relative my-5">
            <hr className="border-gray-200" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400">
              or
            </span>
          </div>

          <p className="text-xs text-center text-gray-600">
            By signing in or creating an account, you agree with our{" "}
            <a href="#" className="text-[#0071c2] hover:underline">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#0071c2] hover:underline">
              Privacy Statement
            </a>
          </p>
        </div>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0071c2] font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
