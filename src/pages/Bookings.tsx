import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  CalendarDays, 
  Search, 
  Filter, 
  Plus,
  Edit,
  Trash2
} from "lucide-react"

const Bookings = () => {
  const bookings = [
    {
      id: "BK001",
      guest: "Иванов Иван Иванович",
      room: "201",
      checkIn: "2024-12-05",
      checkOut: "2024-12-10",
      status: "confirmed",
      amount: "₽45,000",
      nights: 5
    },
    {
      id: "BK002", 
      guest: "Петрова Мария Владимировна",
      room: "305",
      checkIn: "2024-12-06",
      checkOut: "2024-12-08",
      status: "pending",
      amount: "₽32,000",
      nights: 2
    },
    {
      id: "BK003",
      guest: "Smith John",
      room: "102",
      checkIn: "2024-12-07",
      checkOut: "2024-12-12",
      status: "confirmed",
      amount: "₽65,000",
      nights: 5
    },
    {
      id: "BK004",
      guest: "Сидоров Алексей Петрович",
      room: "401",
      checkIn: "2024-12-01",
      checkOut: "2024-12-05",
      status: "checked-out",
      amount: "₽52,000",
      nights: 4
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-success-light text-success-foreground">Подтверждено</Badge>
      case 'pending':
        return <Badge variant="secondary">Ожидание</Badge>
      case 'checked-out':
        return <Badge variant="outline">Выехал</Badge>
      case 'cancelled':
        return <Badge variant="destructive">Отменено</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Бронирования</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
          <Plus className="h-4 w-4 mr-2" />
          Новое бронирование
        </Button>
      </div>

      {/* Фильтры */}
      <Card className="card-hotel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            Фильтры
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск по гостю или номеру..." 
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="confirmed">Подтверждено</SelectItem>
                <SelectItem value="pending">Ожидание</SelectItem>
                <SelectItem value="checked-out">Выехал</SelectItem>
                <SelectItem value="cancelled">Отменено</SelectItem>
              </SelectContent>
            </Select>
            <Input type="date" placeholder="Дата заезда от" />
            <Input type="date" placeholder="Дата заезда до" />
          </div>
        </CardContent>
      </Card>

      {/* Список бронирований */}
      <Card className="card-hotel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            Все бронирования
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-foreground">{booking.guest}</span>
                    {getStatusBadge(booking.status)}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>№ {booking.id}</span>
                    <span>Номер {booking.room}</span>
                    <span>{booking.checkIn} — {booking.checkOut}</span>
                    <span>{booking.nights} ночей</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold text-foreground">{booking.amount}</p>
                    <p className="text-sm text-muted-foreground">Итого</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Bookings