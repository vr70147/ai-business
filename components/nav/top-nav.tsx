import React from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import ModeToggle from './mode-toggle';
import Image from 'next/image';
import Link from 'next/link';
import {
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { LayoutDashboard, Plus, LogIn } from 'lucide-react';

export default function TopNav() {
  return (
    <Menubar>
      <div className="flex-none">
        <MenubarMenu>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={50}
              height={50}
              className="hover:cursor-pointer"
            />
          </Link>
        </MenubarMenu>
      </div>
      <div className="flex flex-grow items-center justify-end gap-1">
        <MenubarMenu>
          <MenubarTrigger className="text-base font-normal">
            <Link href="/business/add">
              <span className="flex items-center">
                <Plus size={16} className="mr-2" />
                Add Business
              </span>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="text-base font-normal">
            <Link href="/dashboard">
              <span className="flex items-center">
                <LayoutDashboard size={16} className="mr-2" />
                <span>Dashboard</span>
              </span>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        <SignedOut>
          <span className="flex items-center">
            <LogIn size={16} className="mr-2" />
            <SignInButton />
          </span>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <MenubarMenu>
          <ModeToggle />
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
