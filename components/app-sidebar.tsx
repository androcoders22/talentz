"use client";

import * as React from "react";
import {
  IconLayoutDashboard,
  IconArticle,
  IconLogout,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconLayoutDashboard,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: IconArticle,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    toast.success("Logged out successfully");
    router.push("/dashboard-login");
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader className="p-4 flex  justify-start">
        <Image
          src="/logo-old.png"
          alt="Talentz Admin"
          width={180}
          height={60}
          className="object-contain"
          priority
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="text-[15.5px] [&>svg]:size-4.5 py-2.5 transition-colors duration-200"
                    render={
                      <a href={item.url}>
                        <item.icon stroke={2} />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    }
                  />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 hover:bg-red-50 text-[15.5px] [&>svg]:size-4.5 py-2.5 transition-colors duration-200"
            >
              <IconLogout stroke={2} />
              <span className="font-medium">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
