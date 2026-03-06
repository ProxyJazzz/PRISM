import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Brain } from 'lucide-react';
import { loginUser } from '../../lib/api';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("LOGIN BUTTON CLICKED");

  try {
    const data = await loginUser({ email, password });
    console.log("LOGIN RESPONSE:", data);

    localStorage.setItem("token", data.token);
    navigate('/');
  } catch (error: any) {
    console.error('Login error:', error);
    alert(error.message || 'An error occurred during login');
  }
};

  return (
    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 glass-card overflow-hidden shadow-2xl">
      <div className="hidden lg:block relative p-12 bg-prism-accent/10">
        <div className="absolute inset-0 bg-gradient-to-br from-prism-accent/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <Link to="/" className="flex flex-col mb-12">
              <span className="text-3xl font-bold tracking-tighter text-white">PRISM</span>
              <span className="text-xs uppercase tracking-[0.2em] text-prism-accent font-semibold">Intelligence System</span>
            </Link>
            <h2 className="text-3xl font-bold mb-6">Institutional Access Portal</h2>
            <p className="text-white/60 leading-relaxed">
              Secure gateway for authorized research administrators and evaluators.
            </p>
          </div>
          <div className="flex items-center gap-4 text-white/40 text-xs uppercase tracking-widest font-bold">
            <Shield size={16} /> Government-Grade Security
          </div>
        </div>
        {/* Decorative Brain Outline */}
        <Brain className="absolute bottom-0 right-0 text-prism-accent/5 -mb-20 -mr-20" size={400} />
      </div>
      <div className="p-8 lg:p-16 flex flex-col justify-center ">
        <h3 className="text-2xl font-bold mb-8">Sign In</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Official Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
              placeholder="admin@institution.edu"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" 
          // onClick={() => console.log("DIRECT BUTTON CLICK")}
          className="w-full py-4 bg-prism-accent text-white font-bold rounded-lg hover:bg-prism-accent/90 transition-all shadow-[0_0_20px_rgba(30,144,255,0.3)]">
            Sign In
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm">
            Don't have an account? <Link to="/register" className="text-prism-accent font-bold hover:underline">Register Institution</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
