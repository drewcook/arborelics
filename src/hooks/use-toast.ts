'use client';

import { useState, useEffect } from 'react';

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

// Global toast state
let globalToasts: Toast[] = [];
let listeners: Array<(toasts: Toast[]) => void> = [];

// Notify all listeners when toasts change
function notifyListeners() {
  listeners.forEach(listener => listener([...globalToasts]));
}

// Add a toast
function addToast({ title, description, variant = 'default' }: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).substr(2, 9);
  const newToast: Toast = { id, title, description, variant };

  globalToasts = [...globalToasts, newToast];
  notifyListeners();

  // Auto remove after 5 seconds
  setTimeout(() => {
    globalToasts = globalToasts.filter(t => t.id !== id);
    notifyListeners();
  }, 5000);
}

// Remove a toast
function removeToast(id: string) {
  globalToasts = globalToasts.filter(t => t.id !== id);
  notifyListeners();
}

// Hook for components to use toasts
export function useToast() {
  return {
    toast: addToast,
    dismiss: removeToast
  };
}

// Hook for the toaster component to listen to changes
export function useToastState() {
  const [toasts, setToasts] = useState<Toast[]>(globalToasts);

  useEffect(() => {
    const listener = (newToasts: Toast[]) => setToasts(newToasts);
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  return {
    toasts,
    dismiss: removeToast
  };
}