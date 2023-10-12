<h1 align="center"><code>next-cache-explorer</code></h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/next-cache-explorer?color=red)](https://www.npmjs.com/package/next-cache-explorer)
[![MIT License](https://img.shields.io/github/license/47ng/next-cache-explorer.svg?color=blue)](https://github.com/47ng/next-cache-explorer/blob/next/LICENSE)
[![CI/CD](https://github.com/47ng/next-cache-explorer/workflows/CI%2FCD/badge.svg?branch=next)](https://github.com/47ng/next-cache-explorer/actions)
[![Coverage Status](https://coveralls.io/repos/github/47ng/next-cache-explorer/badge.svg?branch=next)](https://coveralls.io/github/47ng/next-cache-explorer?branch=next)

</div>

<p align="center">
  Navigate & debug the Next.js data cache
</p>

## Installation

1. Install the dependency:

> Note: requires Next.js 13.4+ with the `app` router.

```shell
pnpm add next-cache-explorer
yarn add next-cache-explorer
npm i next-cache-explorer
```

2. Add the following file to your Next.js app:

```tsx
// src/app/cache-explorer/[[...slug]]/page.tsx

import { mountCacheExplorer } from 'next-cache-explorer'

export const dynamic = 'force-dynamic'

export default mountCacheExplorer()
```

3. Start your app and navigate to the `/cache-explorer` page.

## Usage

### Index page

> // todo: Add screenshot

Shows a list of all cache entries. Click an entry to see its details.

### Tags page

> // todo: Add screenshot

Shows a list of all entries for a given tag.

### Entry page

> // todo: Add screenshot

Shows the details of a single cache entry.

## Options

### Mount path

You can choose to place the cache explorer at a different path. The main page
will still need to be under `[[...slug]]/page.tsx`, but if you place it in
another base path, you'll need to configure it:

```tsx
// src/app/admin/cache-explorer/[[...slug]]/page.tsx

export default mountCacheExplorer({
  mountPath: '/admin/cache-explorer',
})
```

### Running in production

By default, the cache explorer will only be available in development mode.
To enable it in production, you can set the `CACHE_EXPLORER` environment variable
to `true`.

You can also enable it programmatically:

```ts
export default mountCacheExplorer({
  enabled: true,
})
```

## License

[MIT](https://github.com/47ng/next-cache-explorer/blob/next/LICENSE) - Made with ❤️ by [François Best](https://francoisbest.com)

Using this package at work ? [Sponsor me](https://github.com/sponsors/franky47) to help with support and maintenance.

This package is signed with [`sceau`](https://github.com/47ng/sceau), under the following associated public key:

```shell
sceau verify --publicKey 380db0ad0ccf92c3bcffc065b614515dd260cf291ed301a9f6ae550f6419f3c7
```
