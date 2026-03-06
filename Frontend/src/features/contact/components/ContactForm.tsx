import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { InputField } from '../../../components/ui/InputField';
import { Card } from '../../../components/ui/Card';

export const ContactForm = () => {
  return (
    <Card className="p-8 lg:p-12 border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl">
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField 
            label="Name" 
            placeholder="Full Name" 
            required
          />
          <InputField 
            label="Institution" 
            placeholder="University / Research Body" 
            required
          />
        </div>
        <InputField 
          label="Email" 
          type="email" 
          placeholder="official@email.com" 
          required
        />
        <InputField 
          label="Message" 
          textarea 
          placeholder="How can we assist you with institutional deployment?" 
          required
        />
        <Button className="w-full py-4 gap-2">
          Send Inquiry <Send size={18} />
        </Button>
      </form>
    </Card>
  );
};
