import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../lib/api';

const RegisterForm = () => {
  const [institution, setInstitution] = useState('');
  const [admin, setAdmin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await registerUser({
        institutionName: institution,
        adminName: admin,
        email,
        password
      });
      navigate('/login');
    } catch (error: any) {
      console.error('Registration error:', error);
      alert(error.message || 'An error occurred during registration');
    }
  };

  return (
    <div className="max-w-2xl w-full glass-card p-8 lg:p-12 shadow-2xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Institutional Registration</h2>
        <p className="text-white/60">Create a secure administrative account for your research body.</p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Institution Name</label>
          <input
            type="text"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
            placeholder="National Research Council"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Admin Full Name</label>
          <input
            type="text"
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
            className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
            placeholder="Dr. Jane Smith"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Official Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
            placeholder="jane.smith@nrc.gov"
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
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-white/5 border border-prism-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-prism-accent transition-colors"
            placeholder="••••••••"
          />
        </div>
        <div className="md:col-span-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" required className="w-5 h-5 rounded border-prism-border bg-white/5 text-prism-accent focus:ring-prism-accent" />
            <span className="text-sm text-white/60 group-hover:text-white/80 transition-colors">I agree to the Institutional Review Policy and Data Ethics Framework.</span>
          </label>
        </div>
        <div className="md:col-span-2 pt-4">
          <button type="submit" className="w-full py-4 bg-prism-accent text-white font-bold rounded-lg hover:bg-prism-accent/90 transition-all shadow-[0_0_20px_rgba(30,144,255,0.3)]">
            Create Institutional Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
