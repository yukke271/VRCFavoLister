#!/bin/sh
rm -rf /tmp/nitro/worker-*
mkdir -p /app/${APPNAME}
cd /app/${APPNAME}
yarn install
yarn dev