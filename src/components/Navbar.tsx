/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Wind, Phone, Menu, X, Calendar, Activity, MapPin, Wrench } from "lucide-react";

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ currentTab, setTab, onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Wind },
    { id: "services", label: "Our Services", icon: Wrench },
    { id: "diagnostics", label: "AC Diagnostics", icon: Activity },
    { id: "directory", label: "States Directory", icon: MapPin }
  ];

  const handleNavClick = (tabId: string) => {
    setTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 shadow-xl" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
            id="nav-logo"
          >
            <div className="bg-sky-500 text-white p-2 rounded-xl group-hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20">
              <Wind className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                AERO<span className="text-sky-400 font-extrabold">NATION</span>
              </span>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">USA AC Services</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1" id="nav-desktop-links">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-item-${item.id}`}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-slate-800 text-sky-400 shadow-inner" 
                      : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Emergency Booking & Phone Section */}
          <div className="hidden lg:flex items-center space-x-4" id="nav-actions">
            <a 
              href="tel:13802270861" 
              className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 font-mono text-sm font-bold bg-sky-950/40 px-5 py-2.5 border border-sky-800/40 rounded-xl animate-pulse"
              id="call-hotline"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>CALL NOW: 13802270861</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <a 
              href="tel:13802270861" 
              className="p-2 text-sky-400 hover:text-sky-300 bg-slate-800 rounded-xl"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-expanded="false"
              id="btn-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 py-3 px-4 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive 
                    ? "bg-sky-500/10 text-sky-400 border-l-4 border-sky-500 pl-3" 
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
            <a 
              href="tel:13802270861" 
              className="flex items-center justify-center space-x-2 text-sky-400 font-mono py-3 rounded-xl bg-sky-950/30 border border-sky-900/30 font-bold animate-pulse"
            >
              <Phone className="h-4 w-4 animate-bounce" />
              <span>CALL NOW: 13802270861</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
