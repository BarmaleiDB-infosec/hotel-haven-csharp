import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  BedDouble, 
  Search, 
  Filter, 
  Plus,
  Wifi,
  Tv,
  Bath,
  Car,
  Coffee
} from "lucide-react"

const Rooms = () => {
  const rooms = [
    {
      number: "101",
      type: "Стандарт",
      status: "available",
      guest: null,
      price: "₽8,500",
      amenities: ["wifi", "tv", "bath"],
      beds: 1,
      area: "25 м²"
    },
    {
      number: "102",
      type: "Стандарт",
      status: "occupied",
      guest: "Smith John",
      price: "₽8,500",
      amenities: ["wifi", "tv", "bath"],
      beds: 1,
      area: "25 м²"
    },
    {
      number: "201",
      type: "Делюкс",
      status: "occupied",
      guest: "Иванов И.И.",
      price: "₽12,000",
      amenities: ["wifi", "tv", "bath", "parking"],
      beds: 2,
      area: "35 м²"
    },
    {
      number: "202",
      type: "Делюкс",
      status: "cleaning",
      guest: null,
      price: "₽12,000",
      amenities: ["wifi", "tv", "bath", "parking"],
      beds: 2,
      area: "35 м²"
    },
    {
      number: "301",
      type: "Люкс",
      status: "maintenance",
      guest: null,
      price: "₽18,000",
      amenities: ["wifi", "tv", "bath", "parking", "minibar"],
      beds: 2,
      area: "50 м²"
    },
    {
      number: "305",
      type: "Люкс",
      status: "available",
      guest: null,
      price: "₽18,000",
      amenities: ["wifi", "tv", "bath", "parking", "minibar"],
      beds: 2,
      area: "50 м²"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge className="status-available">Свободен</Badge>
      case 'occupied':
        return <Badge className="status-occupied">Занят</Badge>
      case 'cleaning':
        return <Badge className="status-cleaning">Уборка</Badge>
      case 'maintenance':
        return <Badge className="status-maintenance">Ремонт</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <Wifi className="h-4 w-4" />
      case 'tv':
        return <Tv className="h-4 w-4" />
      case 'bath':
        return <Bath className="h-4 w-4" />
      case 'parking':
        return <Car className="h-4 w-4" />
      case 'minibar':
        return <Coffee className="h-4 w-4" />
      default:
        return null
    }
  }

  const statusCounts = {
    available: rooms.filter(r => r.status === 'available').length,
    occupied: rooms.filter(r => r.status === 'occupied').length,
    cleaning: rooms.filter(r => r.status === 'cleaning').length,
    maintenance: rooms.filter(r => r.status === 'maintenance').length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Номера</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
          <Plus className="h-4 w-4 mr-2" />
          Добавить номер
        </Button>
      </div>

      {/* Статистика */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Свободно</p>
                <p className="text-2xl font-bold text-success">{statusCounts.available}</p>
              </div>
              <BedDouble className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Занято</p>
                <p className="text-2xl font-bold text-destructive">{statusCounts.occupied}</p>
              </div>
              <BedDouble className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Уборка</p>
                <p className="text-2xl font-bold text-warning">{statusCounts.cleaning}</p>
              </div>
              <BedDouble className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Ремонт</p>
                <p className="text-2xl font-bold text-muted-foreground">{statusCounts.maintenance}</p>
              </div>
              <BedDouble className="h-8 w-8 text-muted-foreground" />
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
                placeholder="Поиск по номеру..." 
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="available">Свободен</SelectItem>
                <SelectItem value="occupied">Занят</SelectItem>
                <SelectItem value="cleaning">Уборка</SelectItem>
                <SelectItem value="maintenance">Ремонт</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Тип номера" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все типы</SelectItem>
                <SelectItem value="standard">Стандарт</SelectItem>
                <SelectItem value="deluxe">Делюкс</SelectItem>
                <SelectItem value="suite">Люкс</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              Сбросить фильтры
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Список номеров */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.number} className="card-hotel">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">№ {room.number}</CardTitle>
                {getStatusBadge(room.status)}
              </div>
              <p className="text-sm text-muted-foreground">{room.type} • {room.area}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {room.guest && (
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm text-muted-foreground">Гость</p>
                  <p className="font-medium text-foreground">{room.guest}</p>
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">{room.price}</span>
                <span className="text-sm text-muted-foreground">{room.beds} кровать{room.beds > 1 ? 'и' : 'ь'}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {room.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-1 px-2 py-1 rounded bg-secondary text-secondary-foreground">
                    {getAmenityIcon(amenity)}
                    <span className="text-xs capitalize">{amenity}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Редактировать
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary-dark"
                  disabled={room.status !== 'available'}
                >
                  {room.status === 'available' ? 'Забронировать' : 'Недоступно'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Rooms