'use client';
import Link from "next/link";
import { useState, FormEvent } from 'react';
import { useRouter } from "next/navigation";


export default function GramthreadLoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: wire up your auth call here
    console.log({ email, password, remember });
    try {
    const response = await fetch("http://108.129.210.146:30081/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Login Success");
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("userName", data.user.name);
      
      router.push("/");
      console.log(data);
    } else {
      console.log("Login Failed");
      console.log(data.message);
    }

  } catch (error) {
    console.log(error);
  }
  };

  return (
    <div className="page">
      <div className="card">

        <div className="visual">
          <svg className="thread" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-20 40 C 100 90, 60 160, 180 190 C 300 220, 260 300, 380 340 C 440 360, 420 420, 460 460"
              stroke="white" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round"
            />
            <path
              d="M-40 460 C 80 420, 40 340, 160 310 C 280 280, 240 190, 360 150 C 420 130, 400 70, 440 30"
              stroke="white" strokeWidth="1.5" strokeDasharray="2 10" strokeLinecap="round" opacity="0.6"
            />
          </svg>

          <div className="brandmark"><span className="dot" />Gramthread</div>

          <div className="visual-copy">
            <p className="eyebrow">Members&apos; atelier</p>
            <h1>Woven with<br />intention.</h1>
            <p>Sign in to track orders, save your measurements, and get early access to new drops before anyone else.</p>
          </div>

          <div className="stitch-row">
            <svg width="46" height="10" viewBox="0 0 46 10">
              <path d="M0 5 L46 5" stroke="white" strokeWidth="1" strokeDasharray="3 4" />
            </svg>
            since day one
          </div>
        </div>

        <div className="form-side">
          <div className="form-head">
            <h2>Welcome back</h2>
            <p>New to Gramthread? <Link href="/auth/signup">Create an account</Link></p>
          </div>
 
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">Email</label>
              <div className={`field-input${emailFocused ? ' focused' : ''}`}>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <div className={`field-input${passwordFocused ? ' focused' : ''}`}>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                />
              </div>
            </div>

            <div className="row-between">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a className="forgot" href="#">Forgot password?</a>
            </div>

            <button className="submit" type="submit">Sign in</button>

            <div className="divider">or continue with</div>

            <div className="social">
              <button type="button">Google</button>
              <button type="button">Apple</button>
            </div>
          </form>
        </div>

      </div>

      <style jsx>{`
        .page {
          font-family: 'Inter', sans-serif;
          background: var(--cream);
          color: var(--ink);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px;
        }
        .card {
          width: 100%;
          max-width: 960px;
          min-height: 620px;
          background: #fff;
          border-radius: 24px;
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          overflow: hidden;
          box-shadow: 0 30px 80px -30px rgba(34, 29, 23, 0.25), 0 2px 6px rgba(34, 29, 23, 0.06);
        }
        .visual {
          position: relative;
          background: var(--grad);
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          color: #fff;
        }
        .visual::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            115deg,
            rgba(255, 255, 255, 0.08) 0px,
            rgba(255, 255, 255, 0.08) 1px,
            transparent 1px,
            transparent 40px
          );
          pointer-events: none;
        }
        .thread {
          position: absolute;
          left: -10%;
          top: -10%;
          width: 130%;
          height: 130%;
          pointer-events: none;
          opacity: 0.55;
        }
        .brandmark {
          font-family: 'Fraunces', serif;
          font-size: 15px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 1;
        }
        .brandmark .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff;
        }
        .visual-copy {
          z-index: 1;
        }
        .visual-copy .eyebrow {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.85;
          margin: 0 0 14px;
        }
        .visual-copy h1 {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-style: italic;
          font-size: clamp(32px, 4vw, 42px);
          line-height: 1.18;
          margin: 0 0 18px;
        }
        .visual-copy p {
          font-size: 14.5px;
          line-height: 1.7;
          max-width: 340px;
          opacity: 0.92;
          margin: 0;
        }
        .stitch-row {
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          letter-spacing: 0.03em;
          opacity: 0.85;
        }
        .stitch-row svg {
          flex-shrink: 0;
        }
        .form-side {
          padding: 56px 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .form-head h2 {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 28px;
          margin: 0 0 8px;
        }
        .form-head p {
          color: var(--ink-soft);
          font-size: 14.5px;
          margin: 0 0 34px;
          line-height: 1.6;
        }
        .form-head p a {
          color: var(--purple);
          text-decoration: none;
          font-weight: 500;
        }
        .form-head p a:hover {
          text-decoration: underline;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field label {
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: var(--ink-soft);
        }
        .field-input {
          position: relative;
          border-bottom: 1.5px solid var(--line);
          transition: border-color 0.25s ease;
        }
        .field-input.focused {
          border-image: var(--grad) 1;
        }
        .field-input input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-family: 'Inter', sans-serif;
          font-size: 15.5px;
          color: var(--ink);
          padding: 10px 2px 12px;
        }
        .field-input input::placeholder {
          color: #b7afa1;
        }
        .row-between {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13.5px;
          color: var(--ink-soft);
          margin-top: -4px;
        }
        .remember {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .remember input {
          accent-color: var(--purple);
          width: 15px;
          height: 15px;
        }
        .forgot {
          color: var(--purple);
          text-decoration: none;
          font-weight: 500;
        }
        .forgot:hover {
          text-decoration: underline;
        }
        .submit {
          margin-top: 6px;
          position: relative;
          border: none;
          cursor: pointer;
          padding: 15px 20px;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #fff;
          background: var(--grad);
          background-size: 180% 180%;
          background-position: 0% 50%;
          transition: background-position 0.5s ease, transform 0.15s ease;
        }
        .submit:hover {
          background-position: 100% 50%;
        }
        .submit:active {
          transform: scale(0.985);
        }
        .divider {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #b7afa1;
          font-size: 12.5px;
          margin: 6px 0 2px;
        }
        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--line);
        }
        .social {
          display: flex;
          gap: 12px;
        }
        .social button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px;
          border-radius: 10px;
          border: 1px solid var(--line);
          background: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink);
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .social button:hover {
          border-color: #c9c0b0;
          background: var(--lavender);
        }
        @media (max-width: 760px) {
          .card {
            grid-template-columns: 1fr;
          }
          .visual {
            display: none;
          }
          .form-side {
            padding: 44px 28px;
          }
        }
      `}</style>

      <style jsx global>{`
        :root {
          --cream: #fbf8f3;
          --panel: #f4efe8;
          --ink: #221d17;
          --ink-soft: #6b6459;
          --line: #e4ddd1;
          --purple: #6c4ab6;
          --pink: #e0559b;
          --orange: #f2994a;
          --lavender: #f4f0fb;
          --grad: linear-gradient(115deg, var(--purple) 0%, var(--pink) 55%, var(--orange) 100%);
        }
      `}</style>
    </div>
  );
}
