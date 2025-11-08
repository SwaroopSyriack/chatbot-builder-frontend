import React, { useState } from "react";
import { useAuth } from "../services/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faRocket,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password1 !== formData.password2) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const result = await signup(formData.email, formData.password1);

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      setError("Failed to create an account: " + error.message);
      console.log(error);
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

      {/* Sign Up Form Section */}
      <div className="flex-1 max-w-[448px] flex flex-col items-center justify-center bg-white border border-gray-200 rounded-md p-12 shadow-lg">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
          <h3 className="text-xl font-semibold mb-4">Create your account</h3>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="p-3 rounded-md border border-gray-300 text-sm w-full transition-colors focus:outline-none focus:border-[#5469d4] focus:ring-1 focus:ring-[#5469d4]"
              placeholder="Enter your name"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="p-3 rounded-md border border-gray-300 text-sm w-full transition-colors focus:outline-none focus:border-[#5469d4] focus:ring-1 focus:ring-[#5469d4]"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              className="p-3 rounded-md border border-gray-300 text-sm w-full transition-colors focus:outline-none focus:border-[#5469d4] focus:ring-1 focus:ring-[#5469d4]"
              placeholder="Create a password"
              value={formData.password1}
              onChange={(e) =>
                setFormData({ ...formData, password1: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              className="p-3 rounded-md border border-gray-300 text-sm w-full transition-colors focus:outline-none focus:border-[#5469d4] focus:ring-1 focus:ring-[#5469d4]"
              placeholder="Confirm your password"
              value={formData.password2}
              onChange={(e) =>
                setFormData({ ...formData, password2: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="h-10 px-4 bg-[#5469d4] text-white border-none rounded-md font-medium cursor-pointer transition-colors hover:bg-[#4a5cd0] disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Creating your account..." : "Create account"}
          </button>

          {message && (
            <div className="p-3 rounded-md bg-[#e0f2fe] text-[#0369a1] text-sm">
              {message}
            </div>
          )}

          <div className="flex justify-center gap-1 text-sm">
            <span className="text-gray-600">Have an account?</span>
            <Link
              to="/login"
              className="text-[#5469d4] font-medium no-underline hover:underline"
            >
              Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
