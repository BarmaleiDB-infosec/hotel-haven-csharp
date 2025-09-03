import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Users, 
  Search, 
  Filter, 
  Plus,
  UserCheck,
  UserX,
  Phone,
  Mail,
  MapPin
} from "lucide-react"

const Guests = () => {
  const guests = [
    {
      id: "G001",
      name: "Иванов Иван Иванович",
      email: "ivanov@email.com",
      phone: "+7 (999) 123-45-67",
      room: "201",
      checkIn: "2024-12-01",
      checkOut: "2024-12-05",
      status: "checked-in",
      nationality: "Россия",
      document: "Паспорт РФ 1234 567890",
      vip: false
    },
    {
      id: "G002",
      name: "Smith John",
      email: "john.smith@email.com", 
      phone: "+1 (555) 123-4567",
      room: "102",
      checkIn: "2024-12-02",
      checkOut: "2024-12-07",
      status: "checked-in",
      nationality: "США",
      document: "Passport USA 123456789",
      vip: true
    },
    {
      id: "G003",
      name: "Петрова Мария Владимировна",
      email: "petrova@email.com",
      phone: "+7 (999) 234-56-78",
      room: "305",
      checkIn: "2024-12-06",
      checkOut: "2024-12-08",
      status: "arriving-today",
      nationality: "Россия", 
      document: "Паспорт РФ 2345 678901",
      vip: false
    },
    {
      id: "G004",
      name: "Сидоров Алексей Петрович",
      email: "sidorov@email.com",
      phone: "+7 (999) 345-67-89",
      room: "401",
      checkIn: "2024-11-28",
      checkOut: "2024-12-05",
      status: "checked-out",
      nationality: "Россия",
      document: "Паспорт РФ 3456 789012",
      vip: false
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'checked-in':
        return <Badge className="status-occupied">Проживает</Badge>
      case 'arriving-today':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">Заезжает сегодня</Badge>
      case 'departing-today':
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">Выезжает сегодня</Badge>
      case 'checked-out':
        return <Badge variant="outline">Выехал</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const statusCounts = {
    'checked-in': guests.filter(g => g.status === 'checked-in').length,
    'arriving-today': guests.filter(g => g.status === 'arriving-today').length,
    'departing-today': guests.filter(g => g.status === 'departing-today').length,
    'checked-out': guests.filter(g => g.status === 'checked-out').length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Гости</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
          <Plus className="h-4 w-4 mr-2" />
          Добавить гостя
        </Button>
      </div>

      {/* Статистика */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Проживает</p>
                <p className="text-2xl font-bold text-primary">{statusCounts['checked-in']}</p>
              </div>
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Заезжает сегодня</p>
                <p className="text-2xl font-bold text-success">{statusCounts['arriving-today']}</p>
              </div>
              <Users className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Выезжает сегодня</p>
                <p className="text-2xl font-bold text-warning">{statusCounts['departing-today']}</p>
              </div>
              <UserX className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Всего гостей</p>
                <p className="text-2xl font-bold text-foreground">{guests.length}</p>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
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
                placeholder="Поиск по имени, email, телефону..." 
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="checked-in">Проживает</SelectItem>
                <SelectItem value="arriving-today">Заезжает сегодня</SelectItem>
                <SelectItem value="departing-today">Выезжает сегодня</SelectItem>
                <SelectItem value="checked-out">Выехал</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Номер" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все номера</SelectItem>
                <SelectItem value="101">101</SelectItem>
                <SelectItem value="102">102</SelectItem>
                <SelectItem value="201">201</SelectItem>
                <SelectItem value="305">305</SelectItem>
                <SelectItem value="401">401</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              Сбросить фильтры
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Список гостей */}
      <Card className="card-hotel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Список гостей
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {guests.map((guest) => (
              <div key={guest.id} className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{guest.name}</h3>
                        {guest.vip && (
                          <Badge className="bg-accent text-accent-foreground text-xs">VIP</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">ID: {guest.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {getStatusBadge(guest.status)}
                    <Button variant="outline" size="sm">
                      Редактировать
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{guest.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{guest.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{guest.nationality}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Номер: </span>
                      <span className="font-medium text-foreground">{guest.room}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Заезд: </span>
                      <span className="text-foreground">{guest.checkIn}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Выезд: </span>
                      <span className="text-foreground">{guest.checkOut}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Документ: </span>
                      <span className="text-foreground">{guest.document}</span>
                    </div>
                  </div>
                </div>

                {guest.status === 'arriving-today' && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                        <UserCheck className="h-4 w-4 mr-2" />
                        Заселить
                      </Button>
                      <Button variant="outline" size="sm">
                        Отменить бронь
                      </Button>
                    </div>
                  </div>
                )}

                {guest.status === 'checked-in' && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button size="sm" variant="outline">
                      <UserX className="h-4 w-4 mr-2" />
                      Выселить
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Guests