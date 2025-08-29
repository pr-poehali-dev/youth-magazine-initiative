import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="BookOpen" size={28} className="text-accent" />
              <h1 className="text-2xl font-bold text-primary">Журнал "Новый путь"</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-accent transition-colors">Главная</a>
              <a href="#articles" className="text-foreground hover:text-accent transition-colors">Статьи</a>
              <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-12 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Молодежный журнал реабилитационного центра
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Место, где каждый голос важен. Истории, стихи, статьи и размышления молодых людей о новых возможностях жизни.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Icon name="PenTool" size={18} className="mr-2" />
                Поделиться историей
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Читать статьи
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card className="overflow-hidden">
                  <img 
                    src="/img/601f6e0c-0c14-4018-abce-50f86da7d327.jpg" 
                    alt="Молодежный реабилитационный центр"
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Icon name="Calendar" size={16} />
                      <span>29 августа 2025</span>
                      <Separator orientation="vertical" className="h-4" />
                      <Icon name="User" size={16} />
                      <span>Редакция журнала</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-primary mb-6">
                      Краткая аннотация проекта
                    </h3>
                    
                    <div className="prose max-w-none text-foreground leading-relaxed space-y-4">
                      <p>
                        В Республике Башкортостан в Государственном бюджетном учреждении Республиканский центр 
                        психолого-педагогической реабилитации и коррекции несовершеннолетних ежегодно проходят 
                        реабилитацию более 1000 детей, подростков и молодежи, употребляющих наркотические вещества.
                      </p>
                      
                      <p>
                        Во время реабилитации для них проводятся занятия по арт-терапии, создаются квесты от лучших 
                        игротехников Республики Башкортостан, проводятся конкурсы и занятия для адаптации и облегчения 
                        периода реабилитации.
                      </p>
                      
                      <p>
                        Излюбленным мероприятием ребят стали литературные вечера, где каждый может рассказать стих или 
                        поделиться своим рассказом, или даже статьей. Во время одного из мероприятий было выдвинуто 
                        предложение со стороны реабилитантов, о создании молодежного журнала, где они будут сами авторами, 
                        писателями и редакторами.
                      </p>
                      
                      <p>
                        Будут писать статьи, а по окончанию месяца журнал будет печататься и бесплатно тиражироваться в 
                        Молодежных центрах и учреждениях республики Башкортостан. Основные темы, которые будут подниматься, 
                        это здоровый образ жизни, добрые дела, а также жизненные истории, лучшие стихи и рассказы участников 
                        проекта.
                      </p>
                      
                      <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                        <p className="font-semibold text-accent mb-2">Результат опроса:</p>
                        <p>
                          По итогу был проведен анонимный опрос, где <strong>90% опрошенных ответили положительно</strong> 
                          о создании журнала и готовы помогать в создании каждого тиража.
                        </p>
                      </div>
                      
                      <p>
                        Дети, подростки и молодежь зачастую рано взрослеют и попадают не в самые лучшие компании и 
                        сталкиваются со страшными заболеваниями и проблемами. Наркомания – заболевание, ставшее серьезной 
                        проблемой для человечества.
                      </p>
                      
                      <p>
                        Согласно официальным данным ООН за последние 10 лет количество наркозависимых в России возросло 
                        в 10 раз, и проблема наркомании уже много лет является актуальной, к сожалению, и для Республики 
                        Башкортостан.
                      </p>
                      
                      <p>
                        Есть данные из практики, что реализация адаптационной программы с наличием арт-компонента повышает 
                        её эффективность более чем в половину. У зависимых отмечается повышение реабилитационного потенциала, 
                        достигается высокая степень личностной, социальной и трудовой адаптации за счёт участия и 
                        заинтересованности в итоге коллективного творчества и совместных мероприятиях.
                      </p>
                      
                      <p>
                        Таким образом, реализацию данного проекта с учётом участия в разных мероприятиях разработчики 
                        рассматривают как комплексную многокомпонентную антинаркотическую работу с использованием методов 
                        волонтёрства. <strong>Данный Проект решает сразу задачи первичной, вторичной и третичной 
                        профилактики наркомании.</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">О журнале</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "Новый путь" — это голос молодежи, проходящей путь реабилитации. Здесь каждая история важна, 
                      каждое слово имеет силу исцеления.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">Рубрики</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Heart" size={16} className="text-accent" />
                        <span>Здоровый образ жизни</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="HandHeart" size={16} className="text-accent" />
                        <span>Добрые дела</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="BookHeart" size={16} className="text-accent" />
                        <span>Жизненные истории</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="PenTool" size={16} className="text-accent" />
                        <span>Стихи и рассказы</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Последние публикации</h2>
              <p className="text-muted-foreground">Истории, которые вдохновляют и дают надежду</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <img 
                  src="/img/232aff49-14bf-47b7-bcf3-ff91149a3af2.jpg" 
                  alt="Статья журнала"
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Icon name="Calendar" size={14} />
                    <span>25 августа 2025</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-3">Мой путь к новой жизни</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    История о том, как творчество помогло найти смысл и направление в жизни...
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                  <Icon name="Heart" size={48} className="text-accent" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Icon name="Calendar" size={14} />
                    <span>20 августа 2025</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-3">Стихи о надежде</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Сборник стихотворений участников программы реабилитации о вере в будущее...
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <Icon name="Users" size={48} className="text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Icon name="Calendar" size={14} />
                    <span>15 августа 2025</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-3">Наша команда волонтеров</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Рассказ о людях, которые помогают создавать этот журнал и поддерживают наших авторов...
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Нужна помощь?</h2>
              <p className="text-muted-foreground">Мы здесь, чтобы поддержать вас на пути к новой жизни</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <Icon name="Phone" size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Горячая линия</h3>
                    <p className="text-muted-foreground mb-4">
                      Круглосуточная поддержка для тех, кому нужна помощь
                    </p>
                    <p className="text-2xl font-bold text-accent">8-800-XXX-XX-XX</p>
                    <p className="text-sm text-muted-foreground mt-2">Звонок бесплатный</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Наш центр</h3>
                    <p className="text-muted-foreground mb-4">
                      Республиканский центр психолого-педагогической реабилитации и коррекции несовершеннолетних
                    </p>
                    <p className="font-medium">Республика Башкортостан</p>
                    <Button variant="outline" className="mt-4">
                      <Icon name="MapPin" size={16} className="mr-2" />
                      Показать на карте
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <Card>
                <CardContent className="p-8">
                  <Icon name="Mail" size={48} className="text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">Хотите поделиться своей историей?</h3>
                  <p className="text-muted-foreground mb-6">
                    Присылайте свои статьи, стихи и рассказы. Каждая история может помочь кому-то еще.
                  </p>
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="PenTool" size={18} className="mr-2" />
                    Отправить материал
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="BookOpen" size={32} className="text-accent" />
              <h3 className="text-2xl font-bold">Журнал "Новый путь"</h3>
            </div>
            <p className="text-primary-foreground/80 mb-8">
              Место, где каждый голос важен, где каждая история может изменить чью-то жизнь к лучшему.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>© 2025 Журнал "Новый путь"</span>
              <span>•</span>
              <span>Республика Башкортостан</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;