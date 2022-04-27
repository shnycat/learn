import "./loginpage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return {
    link: "/login",
    element: (
      <div className="main-container">
        <div className="login-form">
          <div className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-20 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <h3>Login to your account</h3>
          <form action="">
            <div className="mt-4">
              <div>
                <label className="block" for="email">
                  Email
                </label>
                <input type="text" placeholder="Email" />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="flex items-baseline justify-between">
                <button>Login</button>
                <Link to="#" className="link">
                  Forgot password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    ),
  };
}
