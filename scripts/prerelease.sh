#!/bin/zsh

yarn version --prerelease --no-git-tag-version && cd projects/ngx-katex && yarn version --prerelease --no-git-tag-version && cd ../../ && ng build --project ngx-katex --configuration production && cd dist/ngx-katex && npm publish --tag next && cd ../../
