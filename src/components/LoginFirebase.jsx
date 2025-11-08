import React, { useState } from "react";
import { useAuth } from "../services/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faRocket,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      const result = await login(email, password);
      if (!result.verifired) {
        setEmail(result.user.email);
        setError("Please verify your email address before logging in.");
        alert("Please verify your email address before logging in.");
        return;
      } else {
        navigate("/");
      }
    } catch (error) {
      setError("Failed to log in: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center min-h-screen w-full gap-12 p-12 font-['Inter']">
      {/* Value Props Section */}
      <div className="flex flex-col items-center justify-center gap-12 max-w-[576px] flex-1">
        <img
          className="h-8 object-cover"
          src="https://res.cloudinary.com/subframe/image/upload/v1711417518/shared/fdb8rlpzh1gds6vzsnt0.svg"
          alt="Logo"
        />

        <div className="flex flex-col gap-6 px-12">
          <div className="flex items-start gap-4 p-2">
            <div className="text-[#5469d4] text-2xl">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#5469d4] text-lg font-semibold">
                Spark your imagination
              </h3>
              <p className="text-gray-500 text-sm leading-6">
                Dive into a world where your creative ideas are instantly
                brought to life. Let's paint your thoughts in digital strokes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-2">
            <div className="text-[#5469d4] text-2xl">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#5469d4] text-lg font-semibold">
                Simplify the complex
              </h3>
              <p className="text-gray-500 text-sm leading-6">
                Say goodbye to mundane tasks. Our AI streamlines your workflow,
                freeing you to focus on what truly matters.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-2">
            <div className="text-[#5469d4] text-2xl">
              <FontAwesomeIcon icon={faBolt} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#5469d4] text-lg font-semibold">
                Boost your brainpower
              </h3>
              <p className="text-gray-500 text-sm leading-6">
                Elevate your learning with tailored insights and resources. It's
                like having a personal coach in your pocket.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="flex-1 max-w-[448px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-md p-12 shadow-lg">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
          <h3 className="text-xl font-semibold mb-4">Log in to your account</h3>

          {error && (
            <div className="p-3 rounded-md bg-red-50 text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="p-3 rounded-md border border-gray-300 text-sm w-full transition-colors focus:outline-none focus:border-[#5469d4] focus:ring-1 focus:ring-[#5469d4]"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              className="p-3 rounded-md border border-gray-300 text-sm w-full transition-colors focus:outline-none focus:border-[#5469d4] focus:ring-1 focus:ring-[#5469d4]"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="h-10 px-4 bg-[#5469d4] text-white border-none rounded-md font-medium cursor-pointer transition-colors hover:bg-[#4a5cd0] disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="flex justify-between w-full text-sm mt-2">
            <Link
              to="/forgot-password"
              className="text-[#5469d4] font-medium no-underline hover:underline"
            >
              Forgot your password?
            </Link>
            <Link
              to="/register"
              className="text-[#5469d4] font-medium no-underline hover:underline"
            >
              Create an Account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
