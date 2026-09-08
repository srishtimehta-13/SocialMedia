import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-[#3d1a1e] antialiased">
      
      {/* Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6b1d27] text-[#f7f4ee] mb-6 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="text-2xl font-light tracking-tight text-[#3d1a1e]">Log in to your account</h1>
        <p className="mt-1.5 text-sm text-[#806b6e]">Welcome back. Enter your details to continue.</p>
      </div>

      {/* Form Card */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="bg-[#fcfaf7] border border-[#e5dcd0] rounded-2xl p-6 sm:p-8 shadow-sm">
          <form className="space-y-4">
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-[#6e585a] mb-1.5">
                Email address
              </label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="alex@example.com"
                className="w-full rounded-lg bg-[#f4efe6]/60 border border-[#e0d5c5] py-2.5 px-3.5 text-[#3d1a1e] placeholder:text-[#aa999b] focus:bg-[#fcfaf7] focus:border-[#6b1d27] focus:ring-1 focus:ring-[#6b1d27] text-sm transition-all outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-xs font-medium text-[#6e585a]">
                  Password
                </label>
                <a href="#forgot" className="text-xs text-[#6b1d27] hover:underline">
                  Forgot?
                </a>
              </div>
              <input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="••••••••"
                className="w-full rounded-lg bg-[#f4efe6]/60 border border-[#e0d5c5] py-2.5 px-3.5 text-[#3d1a1e] placeholder:text-[#aa999b] focus:bg-[#fcfaf7] focus:border-[#6b1d27] focus:ring-1 focus:ring-[#6b1d27] text-sm transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="button" 
                className="w-full py-2.5 px-4 rounded-lg text-sm font-medium text-[#f7f4ee] bg-[#6b1d27] hover:bg-[#52151d] active:scale-[0.99] transition-all cursor-pointer shadow-sm"
              >
                Log in
              </button>
            </div>
          </form>

          {/* Terms Notice */}
          <p className="mt-5 text-center text-xs text-[#9c898b] leading-relaxed">
            By continuing, you agree to our{' '}
            <a href="#terms" className="text-[#6e585a] underline underline-offset-2 hover:text-[#3d1a1e]">Terms</a> and{' '}
            <a href="#privacy" className="text-[#6e585a] underline underline-offset-2 hover:text-[#3d1a1e]">Privacy Policy</a>.
          </p>
        </div>

        {/* Link to Sign Up */}
        <p className="mt-6 text-center text-sm text-[#806b6e]">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-[#6b1d27] underline underline-offset-4 decoration-[#d8c3c6] hover:decoration-[#6b1d27] transition-all">
            Sign up
          </Link>
        </p>
      </div>

    </div>
  )
}

export default Login