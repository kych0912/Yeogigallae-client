#!/bin/sh

cd ../ 

# 초기화
rm -rf output                       

# 빌드
cd Front-End                        
npm run build                 

# 이동
mv dist ../output