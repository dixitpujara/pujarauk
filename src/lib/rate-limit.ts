/**
 * Simple fixed-window rate limiter held in memory.
 *
 * On serverless hosting each instance keeps its own counter, so this is a
 * best-effort brake against form spam rather than a hard guarantee. For a
 * durable limit, swap `store` for Upstash Redis or Vercel KV; the interface
 * below is the only thing that needs to change.
 */
type Bucket = { count: number; resetAt: number };
const store = new Map<string, Bucket>();

export type RateLimitResult = { allowed: boolean; remaining: number; retryAfterSeconds: number };

export function rateLimit(key: string, limit: number, windowSeconds: number): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);
  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowSeconds * 1000 });
    pruneExpired(now);
    return { allowed: true, remaining: limit - 1, retryAfterSeconds: 0 };
  }
  if (existing.count >= limit) {
    return { allowed: false, remaining: 0, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) };
  }
  existing.count += 1;
  return { allowed: true, remaining: limit - existing.count, retryAfterSeconds: 0 };
}

function pruneExpired(now: number) {
  if (store.size < 500) return;
  for (const [k, v] of store) if (v.resetAt <= now) store.delete(k);
}
