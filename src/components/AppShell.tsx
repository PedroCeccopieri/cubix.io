import { Link } from "@tanstack/react-router";
import { Boxes, Home, Info, Layers, Menu, Moon, Sun, TrendingUp, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Início", icon: Home, exact: true },
  { to: "/puzzles", label: "Puzzles", icon: Boxes, exact: false },
  { to: "/methods", label: "Métodos", icon: Layers, exact: false },
  { to: "/progress", label: "Meu progresso", icon: TrendingUp, exact: false },
  { to: "/sobre", label: "Sobre", icon: Info, exact: false },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 grid-cols-2 gap-[2px] rounded-lg bg-muted p-[3px] ring-1 ring-border">
        <span className="rounded-[2px]" style={{ backgroundColor: "var(--cube-red)" }} />
        <span className="rounded-[2px]" style={{ backgroundColor: "var(--cube-yellow)" }} />
        <span className="rounded-[2px]" style={{ backgroundColor: "var(--cube-blue)" }} />
        <span className="rounded-[2px]" style={{ backgroundColor: "var(--cube-green)" }} />
      </span>
      <span className="truncate font-display text-lg font-bold tracking-tight">CubeLab</span>
    </Link>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema"
      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-1">
      {nav.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          activeOptions={{ exact: item.exact }}
          activeProps={{ className: "bg-accent text-accent-foreground" }}
          inactiveProps={{ className: "text-muted-foreground hover:bg-muted hover:text-foreground" }}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
        >
          <item.icon className="h-4 w-4 shrink-0" />
          <span className="truncate">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:flex">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col justify-between border-r border-border bg-sidebar px-4 py-6 lg:flex">
        <div className="flex flex-col gap-8">
          <Logo />
          <NavLinks />
        </div>
        <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-3 py-2.5">
          <span className="truncate text-xs text-muted-foreground">Tema da interface</span>
          <ThemeToggle />
        </div>
      </aside>

      <header className="sticky top-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur lg:hidden">
        <Logo />
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
        {open && (
          <div className="col-span-2 pt-2">
            <NavLinks onNavigate={() => setOpen(false)} />
          </div>
        )}
      </header>

      <main className={cn("min-w-0 flex-1 pb-20 lg:pb-0")}>{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background/95 backdrop-blur lg:hidden">
        {nav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeOptions={{ exact: item.exact }}
            activeProps={{ className: "text-primary" }}
            inactiveProps={{ className: "text-muted-foreground" }}
            className="flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium"
          >
            <item.icon className="h-4 w-4" />
            <span className="truncate px-1">{item.label.split(" ")[0]}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-end gap-4 sm:flex sm:justify-between">
      <div className="min-w-0 fade-up">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        )}
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        {description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}
