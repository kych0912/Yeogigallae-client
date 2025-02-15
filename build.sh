#!/bin/sh

# 빌드             
npm run build                 

# ouput 폴더 없을 시 생성
mkdir -p ../output

# 이동
mv dist ../output