import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  UserCheck, 
  Search, 
  Filter, 
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail
} from "lucide-react"

const Staff = () => {
  const staff = [
    {
      id: "ST001",
      name: "Анна Петрова",
      position: "Администратор",
      department: "Ресепшн",
      email: "anna.petrova@hotel.com",
      phone: "+7 (999) 111-22-33",
      shift: "Дневная смена",
      status: "working",
      experience: "3 года"
    },
    {
      id: "ST002",
      name: "Михаил Сидоров", 
      position: "Горничная",
      department: "Хозяйственная служба",
      email: "mikhail.sidorov@hotel.com",
      phone: "+7 (999) 222-33-44",
      shift: "Утренняя смена",
      status: "working",
      experience: "1 год"
    },
    {
      id: "ST003",
      name: "Елена Иванова",
      position: "Менеджер",
      department: "Управление",
      email: "elena.ivanova@hotel.com",
      phone: "+7 (999) 333-44-55",
      shift: "Полный день",
      status: "break",
      experience: "5 лет"
    },
    {
      id: "ST004",
      name: "Дмитрий Козлов",
      position: "Техник",
      department: "Техническая служба",
      email: "dmitry.kozlov@hotel.com",
      phone: "+7 (999) 444-55-66",
      shift: "Дневная смена",
      status: "off",
      experience: "2 года"
    }
  ]

  const tasks = [
    {
      id: "TS001",
      title: "Уборка номера 201",
      assignee: "Михаил Сидоров",
      priority: "high",
      status: "in-progress",
      dueTime: "12:00",
      room: "201"
    },
    {
      id: "TS002",
      title: "Ремонт кондиционера в номере 305",
      assignee: "Дмитрий Козлов", 
      priority: "urgent",
      status: "pending",
      dueTime: "14:00",
      room: "305"
    },
    {
      id: "TS003",
      title: "Замена постельного белья номер 102",
      assignee: "Михаил Сидоров",
      priority: "normal",
      status: "completed",
      dueTime: "10:00",
      room: "102"
    },
    {
      id: "TS004",
      title: "Проверка мини-бара номер 401",
      assignee: "Анна Петрова",
      priority: "low",
      status: "pending",
      dueTime: "16:00",
      room: "401"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'working':
        return <Badge className="status-available">На работе</Badge>
      case 'break':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300">Перерыв</Badge>
      case 'off':
        return <Badge variant="outline">Не работает</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getTaskStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="status-available">Выполнено</Badge>
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">В работе</Badge>
      case 'pending':
        return <Badge className="status-maintenance">Ожидает</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return <Badge variant="destructive">Срочно</Badge>
      case 'high':
        return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">Высокий</Badge>
      case 'normal':
        return <Badge variant="secondary">Обычный</Badge>
      case 'low':
        return <Badge variant="outline">Низкий</Badge>
      default:
        return <Badge variant="secondary">{priority}</Badge>
    }
  }

  const statusCounts = {
    working: staff.filter(s => s.status === 'working').length,
    break: staff.filter(s => s.status === 'break').length,
    off: staff.filter(s => s.status === 'off').length,
  }

  const taskStatusCounts = {
    pending: tasks.filter(t => t.status === 'pending').length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Персонал</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Новая задача
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary-dark">
            <Plus className="h-4 w-4 mr-2" />
            Добавить сотрудника
          </Button>
        </div>
      </div>

      {/* Статистика персонала */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">На работе</p>
                <p className="text-2xl font-bold text-success">{statusCounts.working}</p>
              </div>
              <UserCheck className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">На перерыве</p>
                <p className="text-2xl font-bold text-warning">{statusCounts.break}</p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Задач в работе</p>
                <p className="text-2xl font-bold text-primary">{taskStatusCounts.inProgress}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="card-hotel">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Выполнено сегодня</p>
                <p className="text-2xl font-bold text-foreground">{taskStatusCounts.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Список персонала */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-primary" />
              Сотрудники
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Поиск сотрудников..." 
                    className="pl-10"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="working">На работе</SelectItem>
                    <SelectItem value="break">Перерыв</SelectItem>
                    <SelectItem value="off">Не работает</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {staff.map((employee) => (
                <div key={employee.id} className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{employee.name}</h3>
                      <p className="text-sm text-muted-foreground">{employee.position} • {employee.department}</p>
                    </div>
                    {getStatusBadge(employee.status)}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{employee.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{employee.phone}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Смена: {employee.shift}</span>
                      <span className="text-muted-foreground">Опыт: {employee.experience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Задачи */}
        <Card className="card-hotel">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              Задачи и поручения
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="pending">Ожидает</SelectItem>
                    <SelectItem value="in-progress">В работе</SelectItem>
                    <SelectItem value="completed">Выполнено</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Приоритет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="urgent">Срочно</SelectItem>
                    <SelectItem value="high">Высокий</SelectItem>
                    <SelectItem value="normal">Обычный</SelectItem>
                    <SelectItem value="low">Низкий</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {tasks.map((task) => (
                <div key={task.id} className="p-4 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-foreground">{task.title}</h3>
                    <div className="flex gap-2">
                      {getPriorityBadge(task.priority)}
                      {getTaskStatusBadge(task.status)}
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Исполнитель: <span className="text-foreground">{task.assignee}</span></p>
                    <div className="flex items-center justify-between">
                      <span>Номер: {task.room}</span>
                      <span>До: {task.dueTime}</span>
                    </div>
                  </div>

                  {task.status === 'pending' && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary-dark">
                        Взять в работу
                      </Button>
                    </div>
                  )}

                  {task.status === 'in-progress' && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                        Завершить
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Staff