import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onSuccess: () => void;
}

const LoginForm = ({ onSwitchToRegister, onSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(email, password);
    
    setLoading(false);

    if (success) {
      toast({
        title: 'Успешный вход',
        description: 'Добро пожаловать в BoostPro!',
      });
      onSuccess();
    } else {
      toast({
        title: 'Ошибка входа',
        description: 'Неверный email или пароль',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="w-full max-w-md animate-scale-in">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name="LogIn" size={32} className="text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl">Вход в аккаунт</CardTitle>
        <CardDescription>Введите свои данные для входа</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                Вход...
              </>
            ) : (
              'Войти'
            )}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <span className="text-muted-foreground">Нет аккаунта? </span>
          <button
            onClick={onSwitchToRegister}
            className="text-primary hover:underline font-medium"
          >
            Зарегистрироваться
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
