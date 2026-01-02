import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentMMR, setCurrentMMR] = useState([2000]);
  const [targetMMR, setTargetMMR] = useState([4000]);
  const [boostSpeed, setBoostSpeed] = useState<'normal' | 'fast' | 'express'>('normal');

  const mmrDifference = targetMMR[0] - currentMMR[0];
  const speedMultiplier = boostSpeed === 'express' ? 1.5 : boostSpeed === 'fast' ? 1.2 : 1;
  const basePrice = mmrDifference * 0.5;
  const totalPrice = Math.max(0, basePrice * speedMultiplier);

  const services = [
    {
      icon: 'TrendingUp',
      title: 'Буст по MMR',
      description: 'Прокачка рейтинга до желаемого уровня с гарантией результата',
      price: 'от 500₽'
    },
    {
      icon: 'Award',
      title: 'Калибровка',
      description: 'Профессиональная калибровка аккаунта на максимальный MMR',
      price: 'от 2500₽'
    },
    {
      icon: 'Zap',
      title: 'Винстрик',
      description: 'Серия побед для быстрого подъема рейтинга',
      price: 'от 300₽'
    },
    {
      icon: 'Target',
      title: 'Coaching',
      description: 'Индивидуальные тренировки с профессиональным игроком',
      price: 'от 1000₽/час'
    }
  ];

  const reviews = [
    {
      name: 'Алексей',
      rating: 5,
      text: 'Поднял с 3к до 5к за неделю. Бустеры играют чисто, никаких проблем.',
      mmr: '3000 → 5000'
    },
    {
      name: 'Дмитрий',
      rating: 5,
      text: 'Быстро, качественно, без читов. Рекомендую!',
      mmr: '2500 → 4000'
    },
    {
      name: 'Михаил',
      rating: 5,
      text: 'Отличный сервис, адекватные цены. Буду обращаться еще.',
      mmr: '4200 → 6000'
    }
  ];

  const faqItems = [
    {
      question: 'Как происходит буст?',
      answer: 'Профессиональный игрок заходит на ваш аккаунт и играет рейтинговые матчи до достижения целевого MMR. Мы гарантируем безопасность аккаунта и конфиденциальность.'
    },
    {
      question: 'Сколько времени занимает буст?',
      answer: 'Зависит от разницы MMR и выбранной скорости. В среднем: Normal — 3-7 дней, Fast — 2-4 дня, Express — 1-2 дня.'
    },
    {
      question: 'Безопасно ли это для аккаунта?',
      answer: 'Да, мы используем VPN и играем только в удобное для вас время. За всю историю работы не было ни одного бана.'
    },
    {
      question: 'Какие гарантии вы предоставляете?',
      answer: 'Гарантируем достижение целевого MMR. Если рейтинг упадет в течение 7 дней после буста — бесплатно вернем его обратно.'
    },
    {
      question: 'Можно ли играть во время буста?',
      answer: 'Не рекомендуется играть во время активного буста. Мы согласуем удобный график работы с вами.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">DotaBoost</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">Главная</a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">Отзывы</a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
            <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Профессиональный буст MMR
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Достигни желаемого рейтинга с командой профессиональных игроков
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 animate-scale-in">
            <h2 className="text-2xl font-semibold mb-6 text-center">Калькулятор буста</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="text-sm font-medium mb-3 block">Текущий MMR: {currentMMR[0]}</label>
                <Slider
                  value={currentMMR}
                  onValueChange={setCurrentMMR}
                  min={0}
                  max={10000}
                  step={100}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>10000</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-3 block">Целевой MMR: {targetMMR[0]}</label>
                <Slider
                  value={targetMMR}
                  onValueChange={setTargetMMR}
                  min={0}
                  max={10000}
                  step={100}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0</span>
                  <span>10000</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="text-sm font-medium mb-4 block">Скорость прокачки</label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'normal', label: 'Normal', desc: '3-7 дней', multiplier: '×1.0' },
                  { value: 'fast', label: 'Fast', desc: '2-4 дня', multiplier: '×1.2' },
                  { value: 'express', label: 'Express', desc: '1-2 дня', multiplier: '×1.5' }
                ].map((speed) => (
                  <Button
                    key={speed.value}
                    variant={boostSpeed === speed.value ? 'default' : 'outline'}
                    onClick={() => setBoostSpeed(speed.value as any)}
                    className="h-auto py-4 flex flex-col items-center gap-1"
                  >
                    <span className="font-semibold">{speed.label}</span>
                    <span className="text-xs opacity-80">{speed.desc}</span>
                    <span className="text-xs opacity-60">{speed.multiplier}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Разница MMR</p>
                  <p className="text-3xl font-bold text-primary">{mmrDifference > 0 ? `+${mmrDifference}` : mmrDifference}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Стоимость</p>
                  <p className="text-3xl font-bold">{totalPrice.toFixed(0)}₽</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full text-lg">
              Заказать буст
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer group">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <p className="text-primary font-semibold">{service.price}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-medium">{review.name}</span>
                  <span className="text-xs text-primary font-semibold">{review.mmr}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">Связаться с нами</h2>
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="MessageCircle" className="text-primary" size={20} />
                <span>Telegram: @dotaboost_support</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="Mail" className="text-primary" size={20} />
                <span>Email: support@dotaboost.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon name="MessageSquare" className="text-primary" size={20} />
                <span>Discord: DotaBoost#1234</span>
              </div>
            </div>

            <div className="border-t border-border/50 pt-8">
              <h3 className="text-xl font-semibold mb-4">Или оставьте заявку</h3>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-background/50" />
                <Input placeholder="Telegram или Email" className="bg-background/50" />
                <Textarea placeholder="Сообщение" rows={4} className="bg-background/50" />
                <Button className="w-full">
                  Отправить
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground text-sm">
          <p>© 2024 DotaBoost. Все права защищены.</p>
          <p className="mt-2">Профессиональный буст MMR в Dota 2</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
