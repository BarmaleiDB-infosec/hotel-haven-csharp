import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  DollarSign, 
  Plus,
  Edit,
  Calendar,
  Percent,
  Tag,
  TrendingUp
} from "lucide-react"

const Rates = () => {
  const rates = [
    {
      id: "RT001",
      name: "Стандарт - Будни",
      roomType: "Стандарт",
      price: 8500,
      currency: "₽",
      period: "weekdays",
      season: "regular",
      discount: 0,
      validFrom: "2024-01-01",
      validTo: "2024-12-31",
      active: true
    },
    {
      id: "RT002", 
      name: "Стандарт - Выходные",
      roomType: "Стандарт",
      price: 10500,
      currency: "₽",
      period: "weekends",
      season: "regular",
      discount: 0,
      validFrom: "2024-01-01",
      validTo: "2024-12-31",
      active: true
    },
    {
      id: "RT003",
      name: "Делюкс - Будни",
      roomType: "Делюкс",
      price: 12000,
      currency: "₽",
      period: "weekdays",
      season: "regular",
      discount: 0,
      validFrom: "2024-01-01", 
      validTo: "2024-12-31",
      active: true
    },
    {
      id: "RT004",
      name: "Люкс - Новогодние праздники",
      roomType: "Люкс",
      price: 25000,
      currency: "₽",
      period: "all",
      season: "high",
      discount: 0,
      validFrom: "2024-12-25",
      validTo: "2025-01-10",
      active: true
    },
    {
      id: "RT005",
      name: "Раннее бронирование -15%",
      roomType: "Все типы",
      price: 0,
      currency: "₽",
      period: "all",
      season: "regular",
      discount: 15,
      validFrom: "2024-01-01",
      validTo: "2024-12-31",
      active: true
    }
  ]

  const packages = [
    {
      id: "PK001",
      name: "Романтический пакет",
      description: "Номер Люкс + ужин + шампанское + цветы",
      price: 35000,
      includes: ["Номер Люкс на 1 ночь", "Романтический ужин", "Бутылка шампанского", "Букет роз"],
      active: true
    },
    {
      id: "PK002",
      name: "Бизнес пакет",
      description: "Номер Делюкс + завтрак + переговорная",
      price: 18000,
      includes: ["Номер Делюкс на 1 ночь", "Завтрак в номер", "2 часа переговорной", "Wi-Fi Premium"],
      active: true
    },
    {
      id: "PK003",
      name: "Семейный отдых",
      description: "2 номера Стандарт + завтраки + детская программа",
      price: 28000,
      includes: ["2 номера Стандарт", "Завтраки для всей семьи", "Детская анимация", "Игровая комната"],
      active: false
    }
  ]

  const getPeriodBadge = (period: string) => {
    switch (period) {
      case 'weekdays':
        return <Badge variant="outline">Будни</Badge>
      case 'weekends':
        return <Badge className="bg-primary-light text-primary-foreground">Выходные</Badge>
      case 'all':
        return <Badge className="bg-success-light text-success-foreground">Все дни</Badge>
      default:
        return <Badge variant="secondary">{period}</Badge>
    }
  }

  const getSeasonBadge = (season: string) => {
    switch (season) {
      case 'high':
        return <Badge className="bg-warning-light text-warning-foreground">Высокий сезон</Badge>
      case 'low':
        return <Badge className="bg-muted text-muted-foreground">Низкий сезон</Badge>
      case 'regular':
        return <Badge variant="secondary">Обычный</Badge>
      default:
        return <Badge variant="secondary">{season}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Тарифы и пакеты</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Новый пакет
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
            <Plus className="h-4 w-4 mr-2" />
            Новый тариф
          </Button>
        </div>
      </div>

      {/* Статистика */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Активных тарифов</p>
                <p className="text-2xl font-bold text-primary">{rates.filter(r => r.active).length}</p>
              </div>
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Средняя цена</p>
                <p className="text-2xl font-bold text-foreground">₽13,200</p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Пакетов</p>
                <p className="text-2xl font-bold text-warning">{packages.length}</p>
              </div>
              <Tag className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Скидки</p>
                <p className="text-2xl font-bold text-accent">{rates.filter(r => r.discount > 0).length}</p>
              </div>
              <Percent className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Тарифы */}
      <Card className="card-hotel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Тарифы по типам номеров
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rates.map((rate) => (
              <div key={rate.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{rate.name}</h3>
                    {!rate.active && <Badge variant="destructive">Неактивен</Badge>}
                    {rate.discount > 0 && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Percent className="h-3 w-3 mr-1" />
                        -{rate.discount}%
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>ID: {rate.id}</span>
                    <span>Тип: {rate.roomType}</span>
                    {getPeriodBadge(rate.period)}
                    {getSeasonBadge(rate.season)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <span>Действует: {rate.validFrom} — {rate.validTo}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{rate.currency}{rate.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">за ночь</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Пакеты */}
      <Card className="card-hotel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-primary" />
            Специальные пакеты
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="card-hotel">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                    {!pkg.active && <Badge variant="destructive">Неактивен</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Включено:</p>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">₽{pkg.price.toLocaleString()}</span>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Rates