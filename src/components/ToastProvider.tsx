import { useState, createContext, ReactNode, useContext, useEffect, useRef } from "react";
import { Provider as RadixToastProvider, Toast, Title as ToastTitle, Description as ToastDescription, Viewport as ToastViewport } from "@radix-ui/react-toast";

interface ToastContextProps {
  showToast: (title: string, description: string) => void;
}

const ToastContext = createContext<ToastContextProps | null>(null);

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<{ id: string; title: string; description: string } | null>(null);
  const timerRef = useRef<number | null>(null);

  const showToast = (title: string, description: string) => {
    const id = Math.random().toString(36).substr(2, 9);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setToast({ id, title, description });

    timerRef.current = window.setTimeout(() => {
      setToast(null);
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      <RadixToastProvider swipeDirection="right">
        {toast && (
          <Toast className="fixed tablet:bottom-5 tablet:right-5 ml-5 mt-5 bg-[#202a3b] p-4 rounded-lg shadow-lg z-50 tablet:max-w-md">
            <ToastTitle className="font-bold text-lg text-white truncate">{toast.title}</ToastTitle>
            <ToastDescription className="text-sm text-white truncate">{toast.description}</ToastDescription>
          </Toast>
        )}
        <ToastViewport />
      </RadixToastProvider>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export { ToastProvider, useToast };
