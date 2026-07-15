/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Wind, Phone, Menu, X, MapPin, Wrench, Activity } from "lucide-react";
import { PHONE_TEL_HREF, PHONE_DISPLAY } from "../data/phone";

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
}

export default function Navbar({ currentTab, setTab }: NavbarProps) {
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
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
            id="nav-logo"
          >
            <div className="bg-sky-600 text-white p-2 rounded-xl group-hover:bg-sky-500 transition-colors shadow-md shadow-sky-600/20">
              <Wind className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                get<span className="text-sky-600 font-extrabold">acrepair</span>
              </span>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">USA AC Services</p>
            </div>
          </div>

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
                      ? "bg-sky-50 text-sky-700 shadow-inner" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-4" id="nav-actions">
            <a 
              href={PHONE_TEL_HREF}
              className="flex items-center space-x-2 text-sky-700 hover:text-sky-600 font-mono text-sm font-bold bg-sky-50 px-5 py-2.5 border border-sky-200 rounded-xl transition-colors"
              id="call-hotline"
            >
              <Phone className="h-4 w-4" />
              <span>CALL NOW: {PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <a 
              href={PHONE_TEL_HREF}
              className="p-2 text-sky-600 hover:text-sky-500 bg-sky-50 rounded-xl border border-sky-100"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-expanded="false"
              id="btn-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-3 px-4 space-y-2 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive 
                    ? "bg-sky-50 text-sky-700 border-l-4 border-sky-600 pl-3" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-4 border-t border-slate-200 flex flex-col space-y-2">
            <a 
              href={PHONE_TEL_HREF}
              className="flex items-center justify-center space-x-2 text-sky-700 font-mono py-3 rounded-xl bg-sky-50 border border-sky-200 font-bold"
            >
              <Phone className="h-4 w-4" />
              <span>CALL NOW: {PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
