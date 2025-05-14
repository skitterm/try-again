To reproduce the issue:

1. Run `npm install`
1. Observe that Storybook (standalone) is still on `8.6.12`, whereas Storybook (via `@chromatic-com/playwright`)'s storybook is on `9.0.0-rc.0`
1. Attempt to upgrade Storybook (standalone)'s to 9.x (`npx storybook@next upgrade`)
1. Observe the upgrade indicates it's upgrading from `8.6.12` to `8.6.12` (the command fails later due to incompatible peer dependencies due to `@chromatic-com/playwright` being a canary version, but that's a red herring)
