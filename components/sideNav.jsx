'use client'

import React, { useState } from 'react'
import { RxDashboard } from "react-icons/rx";
import { FiLayout } from "react-icons/fi";
import { SiReacthookform } from "react-icons/si";
import { BsBarChart } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaTableCellsLarge } from "react-icons/fa6";
import { IoMdContract } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { TiDocumentText } from "react-icons/ti";
import { FaBook } from "react-icons/fa";
import { PiUsersThreeDuotone } from "react-icons/pi";
import Link from 'next/link';
import { Button } from './ui/button';
import { ClipboardList, UserCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

const SideNavbar = ({ isOpen }) => {
    const router=useRouter()
    const { authUser } = useAuth();
    const menu = [
        {
            id: 1,
            name: 'Dashboard',
            route: 'dashboard',
            icon: RxDashboard,
        },
        {
            id: 2,
            name: 'Study Material',
            route: 'study-material',
            icon: FaBook
        },
        {
            id: 3,
            name: 'Courses',
            route: 'courses',
            icon: FaBook
        },
        {
            id: 4,
            name: 'My Courses',
            route: 'my-courses',
            icon:  ClipboardList
        },
        {
            id: 5,
            name: 'Find a StudyMate',
            route: 'find-studymate',
            icon: PiUsersThreeDuotone
        },
        {
            id: 6,
            name: 'My Profile',
            route: 'profile',
            icon: UserCircle
        },
       
    ];
    const admin_menu = [
        {
            id: 1,
            name: 'Dashboard',
            route: 'admin-dashboard',
            icon: RxDashboard,
        },
        {
            id: 2,
            name: 'Add Study Material',
            route: 'study-material',
            icon: FaBook
        },
        {
            id: 3,
            name: 'Courses',
            route: 'add-courses',
            icon: FaBook
        },
        {
            id: 4,
            name: 'Find a StudyMate',
            route: 'find-studymate',
            icon: PiUsersThreeDuotone
        },
        {
            id: 5,
            name: 'My Profile',
            route: 'profile',
            icon: UserCircle
        },
       
    ];

    const renderMenu = authUser?.role === 'admin' ? admin_menu : menu;

    return (
        <aside className={`dark:bg-gray-900 bg-white h-full fixed border-2 top-20 b order-2 left-0 transform mr-12  ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-72 z-10`}>
            <div className="flex flex-col gap-4 px-4 py-3 ">
                {renderMenu.map((item, index) => (
                    <>
                    <Button onClick={()=>{router.push(`/${item.route}`)}} key={item.id} className={`flex items-center gap-3 p-2 cursor-pointer bg-transparent dark:text-white text-black hover:bg-purple-600 hover:text-white shadow-none rounded-md font-semibold`}>
                        <item.icon size={20} />
                        <span>{item.name}</span>
                        <IoIosArrowForward className="ml-auto"/>
                    </Button>
                    <hr/>
                    </>
                ))}
            </div>
        </aside>
    )
}

export default SideNavbar