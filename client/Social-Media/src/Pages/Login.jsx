import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/kizuna-logo.png";
import { axiosInstance } from "../axiosCalls/axios";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState(null);
  const {setUser} = useAuth()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axiosInstance.post("/users/login", form);
      console.log(res.data.userData)
      setUser(res.data.userData)
      console.log(res)
      setLoader(false);
      console.log("User Logged in");
      navigate('/home');


    } catch (error) {
      setLoader(false);
      // setErr(error);
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#E0D4C1] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-[#330102] antialiased relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#541B1C]/10 blur-3xl animate-[float_12s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-40 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#CCAE70]/15 blur-3xl animate-[floatReverse_15s_ease-in-out_infinite]"></div>

      <div className="absolute top-20 right-[12%] w-3 h-3 rounded-full bg-[#CCAE70]/60 animate-[dotFloat_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-28 left-[12%] w-2 h-2 rounded-full bg-[#541B1C]/40 animate-[dotFloat_8s_ease-in-out_infinite]"></div>

      {/* Header */}
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-sm text-center animate-[fadeDown_0.8s_ease-out]">
        <div className="flex justify-center mb-5">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#CCAE70]/30 blur-xl animate-[goldPulse_4s_ease-in-out_infinite]"></div>
            <img
              src={logo}
              alt="Kizuna"
              className="relative w-20 h-20 object-contain drop-shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-[#CCAE70]/70"></div>
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#906D5D]">
            Kizuna
          </span>
          <div className="h-px w-10 bg-[#CCAE70]/70"></div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#330102]">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-[#906D5D]">
          Log in to continue your journey with Kizuna.
        </p>
      </div>

      {/* Form Card */}
      <div className="relative z-10 mt-8 sm:mx-auto sm:w-full sm:max-w-sm animate-[fadeUp_0.9s_ease-out]">
        <div className="bg-[#F3EBDD]/90 backdrop-blur-md border border-[#CCAE70]/35 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(51,1,2,0.10)]">
          {/* Top Accent */}
          <div className="flex justify-center mb-6">
            <div className="h-1 w-14 rounded-full bg-[#CCAE70]"></div>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium tracking-wide text-[#541B1C] mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="alex@example.com"
                onChange={handleChange}
                className="w-full rounded-xl bg-[#E0D4C1]/50 border border-[#906D5D]/25 py-3 px-4 text-sm text-[#330102] placeholder:text-[#906D5D]/60 focus:bg-[#F3EBDD] focus:border-[#541B1C] focus:ring-2 focus:ring-[#541B1C]/10 transition-all outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium tracking-wide text-[#541B1C]"
                >
                  Password
                </label>

                <a
                  href="#forgot"
                  className="text-xs text-[#906D5D] hover:text-[#541B1C] transition-colors"
                >
                  Forgot?
                </a>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full rounded-xl bg-[#E0D4C1]/50 border border-[#906D5D]/25 py-3 px-4 text-sm text-[#330102] placeholder:text-[#906D5D]/60 focus:bg-[#F3EBDD] focus:border-[#541B1C] focus:ring-2 focus:ring-[#541B1C]/10 transition-all outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-3 px-4 rounded-xl text-sm font-medium tracking-wide text-[#E0D4C1] bg-[#541B1C] hover:bg-[#330102] active:scale-[0.98] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
              >
                Log in
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-[#906D5D]/20"></div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#906D5D]">
              Kizuna
            </span>
            <div className="flex-1 h-px bg-[#906D5D]/20"></div>
          </div>

          {/* Terms Notice */}
          <p className="text-center text-[11px] text-[#906D5D] leading-relaxed">
            By continuing, you agree to our{" "}
            <a
              href="#terms"
              className="text-[#541B1C] underline underline-offset-2 hover:text-[#330102] transition-colors"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              href="#privacy"
              className="text-[#541B1C] underline underline-offset-2 hover:text-[#330102] transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Link to Sign Up */}
        <p className="mt-6 text-center text-sm text-[#906D5D]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-[#541B1C] underline underline-offset-4 decoration-[#CCAE70] hover:text-[#330102] hover:decoration-[#541B1C] transition-all"
          >
            Sign up
          </Link>
        </p>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
        <div className="w-8 h-px bg-[#CCAE70]"></div>
        <div className="w-1.5 h-1.5 rotate-45 border border-[#CCAE70]"></div>
        <div className="w-8 h-px bg-[#CCAE70]"></div>
      </div>
    </div>
  );
}

export default Login;
