import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDashboardClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  const services = [
    {
      icon: 'ThumbsUp',
      title: 'Лайки',
      description: 'Увеличение количества лайков на ваши посты',
      platforms: ['VK', 'Telegram']
    },
    {
      icon: 'Eye',
      title: 'Просмотры',
      description: 'Рост просмотров видео и постов',
      platforms: ['VK', 'Telegram']
    },
    {
      icon: 'Users',
      title: 'Подписчики',
      description: 'Приток новых подписчиков на аккаунт',
      platforms: ['VK', 'Telegram']
    },
    {
      icon: 'MessageCircle',
      title: 'Комментарии',
      description: 'Живые комментарии под публикациями',
      platforms: ['VK']
    },
    {
      icon: 'Share2',
      title: 'Репосты',
      description: 'Распространение контента через репосты',
      platforms: ['VK', 'Telegram']
    },
    {
      icon: 'Clock',
      title: 'Автоматизация',
      description: 'Настройка расписания накрутки',
      platforms: ['VK', 'Telegram']
    }
  ];

  const plans = [
    {
      id: 'start',
      name: 'Старт',
      price: '990',
      description: 'Для начинающих',
      features: [
        '1000 лайков',
        '5000 просмотров',
        '100 подписчиков',
        'Базовая поддержка',
        '1 соцсеть'
      ],
      popular: false
    },
    {
      id: 'profi',
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
      ],
      popular: true
    },
    {
      id: 'business',
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
      ],
      popular: false
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Регистрация',
      description: 'Создайте аккаунт и выберите подходящий тариф'
    },
    {
      number: '02',
      title: 'Настройка',
      description: 'Укажите ссылки на профили и настройте параметры накрутки'
    },
    {
      number: '03',
      title: 'Автоматизация',
      description: 'Установите расписание и параметры автоматической работы'
    },
    {
      number: '04',
      title: 'Результат',
      description: 'Отслеживайте статистику и наслаждайтесь ростом'
    }
  ];

  const faqs = [
    {
      question: 'Это безопасно для моего аккаунта?',
      answer: 'Да, мы используем проверенные методы продвижения с постепенным увеличением метрик, что делает процесс максимально безопасным и естественным.'
    },
    {
      question: 'Как быстро появятся результаты?',
      answer: 'Первые результаты вы увидите в течение 1-2 часов после запуска. Полная накрутка происходит постепенно в течение нескольких дней для естественности.'
    },
    {
      question: 'Можно ли настроить автоматическое расписание?',
      answer: 'Да, в тарифах Профи и Бизнес доступна функция автоматического расписания. Вы можете задать время и параметры накрутки, и система будет работать автоматически.'
    },
    {
      question: 'Какие соцсети поддерживаются?',
      answer: 'На данный момент мы работаем с ВКонтакте и Telegram. В ближайшее время планируем добавить Instagram и YouTube.'
    },
    {
      question: 'Как происходит оплата?',
      answer: 'Вы можете оплатить услуги банковской картой, через электронные кошельки или криптовалюту. Оплата происходит один раз при выборе тарифа.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={28} className="text-primary" />
              <span className="text-xl font-bold">BoostPro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm hover:text-primary transition-colors">
                Как это работает
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
                FAQ
              </button>
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <Button onClick={() => navigate('/dashboard')} variant="default">
                    Личный кабинет
                  </Button>
                  <Button onClick={logout} variant="outline" size="sm">
                    <Icon name="LogOut" size={16} />
                  </Button>
                </div>
              ) : (
                <Button onClick={() => navigate('/auth')} variant="default">
                  Войти
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl animate-fade-in">
          <Badge className="mb-4" variant="secondary">
            🚀 Автоматическое продвижение
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Продвижение в соцсетях на автопилоте
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Увеличивайте лайки, просмотры и подписчиков ВКонтакте и Telegram с помощью умной автоматизации и настраиваемого расписания
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('pricing')} className="text-base">
              Выбрать тариф
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('how-it-works')}>
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg">
              Полный спектр инструментов для роста вашего присутствия
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {service.platforms.map((platform) => (
                      <Badge key={platform} variant="secondary">{platform}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-muted-foreground text-lg">
              Выберите план, который подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-primary border-2 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/мес</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate(`/checkout?plan=${plan.id}`)}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-muted-foreground text-lg">
              Простой процесс от регистрации до результата
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы о нашем сервисе
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="cta" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к тысячам пользователей, которые уже используют BoostPro
          </p>
          <Button size="lg" onClick={handleDashboardClick} className="text-base">
            {isAuthenticated ? 'Перейти в кабинет' : 'Начать сейчас'}
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 border-t bg-muted/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <span className="text-lg font-bold">BoostPro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное продвижение в социальных сетях
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('services')}>Услуги</button></li>
                <li><button onClick={() => scrollToSection('pricing')}>Тарифы</button></li>
                <li><button onClick={handleDashboardClick}>Личный кабинет</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('faq')}>FAQ</button></li>
                <li><a href="#">Документация</a></li>
                <li><a href="#">Связаться с нами</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>support@boostpro.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Telegram: @boostpro</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 BoostPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;