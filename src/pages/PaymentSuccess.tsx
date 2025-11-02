import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const confettiInterval = setInterval(() => {
    }, 200);

    return () => clearInterval(confettiInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center px-4">
      <Card className="max-w-lg w-full animate-scale-in">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center animate-scale-in">
              <Icon name="CheckCircle2" size={48} className="text-green-600" />
            </div>
          </div>
          <CardTitle className="text-3xl mb-2">Оплата успешна!</CardTitle>
          <CardDescription className="text-base">
            Ваша подписка активирована
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted/30 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Статус</span>
              <span className="font-medium text-green-600 flex items-center gap-2">
                <Icon name="CheckCircle" size={16} />
                Активна
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Действует до</span>
              <span className="font-medium">
                {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU')}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Номер заказа</span>
              <span className="font-medium font-mono">#{Math.floor(Math.random() * 1000000)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-medium">Что дальше?</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Перейдите в личный кабинет для настройки накрутки</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Настройте автоматическое расписание работы</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Отслеживайте статистику в реальном времени</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Button size="lg" onClick={() => navigate('/dashboard')} className="w-full">
              <Icon name="LayoutDashboard" size={20} className="mr-2" />
              Перейти в кабинет
            </Button>
            <Button variant="outline" onClick={() => navigate('/')} className="w-full">
              Вернуться на главную
            </Button>
          </div>

          <div className="bg-primary/5 rounded-lg p-4 flex items-start gap-3">
            <Icon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="font-medium mb-1">Детали оплаты отправлены на email</p>
              <p className="text-muted-foreground">
                Чек и подтверждение подписки придут в течение 5 минут
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
