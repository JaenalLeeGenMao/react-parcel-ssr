#! /bin/bash

# Set image name
REPOSITORY_ADDRESS="${REPOSITORY_HOST}/${GCLOUD_PROJECT_ID}/${CI_PROJECT_NAMESPACE}/${CI_PROJECT_NAME}"
IMAGE_NAME="${REPOSITORY_ADDRESS,,}:${CI_PIPELINE_IID}"

# Build Docker!
docker build \
  --tag $IMAGE_NAME \
  --build-arg REACT_APP_ENV \
  --build-arg NODE_ENV \
  --build-arg CDN_PATH \
  .

mkdir /temp-assets
container_id=$(docker create ${IMAGE_NAME})
docker cp $container_id:/app/dist/client/. /temp-assets/.
docker rm $container_id

# Auth gcloud
gcloud auth configure-docker --quiet

gsutil -m -h "Cache-Control:public,max-age=31556952" cp -r /temp-assets/* ${GCS_PATH}/assets/
gsutil -m -h "Cache-Control:public,max-age=31556952" cp -r src/assets/assets-global/* ${GCS_PATH}/assets-global/
rm -fr /temp-assets


# Push docker image
docker push $IMAGE_NAME
