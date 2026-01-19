
// Added React import to provide access to React namespace types
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  headline: string;
  body: string;
  image: string;
  tag: string;
}

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  span?: string;
  image?: string;
}