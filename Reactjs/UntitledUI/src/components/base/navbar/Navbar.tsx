import { HeaderNavigationBase } from "@/components/application/app-navigation/header-navigation";

const simpleItems = [
    { label: "Home", href: "/" },
    { label: "AboutUs", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Tasks", href: "/tasks" },
    { label: "Reporting", href: "/reporting" },
    { label: "Users", href: "/users" },
];

const subItems = [
    { label: "Overview", href: "/dashboard/overview" },
    { label: "Notifications", href: "/dashboard/notifications" },
    { label: "Analytics", href: "/dashboard/analytics" },
    { label: "Saved reports", href: "/dashboard/saved-reports" },
    { label: "Scheduled reports", href: "/dashboard/scheduled-reports" },
    { label: "User reports", href: "/dashboard/user-reports" },
];

export const Navbar = () => <HeaderNavigationBase activeUrl="/about" items={simpleItems} />;