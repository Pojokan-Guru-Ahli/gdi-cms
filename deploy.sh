set -ex
curl -X POST https://cms.gdi.pojokan.io/sync/v1/sync -H 'Content-Type: application/json' -d '{"webConfig": "nginx.conf", "file": "artifact.zip", "service": "cms.service", "destination": "gdi-cms", "bucket": "cms.gdi.pojokan.io","region": "ap-southeast-1"}'
