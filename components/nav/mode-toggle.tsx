'use client';
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

export default function ModeToggle() {
  const [mounted, setMounted] = React.useState(false);

  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="link"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}
