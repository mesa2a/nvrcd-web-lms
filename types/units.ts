import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import { Module } from "./modules";

export type Unit = {
    level?: number;
    name?: string;
    archievement?: string;
    module?:  (MicroCMSListContent & Module) | null;
    description?: string;
    
  };