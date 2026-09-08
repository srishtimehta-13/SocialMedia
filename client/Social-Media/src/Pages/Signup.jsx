import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kizuna-logo.png";
import { axiosInstance } from "../axiosCalls/axios";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const res = await axiosInstance.post("/users/register", form);
      setLoader(false);
      console.log("User Registered");
    } catch (error) {
      setLoader(false);
      setErr(error);
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#E0D4C1] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-[#330102] antialiased">
      {/* ================= ANIMATED BACKGROUND ================= */}

      {/* Soft moving gold glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#CCAE70]/20 blur-[100px] animate-[float_12s_ease-in-out_infinite] pointer-events-none" />

      {/* Soft moving burgundy glow */}
      <div className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full bg-[#541B1C]/10 blur-[110px] animate-[floatReverse_15s_ease-in-out_infinite] pointer-events-none" />

      {/* Smaller floating glow */}
      <div className="absolute top-[35%] right-[8%] w-40 h-40 rounded-full bg-[#AC8E6A]/15 blur-[70px] animate-[drift_9s_ease-in-out_infinite] pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-[12%] left-[8%] w-24 h-24 rounded-full border border-[#CCAE70]/30 animate-[spinSlow_25s_linear_infinite] pointer-events-none" />

      <div className="absolute bottom-[12%] right-[7%] w-32 h-32 rounded-full border border-[#541B1C]/10 animate-[spinSlowReverse_30s_linear_infinite] pointer-events-none" />

      {/* Floating dots */}
      <div className="absolute top-[20%] right-[18%] w-2 h-2 rounded-full bg-[#CCAE70]/70 animate-[dotFloat_6s_ease-in-out_infinite] pointer-events-none" />

      <div className="absolute bottom-[25%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#541B1C]/30 animate-[dotFloat_8s_ease-in-out_infinite_reverse] pointer-events-none" />

      <div className="absolute top-[70%] right-[25%] w-1 h-1 rounded-full bg-[#CCAE70] animate-pulse pointer-events-none" />

      {/* Subtle connection line */}
      <div className="absolute top-[25%] left-[5%] w-40 h-px bg-gradient-to-r from-transparent via-[#CCAE70]/30 to-transparent rotate-[25deg] animate-[lineMove_8s_ease-in-out_infinite] pointer-events-none" />

      <div className="absolute bottom-[30%] right-[4%] w-44 h-px bg-gradient-to-r from-transparent via-[#541B1C]/15 to-transparent -rotate-[30deg] animate-[lineMove_10s_ease-in-out_infinite_reverse] pointer-events-none" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* Header */}
        <div className="text-center animate-[fadeDown_0.8s_ease-out]">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              {/* Logo glow */}
              <div className="absolute inset-2 rounded-full bg-[#CCAE70]/20 blur-2xl animate-pulse" />

              <img
                src={logo}
                alt="Kizuna"
                className="relative w-36 sm:w-40 h-auto object-contain drop-shadow-[0_8px_15px_rgba(51,1,2,0.12)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <h1 className="text-3xl font-medium tracking-tight text-[#330102]">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-[#906D5D]">
            Join Kizuna and start connecting with people & ideas.
          </p>

          {/* Gold divider */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="w-10 h-px bg-[#CCAE70]/50" />

            <div className="w-1.5 h-1.5 rotate-45 bg-[#CCAE70]" />

            <div className="w-10 h-px bg-[#CCAE70]/50" />
          </div>
        </div>

        {/* ================= FORM CARD ================= */}

        <div className="mt-8 animate-[fadeUp_0.9s_ease-out]">
          <div
            className="
          relative
          bg-[#F5EEE3]/80
          backdrop-blur-xl
          border border-[#AC8E6A]/30
          rounded-[26px]
          p-6 sm:p-8
          shadow-[0_20px_60px_rgba(51,1,2,0.12)]
          transition-all
          duration-500
          hover:shadow-[0_25px_70px_rgba(51,1,2,0.16)]
        "
          >
            {/* Animated top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] rounded-full bg-[#CCAE70] animate-[goldPulse_4s_ease-in-out_infinite]" />

            <form className="space-y-4">
              {/* Full Name */}
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#906D5D] mb-2"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Alex Morgan"
                  className="
                  w-full
                  rounded-xl
                  bg-[#E0D4C1]/40
                  border border-[#AC8E6A]/30
                  py-3 px-4
                  text-[#330102]
                  placeholder:text-[#906D5D]/50
                  text-sm
                  outline-none
                  transition-all
                  duration-300

                  hover:bg-[#E0D4C1]/60

                  focus:bg-[#F5EEE3]
                  focus:border-[#541B1C]/60
                  focus:ring-4
                  focus:ring-[#541B1C]/10
                "
                  onChange={handleChange}
                />
              </div>

              {/* Username */}
              <div className="group">
                <label
                  htmlFor="username"
                  className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#906D5D] mb-2"
                >
                  Username
                </label>

                <div className="relative">
                  <span
                    className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#AC8E6A]
                  text-sm
                  transition-colors
                  group-focus-within:text-[#541B1C]
                "
                  >
                    @
                  </span>

                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="alexmorgan"
                    className="
                    w-full
                    rounded-xl
                    bg-[#E0D4C1]/40
                    border border-[#AC8E6A]/30
                    py-3 pl-9 pr-4
                    text-[#330102]
                    placeholder:text-[#906D5D]/50
                    text-sm
                    outline-none
                    transition-all
                    duration-300

                    hover:bg-[#E0D4C1]/60

                    focus:bg-[#F5EEE3]
                    focus:border-[#541B1C]/60
                    focus:ring-4
                    focus:ring-[#541B1C]/10
                  "
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#906D5D] mb-2"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@example.com"
                  className="
                  w-full
                  rounded-xl
                  bg-[#E0D4C1]/40
                  border border-[#AC8E6A]/30
                  py-3 px-4
                  text-[#330102]
                  placeholder:text-[#906D5D]/50
                  text-sm
                  outline-none
                  transition-all
                  duration-300

                  hover:bg-[#E0D4C1]/60

                  focus:bg-[#F5EEE3]
                  focus:border-[#541B1C]/60
                  focus:ring-4
                  focus:ring-[#541B1C]/10
                "
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="group">
                <label
                  htmlFor="password"
                  className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-[#906D5D] mb-2"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="
                  w-full
                  rounded-xl
                  bg-[#E0D4C1]/40
                  border border-[#AC8E6A]/30
                  py-3 px-4
                  text-[#330102]
                  placeholder:text-[#906D5D]/50
                  text-sm
                  outline-none
                  transition-all
                  duration-300

                  hover:bg-[#E0D4C1]/60

                  focus:bg-[#F5EEE3]
                  focus:border-[#541B1C]/60
                  focus:ring-4
                  focus:ring-[#541B1C]/10
                "
                  onChange={handleChange}
                />
              </div>

              {/* Error */}
              {err && (
                <div
                  className="
                rounded-xl
                border border-[#541B1C]/20
                bg-[#541B1C]/5
                px-4 py-3
                text-xs
                text-[#541B1C]
                animate-[shake_0.3s_ease-in-out]
              "
                >
                  {err?.response?.data?.message ||
                    "Something went wrong. Please try again."}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loader}
                  className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-xl
                  py-3
                  px-4

                  text-sm
                  font-semibold
                  text-[#E0D4C1]

                  bg-[#541B1C]

                  shadow-[0_8px_25px_rgba(84,27,28,0.18)]

                  transition-all
                  duration-300

                  hover:bg-[#330102]
                  hover:-translate-y-0.5
                  hover:shadow-[0_12px_30px_rgba(84,27,28,0.25)]

                  active:translate-y-0

                  disabled:opacity-70
                  disabled:cursor-not-allowed
                "
                >
                  {/* Button shine */}
                  {!loader && (
                    <span
                      className="
                    absolute
                    inset-y-0
                    -left-full
                    w-1/2
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-[#CCAE70]/25
                    to-transparent
                    transition-all
                    duration-700
                    group-hover:left-[130%]
                  "
                    />
                  )}

                  <span className="relative flex items-center justify-center gap-2">
                    {loader ? (
                      <>
                        <span
                          className="
                        w-4 h-4
                        rounded-full
                        border-2
                        border-[#E0D4C1]/30
                        border-t-[#CCAE70]
                        animate-spin
                      "
                        />
                        Creating account...
                      </>
                    ) : (
                      <>
                        Sign up
                        <span
                          className="
                        text-[#CCAE70]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                        >
                          →
                        </span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>

            {/* Terms Notice */}
            <p className="mt-5 text-center text-[10px] text-[#906D5D] leading-relaxed">
              By continuing, you agree to our{" "}
              <a
                href="#terms"
                className="text-[#541B1C] underline underline-offset-2 decoration-[#CCAE70]/60 hover:decoration-[#541B1C] transition-all"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#privacy"
                className="text-[#541B1C] underline underline-offset-2 decoration-[#CCAE70]/60 hover:decoration-[#541B1C] transition-all"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Link to Login */}
          <p className="mt-6 text-center text-sm text-[#906D5D]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="
              font-semibold
              text-[#541B1C]
              underline
              underline-offset-4
              decoration-[#CCAE70]/50
              hover:decoration-[#541B1C]
              transition-all
            "
            >
              Log in
            </Link>
          </p>

          {/* Tagline */}
          <p
            className="
          mt-7
          text-center
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-[#AC8E6A]
        "
          >
            Connecting People & Ideas
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
