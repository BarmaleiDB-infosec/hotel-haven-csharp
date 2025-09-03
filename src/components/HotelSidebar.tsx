import { 
  LayoutDashboard, 
  CalendarDays, 
  BedDouble, 
  Users, 
  DollarSign, 
  UserCheck, 
  BarChart3, 
  Settings,
  Hotel
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarHeader,
} from "@/components/ui/sidebar"

const menuItems = [
  { title: "Панель управления", url: "/", icon: LayoutDashboard },
  { title: "Бронирования", url: "/bookings", icon: CalendarDays },
  { title: "Номера", url: "/rooms", icon: BedDouble },
  { title: "Гости", url: "/guests", icon: Users },
  { title: "Тарифы", url: "/rates", icon: DollarSign },
  { title: "Персонал", url: "/staff", icon: UserCheck },
  { title: "Отчёты", url: "/reports", icon: BarChart3 },
  { title: "Настройки", url: "/settings", icon: Settings },
]

export function HotelSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-primary font-medium" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground"

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hotel className="h-4 w-4" />
          </div>
          {state !== "collapsed" && (
            <div className="flex flex-col">
              <span className="font-semibold text-sidebar-foreground">Hotel Manager</span>
              <span className="text-xs text-sidebar-foreground/70">Система управления</span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Главное меню</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavCls}
                    >
                      <item.icon className="h-4 w-4" />
                      {state !== "collapsed" && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}