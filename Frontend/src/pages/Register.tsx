import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageContainer } from '../components/layout/PageContainer';
import { Card } from '../components/ui/Card';
import { InputField } from '../components/ui/InputField';
import { Button } from '../components/ui/Button';

const RegisterPage = () => {
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
        className="w-full max-w-2xl"
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
          <h1 className="text-3xl font-bold text-white tracking-tight">Institution Onboarding</h1>
          <p className="text-white/50 mt-2">Create an institutional account for research governance.</p>
        </div>

        <Card className="p-8 lg:p-12 border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField
                label="Institution Name"
                placeholder="University / Research Body"
                required
              />
              <InputField
                label="Admin Name"
                placeholder="Full Name"
                required
              />
            </div>

            <InputField
              label="Official Email"
              type="email"
              placeholder="admin@institution.edu"
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField
                label="Password"
                type="password"
                placeholder="••••••••"
                required
              />
              <InputField
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 text-white/40 cursor-pointer group">
                <input type="checkbox" className="mt-1 rounded border-white/10 bg-white/5 text-prism-accent focus:ring-prism-accent" required />
                <span className="text-xs leading-relaxed group-hover:text-white transition-colors">
                  I agree to the <Link to="/policy" className="text-prism-accent hover:underline">Institutional Review Policy</Link> and acknowledge that PRISM is a decision-support tool.
                </span>
              </label>
            </div>

            <Button className="w-full py-4 gap-2">
              Create Institutional Account <ArrowRight size={18} />
            </Button>
          </form>

          <div className="mt-10 pt-10 border-t border-white/5 text-center">
            <p className="text-sm text-white/40">
              Already have an account? <Link to="/login" className="text-prism-accent font-bold hover:underline">Sign In</Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </PageContainer>
  );
};

export default RegisterPage;
