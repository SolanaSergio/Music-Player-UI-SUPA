import React from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../lib/auth/hooks';
import { registerSchema, loginSchema } from '../../lib/auth/validation';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { isSupabaseConfigured } from '../../lib/supabase';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const { isLoading, error, login, register } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');
  const [validationError, setValidationError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    try {
      if (type === 'register') {
        const result = registerSchema.safeParse({ email, password, displayName });
        if (!result.success) {
          setValidationError(result.error.errors[0].message);
          return;
        }
        await register(email, password, displayName);
      } else {
        const result = loginSchema.safeParse({ email, password });
        if (!result.success) {
          setValidationError(result.error.errors[0].message);
          return;
        }
        await login(email, password);
      }
    } catch (err) {
      // Error handling is managed by useAuth hook
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {!isSupabaseConfigured() && (
        <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-500 animate-fade-in">
          Please connect to Supabase using the "Connect to Supabase" button in the top right corner.
        </div>
      )}
      
      {(error || validationError) && (
        <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-500 animate-fade-in">
          {error || validationError}
        </div>
      )}

      <div className="space-y-4">
        {type === 'register' && (
          <Input
            label="Display Name"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            leftIcon={<User className="h-5 w-5 text-white/50" />}
            className="h-12"
          />
        )}

        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          leftIcon={<Mail className="h-5 w-5 text-white/50" />}
          className="h-12"
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          leftIcon={<Lock className="h-5 w-5 text-white/50" />}
          className="h-12"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isLoading}
        className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-50 hover:to-gray-100 text-black font-medium h-12"
      >
        {type === 'login' ? 'Sign In' : 'Create Account'}
      </Button>
    </form>
  );
};

export default AuthForm;