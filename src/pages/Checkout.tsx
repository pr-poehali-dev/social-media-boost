import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const planParam = searchParams.get('plan') || 'profi';

  const plans = {
    start: {
      name: 'Старт',
      price: '990',
      description: 'Для начинающих',
      features: [
        '1000 лайков',
        '5000 просмотров',
        '100 подписчиков',
        'Базовая поддержка',
        '1 соцсеть'
      ]
    },
    profi: {
      name: 'Профи',
      price: '2490',
      description: 'Самый популярный',
      features: [
        '5000 лайков',
        '25000 просмотров',
        '500 подписчиков',
        'Приоритетная поддержка',
        '2 соцсети',
        'Автоматическое расписание'
      ]
    },
    business: {
      name: 'Бизнес',
      price: '4990',
      description: 'Для профессионалов',
      features: [
        '20000 лайков',
        '100000 просмотров',
        '2000 подписчиков',
        'VIP поддержка 24/7',
        'Все соцсети',
        'Расширенная автоматизация',
        'Аналитика и отчеты'
      ]
    }
  };

  const selectedPlan = plans[planParam as keyof typeof plans] || plans.profi;

  const paymentMethods = [
    {
      id: 'card',
      name: 'Банковская карта',
      icon: 'CreditCard',
      description: 'Visa, Mastercard, МИР'
    },
    {
      id: 'sbp',
      name: 'СБП',
      icon: 'Smartphone',
      description: 'Система быстрых платежей'
    },
    {
      id: 'yoomoney',
      name: 'ЮMoney',
      icon: 'Wallet',
      description: 'Электронный кошелек'
    },
    {
      id: 'qiwi',
      name: 'QIWI',
      icon: 'Wallet',
      description: 'Электронный кошелек'
    },
    {
      id: 'crypto',
      name: 'Криптовалюта',
      icon: 'Bitcoin',
      description: 'BTC, ETH, USDT'
    }
  ];

  const handlePayment = async () => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: 'Перенаправление на оплату',
        description: `Открываем форму оплаты через ${paymentMethods.find(m => m.id === paymentMethod)?.name}`,
      });
      
      navigate('/payment-success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={28} className="text-primary" />
              <span className="text-xl font-bold">BoostPro</span>
            </div>
            <Button variant="outline" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Оформление подписки</h1>
          <p className="text-muted-foreground">Выберите способ оплаты</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle>Выбранный тариф</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigate('/#pricing')}
                  >
                    Изменить
                  </Button>
                </div>
                <CardDescription>Ежемесячная подписка</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{selectedPlan.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedPlan.description}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium mb-3">Что входит:</p>
                    <ul className="space-y-2">
                      {selectedPlan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Способ оплаты</CardTitle>
                <CardDescription>Выберите удобный способ</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                        <RadioGroupItem value={method.id} id={method.id} />
                        <Label 
                          htmlFor={method.id} 
                          className="flex items-center gap-3 flex-1 cursor-pointer"
                        >
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon name={method.icon as any} size={20} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-muted-foreground">{method.description}</p>
                          </div>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Итого к оплате</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Тариф "{selectedPlan.name}"</span>
                    <span className="font-medium">{selectedPlan.price} ₽</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Период подписки</span>
                    <span className="font-medium">1 месяц</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Общая сумма</span>
                    <span className="text-3xl font-bold text-primary">{selectedPlan.price} ₽</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                        Обработка...
                      </>
                    ) : (
                      <>
                        <Icon name="Lock" size={20} className="mr-2" />
                        Оплатить
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая "Оплатить", вы соглашаетесь с условиями использования
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <span className="font-medium">Безопасная оплата</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Все платежи защищены SSL-шифрованием. Мы не храним данные вашей карты.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Принимаем к оплате:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Visa</Badge>
                    <Badge variant="secondary">Mastercard</Badge>
                    <Badge variant="secondary">МИР</Badge>
                    <Badge variant="secondary">СБП</Badge>
                    <Badge variant="secondary">ЮMoney</Badge>
                    <Badge variant="secondary">QIWI</Badge>
                    <Badge variant="secondary">Crypto</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
