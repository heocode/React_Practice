import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, LogOut, Menu, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `text-sm transition-colors ${
            isActive
                ? "text-purple-500"
                : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
        }`;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 shrink-0">
                    <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                        Reweb
                    </span>
                </Link>

                {/* Right side — nav + theme + auth all together */}
                <div className="flex items-center gap-1">

                    {/* Nav links */}
                    <nav className="hidden md:flex items-center mr-2">
                        <NavLink to="/pricing" className={({ isActive }) =>
                            `text-sm px-3 py-1.5 rounded-lg transition-colors ${
                                isActive
                                    ? "text-purple-500"
                                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            }`
                        }>
                            Pricing
                        </NavLink>
                        <NavLink to="/terms" className={({ isActive }) =>
                            `text-sm px-3 py-1.5 rounded-lg transition-colors ${
                                isActive
                                    ? "text-purple-500"
                                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                            }`
                        }>
                            Terms & Conditions
                        </NavLink>
                    </nav>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1" />

                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    {/* Auth */}
                    {user ? (
                        <div className="hidden md:flex items-center gap-2 ml-1">
                            <img
                                src={user.photoURL ?? ""}
                                alt={user.displayName ?? "User"}
                                className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700"
                            />
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                {user.displayName?.split(" ")[0]}
                            </span>
                            <button
                                onClick={logout}
                                className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors ml-1"
                            >
                                <LogOut size={15} />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center gap-1 ml-1">
                            <Link
                                to="/login"
                                state={{ from: location.pathname }}
                                className="text-sm px-3 py-1.5 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                state={{ from: location.pathname }}
                                className="text-sm px-4 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors font-medium"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        className="md:hidden p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 flex flex-col gap-4">
                    <NavLink to="/pricing" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                        Pricing
                    </NavLink>
                    <NavLink to="/terms" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                        Terms & Conditions
                    </NavLink>
                    {user ? (
                        <button
                            onClick={() => { logout(); setMenuOpen(false); }}
                            className="text-sm text-left text-zinc-500 dark:text-zinc-400"
                        >
                            Logout
                        </button>
                    ) : (
                        <div className="flex items-center gap-4 pt-1">
                            <Link
                                to="/login"
                                state={{ from: location.pathname }}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-zinc-700 dark:text-zinc-300"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                state={{ from: location.pathname }}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm text-white bg-purple-500 px-4 py-1.5 rounded-lg"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}
