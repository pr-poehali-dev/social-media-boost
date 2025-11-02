import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import Icon from '@/components/ui/icon';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="TrendingUp" size={40} className="text-primary" />
            <span className="text-3xl font-bold">BoostPro</span>
          </div>
          <p className="text-muted-foreground">
            Продвижение в соцсетях на автопилоте
          </p>
        </div>

        {isLogin ? (
          <LoginForm
            onSwitchToRegister={() => setIsLogin(false)}
            onSuccess={handleSuccess}
          />
        ) : (
          <RegisterForm
            onSwitchToLogin={() => setIsLogin(true)}
            onSuccess={handleSuccess}
          />
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            ← Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
