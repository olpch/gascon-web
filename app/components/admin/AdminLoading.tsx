"use client";

import { useAdminContext } from "@/app/providers/admin-context";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AdminLoading() {

  const { isAdminLoading } = useAdminContext();


  return (
    <>
      {isAdminLoading && (
        <div className="
          flex flex-col h-[100vh] items-center justify-center
          gap-1 bg-slate-950/85 overflow-hidden
          absolute top-0 left-0 right-0 bottom-0 z-50
          " >
          <div
            className="loading-logo h-24 w-24
            rounded-full border border-[#3C3C3C]/20 
            flex items-center justify-center">
          </div>
          <p className="tracking-[.6em] 
            text-white
          animate-pulse uppercase text-sm font-semibold my-3">
            Procesando ...
          </p>
        </div>
      )}
    </>
  );

}
