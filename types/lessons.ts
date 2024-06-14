import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import { Module } from "./modules";
import { Unit } from "./units";

export type Lesson = {
  level?: number;
  name?: string;
  description?: string;
  unit?: (MicroCMSListContent & Unit) | null;
  module?: (MicroCMSListContent & Module) | null;
  archevement?: string;
  content?: string;
};