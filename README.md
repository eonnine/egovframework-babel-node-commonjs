# -egovframework-babel-node-commonjs

전자정부프레임워크에서 es6문법을 사용하기 위해 세팅한 샘플프로젝트 두번째

requirejs-babel로 세팅한 첫번째 샘플프로젝트(https://github.com/eonnine/egovframework-babel-requirejs)와 다른 점.  
-첫번째 프로젝트는 런타임 상에서 문법 트랜스가 이루어지지만 해당 프로젝트는 빌드할 때 트랜스파일링되므로 효율이 더 좋음  
-첫번째 프로젝트는 node.js를 사용하줄 몰라도 되지만 해당 프로젝트는 node.js의 기본적인 사용법을 알고 있어야 함.  
  
<babel 설치>  
$ npm i -g babel-cli  
$ npm i -D babel-cli babel-preset-latest  
  
<파일 생성>  
-.babelrc  
 {  
  "presets": ["latest"]  
 }  
  
-package.json  
 "scripts": {  
  "build": "babel [es6_script_directory_path] -d [es5_script_directroy_path] -w",  
 }  
 
* [es6_script_directory_path]경로의 js파일들을 es5로 트랜스파일하여 [es5_script_directroy_path] 경로에 생성.   
* -d [es5_script_directroy_path] => [es5_script_directroy_path] 경로에 드랍  
* -w 파일 변경감지. [es6_script_directory_path]의 파일이 변경되면 실시간으로 트랜스파일하여 [es5_script_directroy_path]에 반영  
  
<실행>  
 package.json이 있는 경로로 이동하여 npm run build 실행  
