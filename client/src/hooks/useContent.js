import { useEffect, useState } from 'react';
import axios from 'axios';
import { fallbackContent } from '../data/fallback';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function useContent() {
  const [content, setContent] = useState(fallbackContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/content`, { timeout: 4000 });
        if (!cancelled && data) {
          // Объединяем — полученные поля имеют приоритет, остальное из fallback
          setContent({ ...fallbackContent, ...data });
        }
      } catch (err) {
        console.warn('⚠️ Backend недоступен — использую fallback-данные');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return { content, loading };
}
