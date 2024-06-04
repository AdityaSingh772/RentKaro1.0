"use client"

import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/for adminDashboard/Sidebar";
import InvoiceList from "@/components/for adminDashboard/InvoiceList";
import Header from "@/components/for adminDashboard/Header";
import OrdersAdmin from "@/components/for adminDashboard/Orders";
import RegisteredClient from "@/components/for adminDashboard/RegisteredClient";
import RegisteredCollege from "@/components/for adminDashboard/RegisteredCollege";
import { Order, Product, User } from "@/components/for adminDashboard/invoice";
import OnthewayOrders from "@/components/for adminDashboard/OnthewayOrders";


const MainLayout: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("InvoiceList");
  const [data, setData] = useState<Product[]>([]);
  const [client, setClient] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<Order[]>([]);


  const renderComponent = () => {
    switch (activeComponent) {
      // case "InvoiceList":
      //   return <InvoiceList />;
      case "OrdersAdmin":
        return <OrdersAdmin products={data} />;
      case "OnthewayOrders":
        return <OnthewayOrders orders = {order}/>
      case "RegisteredClient":
        return <RegisteredClient user={client} />;
      case "RegisteredCollege":
        return <RegisteredCollege  />;
      default:
        return <OrdersAdmin products={data}/>;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/items`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/clients`);
        setClient(response.data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };
    fetchClient();
  }, []);


  useEffect(()=>{
        const fetchOrders = async() => {
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/demand`);
            setOrder(response.data);
          } catch (error) {
            console.error("Error fetching order :", error);
          }
        };
        fetchOrders();
  }, [])

  
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 p-6">
          {error ? <div className="text-red-500">{error}</div> : renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
