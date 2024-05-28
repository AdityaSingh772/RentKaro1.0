// src/components/for adminDashboard/MainLayout.tsx
"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/for adminDashboard/Sidebar";
import InvoiceList from "@/components/for adminDashboard/InvoiceList";
import Header from "@/components/for adminDashboard/Header";
import OrdersAdmin from "@/components/for adminDashboard/Orders";
import RegisteredClient from "@/components/for adminDashboard/RegisteredClient";
import RegisteredCollege from "@/components/for adminDashboard/RegisteredCollege";
import { Product , User} from "@/components/for adminDashboard/invoice";




const MainLayout: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("InvoiceList");
  const [data, setData] = useState<Product[]>([]);
  const [client, setClient ] = useState<User[]>([]);


  const renderComponent = () => {
    switch (activeComponent) {
      case "InvoiceList":
        return <InvoiceList />;
      case "OrdersAdmin":
        return <OrdersAdmin products={data} />;
      case "RegisteredClient":
        return <RegisteredClient user={client}/>;
      case "RegisteredCollege":
        return <RegisteredCollege />;
      default:
        return <InvoiceList />;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchClient= async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin/client");
        setClient(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchClient();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 p-6">{renderComponent()}</main>
      </div>
    </div>
  );
};

export default MainLayout;
