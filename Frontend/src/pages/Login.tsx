import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, ArrowRight } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <PageContainer className="flex items-center justify-center pt-32 pb-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,144,255,0.05)_0%,transparent_70%)] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 bg-prism-accent rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(30,144,255,0.4)] group-hover:scale-110 transition-transform">
              <Shield className="text-white" size={28} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-bold tracking-tighter text-white leading-none">PRISM</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/50 font-medium mt-1">Proposal Intelligence System</span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-white tracking-tight">Institutional Login</h1>
          <p className="text-white/50 mt-2">Access your institutional evaluation dashboard.</p>
        </div>

        <Card className="p-8 lg:p-10 border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl">
          <form className="space-y-6">
            <InputField
              label="Email"
              type="email"
              placeholder="official@institution.edu"
              required
            />
            <InputField
              label="Password"
              type="password"
              placeholder="••••••••"
              required
            />

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-white/40 cursor-pointer hover:text-white transition-colors">
                <input type="checkbox" className="rounded border-white/10 bg-white/5 text-prism-accent focus:ring-prism-accent" />
                Remember me
              </label>
              <Link to="/forgot-password" stroke="currentColor" className="text-prism-accent hover:underline">Forgot password?</Link>
            </div>

            <Button className="w-full py-4 gap-2">
              Sign In <ArrowRight size={18} />
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-white/40">
              New institution? <Link to="/register" className="text-prism-accent font-bold hover:underline">Register Institution</Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </PageContainer>
  );
};

export default LoginPage;
