set -ex
curl -X POST https://cms.gdi.pojokan.io/sync/v1/sync -H 'Content-Type: application/json' -d '{"webConfig": "nginx.conf", "file": "artifact-staging.zip", "service": "cms-staging.service", "destination": "gdi-cms-staging", "bucket": "cms.gdi.pojokan.io","region": "ap-southeast-1"}'
