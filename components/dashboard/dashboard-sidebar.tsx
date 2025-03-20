"use client";

import { sidebarRoutes } from "@/constants/dashboard/dashboard";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const monserrat = Poppins({ weight: "600", subsets: ["latin"] });

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-6 py-3 flex flex-col h-full bg-[#F8F8F8] text-white drop-shadow-xl">
      <div className="flex flex-col gap-y-2 py-1">
        <Link
          href="/dashboard"
          className="flex justify-center mt-6 mb-2 text-xl font-bold"
        >
          <Image
            src={"/main-logo.png"}
            width={120}
            height={120}
            alt="mainlogo"
          />
        </Link>
        <div id="scroll" className="flex flex-col mt-8 gap-y-2 overflow-y-auto overflow-hidden max-h-[71vh]">
          {sidebarRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "flex text-sm group p-2 w-full justify-start font-medium cursor-pointer hover:font-semibold transition",
                pathname === route.href
                  ? "text-[#CC302F] border-l-4 border-[#CC302F] "
                  : "text-[#919191CC]"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    pathname === route.href
                      ? "text-[#CC302F] "
                      : "text-[#919191CC]"
                  )}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
