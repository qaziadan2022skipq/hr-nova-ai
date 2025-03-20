import { RxDashboard } from "react-icons/rx";
import { TbReportAnalytics } from "react-icons/tb";
import { PiFilesThin } from "react-icons/pi";
import { BsFileRichtext } from "react-icons/bs";
import { LuPersonStanding } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { PiBatteryVerticalLowThin } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { LuAirplay } from "react-icons/lu";
import { IoMdPaper } from "react-icons/io";

export const sidebarRoutes = [
  {
    label: "Dashboard",
    icon: RxDashboard,
    href: "/dashboard",
    color: "text-[#CC302F]",
  },
  {
    label: "Virtual Veteran’s Officer",
    icon: PiBatteryVerticalLowThin,
    href: "/virtual-vso",
    color: "text-[#CC302F]",
  },
  {
    label: "Claim Optimization Report",
    icon: TbReportAnalytics,
    href: "/claim-optimization-report",
    color: "text-[#CC302F]",
  },
  {
    label: "526-EZ Claim Optimizer",
    icon: PiFilesThin,
    href: "/526-EZ-claim-optimization",
    color: "text-[#CC302F]",
  },
  {
    label: "Nexus Statement Generator",
    icon: PiFilesThin,
    href: "/nexus-statement-generator",
    color: "text-[#CC302F]",
  },
  {
    label: "Personal Lay Statement",
    icon: BsFileRichtext,
    href: "/personal-lay-statement-generator",
    color: "text-[#CC302F]",
  },
  {
    label: "DBQ Assistant",
    icon: PiFilesThin,
    href: "/dbq-assistant",
    color: "text-[#CC302F]",
  },
  {
    label: "C and P Exam Simulation",
    icon: LuPersonStanding,
    href: "/c-and-p-exam-simulation",
    color: "text-[#CC302F]",
  },
  {
    label: "Denied Claims Assistant",
    icon: LuAirplay,
    href: "/ask-the-founder",
    color: "text-[#CC302F]",
  },
  {
    label: "Claim Success Tracker",
    icon: TbReportSearch,
    href: "/claim-success-tracker",
    color: "text-[#CC302F]",
  },
  {
    label: "Resume Builder",
    icon: IoMdPaper,
    href: "/resume-builder",
    color: "text-[#CC302F]",
  },
  {
    label: "Personal Details",
    icon: GoPerson,
    href: "/personal-details",
    color: "text-[#CC302F]",
  },
  {
    label: "Manage Subscription",
    icon: AiOutlineDollar,
    href: "/manage-subscription",
    color: "text-[#CC302F]",
  },
];
