import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  BedDouble, 
  TrendingUp, 
  AlertCircle,
  Calendar,
  DollarSign
} from "lucide-react"

const Dashboard = () => {
  const stats = [
    {
      title: "Всего номеров",
      value: "42",
      description: "35 занято, 7 свободно",
      icon: BedDouble,
      trend: "+2.5%"
    },
    {
      title: "Гости сегодня",
      value: "68",
      description: "15 заездов, 8 выездов",
      icon: Users,
      trend: "+12%"
    },
    {
      title: "Доход за месяц",
      value: "₽2,450,000",
      description: "За ноябрь 2024",
      icon: DollarSign,
      trend: "+8.3%"
    },
    {
      title: "Загрузка",
      value: "83%",
      description: "Средняя за неделю",
      icon: TrendingUp,
      trend: "+5.1%"
    }
  ]

  const upcomingArrivals = [
    { guest: "Иванов И.И.", room: "201", time: "14:00", status: "confirmed" },
    { guest: "Петрова М.В.", room: "305", time: "15:30", status: "confirmed" },
    { guest: "Smith J.", room: "102", time: "16:00", status: "pending" },
  ]

  const upcomingDepartures = [
    { guest: "Сидоров А.П.", room: "401", time: "11:00", status: "checked-out" },
    { guest: "Johnson M.", room: "203", time: "12:00", status: "checking-out" },
  ]

  const notifications = [
    { type: "warning", message: "Номер 301 требует ремонта кондиционера" },
    { type: "info", message: "Новое бронирование на следующую неделю" },
    { type: "urgent", message: "Жалоба гостя в номере 205" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Панель управления</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {new Date().toLocaleDateString('ru-RU', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Статистические карточки */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="card-hotel">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{stat.description}</p>
                <span className="text-xs font-medium text-success">{stat.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Ближайшие заезды */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Ближайшие заезды
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingArrivals.map((arrival, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div>
                  <p className="font-medium text-foreground">{arrival.guest}</p>
                  <p className="text-sm text-muted-foreground">Номер {arrival.room}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{arrival.time}</p>
                  <Badge variant={arrival.status === 'confirmed' ? 'default' : 'secondary'}>
                    {arrival.status === 'confirmed' ? 'Подтверждено' : 'Ожидание'}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Ближайшие выезды */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-primary" />
              Ближайшие выезды
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingDepartures.map((departure, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div>
                  <p className="font-medium text-foreground">{departure.guest}</p>
                  <p className="text-sm text-muted-foreground">Номер {departure.room}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{departure.time}</p>
                  <Badge variant={departure.status === 'checked-out' ? 'outline' : 'default'}>
                    {departure.status === 'checked-out' ? 'Выехал' : 'Выезжает'}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Уведомления */}
      <Card className="card-hotel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-warning" />
            Уведомления и задачи
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
              <div className={`h-2 w-2 rounded-full mt-2 ${
                notification.type === 'urgent' ? 'bg-destructive' :
                notification.type === 'warning' ? 'bg-warning' : 'bg-primary'
              }`} />
              <p className="text-sm text-foreground">{notification.message}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard