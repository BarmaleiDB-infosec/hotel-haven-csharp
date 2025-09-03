import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  Download,
  Filter,
  Users,
  DollarSign,
  Percent
} from "lucide-react"

const Reports = () => {
  const monthlyStats = [
    { month: "Янв", revenue: 2200000, occupancy: 78, guests: 156 },
    { month: "Фев", revenue: 1800000, occupancy: 65, guests: 132 },
    { month: "Мар", revenue: 2100000, occupancy: 72, guests: 145 },
    { month: "Апр", revenue: 2500000, occupancy: 85, guests: 178 },
    { month: "Май", revenue: 2800000, occupancy: 92, guests: 201 },
    { month: "Июн", revenue: 3200000, occupancy: 95, guests: 234 },
    { month: "Июл", revenue: 3500000, occupancy: 98, guests: 267 },
    { month: "Авг", revenue: 3300000, occupancy: 96, guests: 245 },
    { month: "Сен", revenue: 2900000, occupancy: 88, guests: 198 },
    { month: "Окт", revenue: 2600000, occupancy: 82, guests: 176 },
    { month: "Ноя", revenue: 2450000, occupancy: 83, guests: 168 },
    { month: "Дек", revenue: 2700000, occupancy: 87, guests: 189 }
  ]

  const topRooms = [
    { room: "301", type: "Люкс", bookings: 28, revenue: 504000, occupancy: 93 },
    { room: "201", type: "Делюкс", bookings: 25, revenue: 300000, occupancy: 89 },
    { room: "401", type: "Люкс", bookings: 24, revenue: 432000, occupancy: 86 },
    { room: "102", type: "Стандарт", bookings: 22, revenue: 187000, occupancy: 81 },
    { room: "305", type: "Люкс", bookings: 21, revenue: 378000, occupancy: 78 }
  ]

  const guestStats = [
    { source: "Прямые бронирования", count: 45, percentage: 32 },
    { source: "Booking.com", count: 38, percentage: 27 },
    { source: "Яндекс.Путешествия", count: 28, percentage: 20 },
    { source: "Авиасейлс", count: 18, percentage: 13 },
    { source: "Другие", count: 11, percentage: 8 }
  ]

  const currentMonth = "Ноябрь 2024"
  const totalRevenue = 2450000
  const totalGuests = 168
  const avgOccupancy = 83
  
  const revenueChange = 8.3
  const guestChange = 12.5
  const occupancyChange = 5.1

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Отчёты и аналитика</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Экспорт данных
          </Button>
          <Select>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Сегодня</SelectItem>
              <SelectItem value="week">Неделя</SelectItem>
              <SelectItem value="month">Месяц</SelectItem>
              <SelectItem value="quarter">Квартал</SelectItem>
              <SelectItem value="year">Год</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Ключевые показатели */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="card-hotel">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Доход за месяц
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">₽{totalRevenue.toLocaleString()}</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+{revenueChange}%</span>
              <span className="text-muted-foreground ml-1">к прошлому месяцу</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Гостей за месяц
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalGuests}</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+{guestChange}%</span>
              <span className="text-muted-foreground ml-1">к прошлому месяцу</span>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Средняя загрузка
            </CardTitle>
            <Percent className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{avgOccupancy}%</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+{occupancyChange}%</span>
              <span className="text-muted-foreground ml-1">к прошлому месяцу</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* График доходов */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Доходы по месяцам
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyStats.slice(-6).map((stat, index) => (
                <div key={stat.month} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-16 text-sm text-muted-foreground">{stat.month}</div>
                    <div className="flex-1 bg-secondary rounded-full h-2 max-w-40">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(stat.revenue / 3500000) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-foreground">₽{(stat.revenue / 1000000).toFixed(1)}М</div>
                    <div className="text-xs text-muted-foreground">{stat.occupancy}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Топ номеров */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Самые популярные номера
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topRooms.map((room, index) => (
                <div key={room.room} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">№ {room.room}</p>
                      <p className="text-sm text-muted-foreground">{room.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">₽{(room.revenue / 1000).toFixed(0)}К</p>
                    <p className="text-sm text-muted-foreground">{room.bookings} броней</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Источники бронирований */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Источники бронирований
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {guestStats.map((source) => (
                <div key={source.source} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-32 text-sm text-foreground">{source.source}</div>
                    <div className="flex-1 bg-secondary rounded-full h-2 max-w-32">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${source.percentage * 3}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-foreground">{source.count}</div>
                    <div className="text-xs text-muted-foreground">{source.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Тренды загрузки */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Загрузка по дням недели
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { day: "Понедельник", occupancy: 65, trend: "down" },
                { day: "Вторник", occupancy: 72, trend: "up" },
                { day: "Среда", occupancy: 78, trend: "up" },
                { day: "Четверг", occupancy: 85, trend: "up" },
                { day: "Пятница", occupancy: 92, trend: "up" },
                { day: "Суббота", occupancy: 98, trend: "up" },
                { day: "Воскресенье", occupancy: 88, trend: "down" }
              ].map((dayStats) => (
                <div key={dayStats.day} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-24 text-sm text-foreground">{dayStats.day}</div>
                    <div className="flex-1 bg-secondary rounded-full h-2 max-w-32">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${dayStats.occupancy}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{dayStats.occupancy}%</span>
                    {dayStats.trend === "up" ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Reports