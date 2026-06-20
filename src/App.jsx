import React, { useState } from 'react';
import { Autenticacion } from './components/Autenticacion';
import { PipelineVentas } from './components/PipelineVentas';
import { FormularioCotizacion } from './components/FormularioCotizacion';
import { CargaDocumentos } from './components/CargaDocumentos';
import { RegistroCliente } from './components/RegistroCliente';
import { DetalleClienteConsolidado } from './components/DetalleClienteConsolidado';
import { DashboardBAYRI } from './components/DashboardBAYRI';
import { GestionUsuarios } from './components/GestionUsuarios';

import { LayoutDashboard, Kanban, UserPlus, FolderOpen, ShieldAlert, LogOut, User } from 'lucide-react';

export default function App() {
  const [sesion, setSesion] = useState({ 
    email: 'desarrollador@bayri.com', 
    rol: 'ADMINISTRADOR', 
    token: 'jwt-mock-dev-token' 
  });
  
  const [seccionActiva, setSeccionActiva] = useState('dashboard');

  //const [sesion, setSesion] = useState(null);
  //const [seccionActiva, setSeccionActiva] = useState('dashboard');

  //if (!sesion) {
  //  return <Autenticacion onLoginSuccess={(user) => setSesion(user)} />;
  //}

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 flex antialiased selection:bg-blue-500/30">
      
      {/* MENÚ LATERAL: Glassmorphism Ultra Dark */}
      <aside className="w-66 bg-[#0d1222]/80 backdrop-blur-xl flex flex-col p-5 border-r border-slate-800/60 relative">
        {/* Luces decorativas sutiles en el menú */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        
        {/* Branding */}
        <div className="p-2 mb-8 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-lg shadow-blue-500/50" />
          <div>
            <h1 className="font-black text-white tracking-wider text-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              CRM BAYRI
            </h1>
            <span className="text-[9px] bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded-md uppercase tracking-wider mt-1 inline-block">
              {sesion.rol}
            </span>
          </div>
        </div>

        {/* Listado de Navegación */}
        <nav className="space-y-1.5 flex-1 text-xs font-semibold uppercase tracking-wider">
          <button
            onClick={() => setSeccionActiva('dashboard')}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all relative group ${
              seccionActiva === 'dashboard' 
                ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/5' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            <span>Dashboard</span>
            {seccionActiva === 'dashboard' && <div className="absolute right-3 w-1 h-4 bg-blue-500 rounded-full" />}
          </button>
          
          <button
            onClick={() => setSeccionActiva('pipeline')}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all relative group ${
              seccionActiva === 'pipeline' 
                ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/5' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <Kanban className="w-4 h-4 shrink-0" />
            <span>Pipeline Ventas</span>
            {seccionActiva === 'pipeline' && <div className="absolute right-3 w-1 h-4 bg-blue-500 rounded-full" />}
          </button>

          <button
            onClick={() => setSeccionActiva('registro')}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all relative group ${
              seccionActiva === 'registro' 
                ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/5' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <UserPlus className="w-4 h-4 shrink-0" />
            <span>Registrar Cliente</span>
          </button>

          <button
            onClick={() => setSeccionActiva('clientes')}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all relative group ${
              seccionActiva === 'clientes' 
                ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-600/5' 
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            <FolderOpen className="w-4 h-4 shrink-0" />
            <span>Expedientes</span>
          </button>

          {/* Opción Restringida para el Administrador */}
          {sesion.rol === 'ADMINISTRADOR' && (
            <button
              onClick={() => setSeccionActiva('admin_usuarios')}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all relative group ${
                seccionActiva === 'admin_usuarios' 
                  ? 'bg-red-500/10 text-red-400 border border-red-500/20 shadow-lg shadow-red-500/5' 
                  : 'text-slate-400 hover:text-red-400 hover:bg-red-950/20 border border-transparent'
              }`}
            >
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <span>Administración</span>
            </button>
          )}
        </nav>

        {/* Perfil del Operador y Botón Salir */}
        <div className="mt-auto pt-4 border-t border-slate-800/60 flex flex-col gap-3">
          <div className="flex items-center gap-3 px-2 py-1.5 rounded-lg bg-slate-900/40 border border-slate-800/30">
            <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
              <User className="w-3.5 h-3.5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-[11px] font-bold text-slate-300 truncate">{sesion.email}</p>
              <p className="text-[9px] text-slate-500 font-medium">Operador Activo</p>
            </div>
          </div>
          
          <button
            onClick={() => setSesion(null)}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-500 hover:text-red-400 hover:bg-red-950/20 text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* ÁREA CENTRAL PRINCIPAL: Espacio de Trabajo */}
      <main className="flex-1 p-8 overflow-y-auto max-h-screen relative bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(29,78,216,0.06),rgba(255,255,255,0))]">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {seccionActiva === 'dashboard' && <DashboardBAYRI />}
          {seccionActiva === 'pipeline' && <PipelineVentas />}
          {seccionActiva === 'registro' && <RegistroCliente />}
          
          {seccionActiva === 'clientes' && (
            <div className="space-y-8 animate-fadeIn">
              <DetalleClienteConsolidado />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormularioCotizacion idOportunidad="OP-772" ventaCerrada={false} />
                <CargaDocumentos idCliente="C-99" />
              </div>
            </div>
          )}
          
          {seccionActiva === 'admin_usuarios' && sesion.rol === 'ADMINISTRADOR' && (
            <div className="animate-fadeIn">
              <GestionUsuarios />
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}