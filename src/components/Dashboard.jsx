
import React from 'react';
import Organization from './pages/Organization';
import Doner from './pages/Doner';
import Admin from './pages/admin';
import Navbar from './Navbar';
import { Outlet } from 'react-router';

const  Dashboard =()=> {
  return (
      <>
        <div className="min-h-screen text-gray-50 bg-gray-50 flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-4">
            <h1 className="text-2xl font-bold text-teal-700 mb-8">Dashboard</h1>
            <Navbar/>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-10">
            
            <Outlet/>

          </main>
        </div>
      </>
      );
}



export default Dashboard



