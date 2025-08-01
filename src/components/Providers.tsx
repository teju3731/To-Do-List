'use client';

import { Provider } from 'react-redux';
import { store } from '@/lib/store';
import { Toaster } from 'react-hot-toast';
import { DarkModeProvider } from '@/lib/darkMode';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        {children}
        <Toaster 
          position="top-right" 
          toastOptions={{
            style: {
              background: 'var(--background)',
              color: 'var(--foreground)',
              border: '1px solid var(--border)',
            },
          }}
        />
      </Provider>
    </DarkModeProvider>
  );
} 