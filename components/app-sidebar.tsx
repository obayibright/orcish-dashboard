"use client";

import * as React from "react";
import {
  IconAdjustmentsHorizontal,
  IconBook,
  IconCamera,
  IconCertificate,
  IconChartBar,
  IconClipboardText,
  IconDashboard,
  IconDatabase,
  IconDevicesQuestion,
  IconFile,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconLayoutDashboard,
  IconLineScan,
  IconListDetails,
  IconReport,
  IconSchool,
  IconSearch,
  IconSettings,
  IconUsers,
  IconVideo,
} from "@tabler/icons-react";

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconLayoutDashboard,
    },
    {
      title: "Modes",
      url: "#",
      icon: IconAdjustmentsHorizontal,
      isActive: true,
      items: [
        {
          title: "Study Mode",
          url: "#",
          icon: IconBook,
        },
        {
          title: "Practice Mode",
          url: "#",
          icon: IconLineScan,
        },
        {
          title: "Mock Exams",
          url: "#",
          icon: IconDevicesQuestion,
        },
      ],
    },
    {
      title: "Courses",
      url: "#",
      icon: IconSchool,
    },
    {
      title: "Notes",
      url: "#",
      icon: IconFileDescription,
    },
    {
      title: "Assessments",
      url: "#",
      icon: IconClipboardText,
    },
    {
      title: "Certifications",
      url: "#",
      icon: IconCertificate,
    },
    {
      title: "Tutorials",
      url: "#",
      icon: IconVideo,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Resources",
      url: "#",
      icon: IconFile,
    },
    {
      name: "Community",
      url: "#",
      icon: IconUsers,
    },
    {
      name: "Integrations",
      url: "#",
      icon: IconDatabase,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">
                  Bito Learning App
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
