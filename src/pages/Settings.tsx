import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { 
  Settings as SettingsIcon, 
  Users, 
  Shield, 
  Bell,
  Hotel,
  CreditCard,
  Mail,
  Plus,
  Edit,
  Trash2
} from "lucide-react"

const Settings = () => {
  const users = [
    {
      id: "U001",
      name: "Елена Иванова",
      email: "elena.ivanova@hotel.com",
      role: "admin",
      department: "Управление",
      lastLogin: "2024-12-05 09:30",
      active: true
    },
    {
      id: "U002",
      name: "Анна Петрова",
      email: "anna.petrova@hotel.com",
      role: "manager",
      department: "Ресепшн",
      lastLogin: "2024-12-05 08:15",
      active: true
    },
    {
      id: "U003",
      name: "Михаил Сидоров",
      email: "mikhail.sidorov@hotel.com",
      role: "staff",
      department: "Хозяйственная служба",
      lastLogin: "2024-12-04 16:45",
      active: true
    },
    {
      id: "U004",
      name: "Дмитрий Козлов",
      email: "dmitry.kozlov@hotel.com",
      role: "staff",
      department: "Техническая служба",
      lastLogin: "2024-12-03 14:20",
      active: false
    }
  ]

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge variant="destructive">Администратор</Badge>
      case 'manager':
        return <Badge className="bg-primary-light text-primary-foreground">Менеджер</Badge>
      case 'staff':
        return <Badge variant="secondary">Сотрудник</Badge>
      default:
        return <Badge variant="outline">{role}</Badge>
    }
  }

  const hotelSettings = {
    name: "Гранд Отель",
    address: "г. Москва, ул. Тверская, д. 1",
    phone: "+7 (495) 123-45-67",
    email: "info@grandhotel.ru",
    website: "www.grandhotel.ru",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    currency: "RUB",
    timezone: "Europe/Moscow"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Настройки системы</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Основные настройки отеля */}
        <div className="lg:col-span-2">
          <Card className="card-hotel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hotel className="h-5 w-5 text-primary" />
                Настройки отеля
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="hotel-name">Название отеля</Label>
                  <Input id="hotel-name" defaultValue={hotelSettings.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hotel-phone">Телефон</Label>
                  <Input id="hotel-phone" defaultValue={hotelSettings.phone} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hotel-email">Email</Label>
                  <Input id="hotel-email" defaultValue={hotelSettings.email} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hotel-website">Веб-сайт</Label>
                  <Input id="hotel-website" defaultValue={hotelSettings.website} />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hotel-address">Адрес</Label>
                <Input id="hotel-address" defaultValue={hotelSettings.address} />
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="check-in">Время заезда</Label>
                  <Input id="check-in" type="time" defaultValue={hotelSettings.checkInTime} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="check-out">Время выезда</Label>
                  <Input id="check-out" type="time" defaultValue={hotelSettings.checkOutTime} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Валюта</Label>
                  <Select defaultValue={hotelSettings.currency}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="RUB">Рубль (₽)</SelectItem>
                      <SelectItem value="USD">Доллар ($)</SelectItem>
                      <SelectItem value="EUR">Евро (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Часовой пояс</Label>
                  <Select defaultValue={hotelSettings.timezone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Europe/Moscow">Москва</SelectItem>
                      <SelectItem value="Europe/Samara">Самара</SelectItem>
                      <SelectItem value="Asia/Yekaterinburg">Екатеринburg</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
                  Сохранить изменения
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Уведомления и интеграции */}
        <div className="space-y-6">
          <Card className="card-hotel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Уведомления
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email уведомления</Label>
                  <p className="text-sm text-muted-foreground">Новые бронирования</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>SMS уведомления</Label>
                  <p className="text-sm text-muted-foreground">Изменения броней</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push уведомления</Label>
                  <p className="text-sm text-muted-foreground">Срочные задачи</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="card-hotel">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                Интеграции
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Booking.com</Label>
                  <p className="text-sm text-muted-foreground">Синхронизация</p>
                </div>
                <Badge className="status-available">Активно</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>1C:Предприятие</Label>
                  <p className="text-sm text-muted-foreground">Учёт</p>
                </div>
                <Badge variant="outline">Отключено</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email рассылка</Label>
                  <p className="text-sm text-muted-foreground">Маркетинг</p>
                </div>
                <Badge variant="secondary">Настройка</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Управление пользователями */}
      <Card className="card-hotel">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Пользователи системы
            </CardTitle>
            <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
              <Plus className="h-4 w-4 mr-2" />
              Добавить пользователя
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{user.name}</h3>
                    {getRoleBadge(user.role)}
                    {!user.active && <Badge variant="destructive">Заблокирован</Badge>}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{user.email}</span>
                    <span>{user.department}</span>
                    <span>Последний вход: {user.lastLogin}</span>
                  </div>
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
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Безопасность */}
      <Card className="card-hotel">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Безопасность
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Двухфакторная аутентификация</Label>
                <p className="text-sm text-muted-foreground">Дополнительная защита аккаунтов</p>
              </div>
              <Switch />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Автоматический выход</Label>
                <p className="text-sm text-muted-foreground">После 30 минут неактивности</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Логирование действий</Label>
                <p className="text-sm text-muted-foreground">Запись всех операций</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Резервное копирование</Label>
                <p className="text-sm text-muted-foreground">Ежедневно в 3:00</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <div className="flex gap-4">
              <Button variant="outline">
                Экспорт данных пользователей
              </Button>
              <Button variant="outline">
                Журнал безопасности
              </Button>
              <Button variant="destructive">
                Сброс всех сессий
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Settings