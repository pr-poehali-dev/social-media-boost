import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="User" size={18} className="text-primary" />
                </div>
                <span className="text-sm font-medium hidden md:inline">{user?.name}</span>
              </div>
              <Button variant="outline" onClick={handleLogout}>
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-muted-foreground">
            Управляйте накруткой и отслеживайте статистику
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Лайки за месяц</CardDescription>
              <CardTitle className="text-3xl">2,847</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Icon name="TrendingUp" size={16} />
                <span>+12.5% за неделю</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Просмотры за месяц</CardDescription>
              <CardTitle className="text-3xl">18,942</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Icon name="TrendingUp" size={16} />
                <span>+8.3% за неделю</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Новые подписчики</CardDescription>
              <CardTitle className="text-3xl">342</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <Icon name="TrendingUp" size={16} />
                <span>+15.7% за неделю</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Автоматическое расписание</CardTitle>
            <CardDescription>Настройте параметры автоматической накрутки</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Соцсеть</label>
                <select className="w-full px-3 py-2 border rounded-lg bg-background">
                  <option>ВКонтакте</option>
                  <option>Telegram</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Тип накрутки</label>
                <select className="w-full px-3 py-2 border rounded-lg bg-background">
                  <option>Лайки</option>
                  <option>Просмотры</option>
                  <option>Подписчики</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Количество в день</label>
                <input 
                  type="number" 
                  placeholder="100" 
                  className="w-full px-3 py-2 border rounded-lg bg-background"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Время запуска</label>
                <input 
                  type="time" 
                  className="w-full px-3 py-2 border rounded-lg bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ссылка на пост/профиль</label>
              <input 
                type="url" 
                placeholder="https://vk.com/..." 
                className="w-full px-3 py-2 border rounded-lg bg-background"
              />
            </div>
            <div className="flex gap-4">
              <Button className="flex-1">
                <Icon name="Play" size={16} className="mr-2" />
                Запустить
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="Settings" size={16} className="mr-2" />
                Дополнительно
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Активные задачи</CardTitle>
            <CardDescription>Текущие процессы накрутки</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="ThumbsUp" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Лайки ВКонтакте</p>
                    <p className="text-sm text-muted-foreground">250 из 500 выполнено</p>
                  </div>
                </div>
                <Badge variant="secondary">Активно</Badge>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Icon name="Users" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Подписчики Telegram</p>
                    <p className="text-sm text-muted-foreground">Запуск в 14:00</p>
                  </div>
                </div>
                <Badge variant="outline">Запланировано</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
