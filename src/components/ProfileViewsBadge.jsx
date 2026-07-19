import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { supabase } from '../lib/supabase';

const STORAGE_KEY = 'portfolio_pv_seen';   
const FALLBACK_COUNT = 1037;                 
const TABLE = 'profile_views';
const ROW_ID = 1;


function useAnimatedCount(target) {
  const motionVal = useMotionValue(target ?? 0);
  const rounded   = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    if (target === null) return;
    const controls = animate(motionVal, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [target, motionVal]);

  return rounded;
}

export default function ProfileViewsBadge({ variants }) {
  const [count,   setCount]   = useState(null); 
  const [status,  setStatus]  = useState('loading'); 
  const hasFetched = useRef(false);

  const animatedCount = useAnimatedCount(status === 'ok' ? count : null);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const run = async () => {
      try {
        const alreadySeen = localStorage.getItem(STORAGE_KEY);

        let finalCount;

        if (!alreadySeen) {
          const { data, error } = await supabase.rpc('increment_profile_views');
          if (error) throw error;
          finalCount = data;
          localStorage.setItem(STORAGE_KEY, 'true');
        } else {
     
          const { data, error } = await supabase
            .from(TABLE)
            .select('count')
            .eq('id', ROW_ID)
            .single();
          if (error) throw error;
          finalCount = data.count;
        }

        setCount(finalCount);
        setStatus('ok');
      } catch (err) {
        console.warn('[ProfileViewsBadge] fetch failed:', err.message);
        setStatus('error');
      }
    };

    run();
  }, []);
  const label = (() => {
    if (status === 'loading') return '— Profile Views';
    if (status === 'error')   return `${FALLBACK_COUNT.toLocaleString()}+ Profile Views`;
    return null; 
  })();

  return (
    <motion.div variants={variants}>
      <div
        className={[
          'inline-flex items-center gap-2 px-4 py-2 rounded-full',
          'border border-[var(--c-hero-views-border)] bg-[var(--c-hero-views-bg)] hero-mono',
          'transition-opacity duration-300',
          status === 'loading' ? 'opacity-60' : 'opacity-100',
        ].join(' ')}
        style={{
          fontSize: '11px',
          color: 'var(--c-hero-views-text)',
          letterSpacing: '0.05em',
        }}
        aria-label={label ?? `${count?.toLocaleString()} Profile Views`}
        aria-live="polite"
        aria-atomic="true"
      >
        <EyeIcon loading={status === 'loading'} />

        {status === 'loading' && (
          <span
            className="inline-block h-[10px] w-16 rounded-sm animate-pulse"
            style={{ background: 'var(--c-hero-views-skeleton)' }}
            aria-hidden="true"
          />
        )}
        {status === 'ok' && (
          <motion.span>
            <motion.span>{animatedCount}</motion.span>
            {' Profile Views'}
          </motion.span>
        )}

        {status === 'error' && (
          <span>{FALLBACK_COUNT.toLocaleString()}+ Profile Views</span>
        )}
      </div>
    </motion.div>
  );
}
function EyeIcon({ loading }) {
  return (
    <motion.svg
      viewBox="0 0 16 16"
      className="w-3.5 h-3.5 fill-current opacity-60 shrink-0"
      animate={loading ? { opacity: [0.4, 0.8, 0.4] } : { opacity: 0.6 }}
      transition={loading ? { repeat: Infinity, duration: 1.5, ease: 'easeInOut' } : {}}
      aria-hidden="true"
    >
      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0z" />
    </motion.svg>
  );
}