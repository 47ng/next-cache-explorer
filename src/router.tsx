import { notFound } from 'next/navigation'
import React from 'react'
import { Layout } from './layout'
import DisabledPage from './pages/disabled'
import EntryPage from './pages/entry'
import IndexPage from './pages/index'
import TagPage from './pages/tag'

export type CacheExplorerCatchAllPageProps = {
  mountPath: string
  params: {
    slug: string[]
  }
}

export default async function CacheExplorerRouter({
  mountPath,
  params,
}: CacheExplorerCatchAllPageProps) {
  const path = (params.slug ?? []).join('/')
  if (path === '') {
    return (
      <Layout mountPath={mountPath}>
        <IndexPage mountPath={mountPath} />
      </Layout>
    )
  }
  if (path.startsWith('entry/')) {
    return (
      <Layout mountPath={mountPath}>
        <EntryPage
          mountPath={mountPath}
          params={{ id: path.slice('entry/'.length) }}
        />
      </Layout>
    )
  }
  if (path.startsWith('tag/')) {
    return (
      <Layout mountPath={mountPath}>
        <TagPage
          mountPath={mountPath}
          tag={decodeURIComponent(path.slice('tag/'.length))}
        />
      </Layout>
    )
  }
  if (path === 'disabled') {
    return <DisabledPage />
  }
  return notFound()
}
