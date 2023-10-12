import { notFound } from 'next/navigation'
import DisabledPage from './pages/disabled'
import type { CacheExplorerCatchAllPageProps } from './router'
import CacheExplorerRouter from './router'

type Options = {
  mountPath?: string
  enabled?: boolean
  notFoundWhenDisabled?: boolean
}

export function mountCacheExplorer({
  enabled = process.env.NODE_ENV !== 'production' ||
    process.env.CACHE_EXPLORER === 'true',
  mountPath = '/cache-explorer',
  notFoundWhenDisabled = false,
}: Options = {}) {
  if (!enabled) {
    return notFoundWhenDisabled ? notFound : DisabledPage
  }
  return (props: Omit<CacheExplorerCatchAllPageProps, 'mountPath'>) =>
    CacheExplorerRouter({ mountPath, ...props })
}
