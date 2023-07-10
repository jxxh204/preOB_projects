# 프리온보딩 과제 2-3

## **Next.js로 마크다운 블로그 만들기(1/2)**

### **설명**

- 블로그를 만들기 위해 동적 라우팅을 사용합니다.
- 키워드는 getStaticProps, getStaticPaths 이 두가지 함수입니다.
- 이 두가지 함수는 동적라우팅을 사용하는 페이지 즉 [id].js, ts, tsx에 사용가능한 함수 입니다.

### **getStaticProps**

**설명**

- 서버에서 빌드하고 클라이언트에 내보내는 과정 중 빌드 전에 실행됩니다. 이 함수를 export할 경우 next.js는 빌드 시점에 getStaticProps가 반환한 프로퍼티를 사용하여 이 페이지를 미리 랜더링합니다.
- 해당 파일은 클라이언트의 전 즉 서버에서 실행되므로 fileSystem 접근이 가능합니다.
- [id].js의 id를 파라메터로 받을 수 있습니다.

**사용법**

1. id를 받고 path.join을 사용하여 해당 id와 값이 같은 마크다운 파일의 directory 주소를 찾아냅니다.

2. fileSystem과 찾아낸 주소를 사용하여 id.md 파일에 접근합니다.

3. gray-matter를 사용하여 ```title: 타이틀``` 형식의 md 파일을 ```{data:{title:"타이틀"}}``` 같은 마크다운 구문 트리로 변경합니다.

4. gray-matter로 만든 마크다운 구문 트리를 remark를 이용하여 마크다운으로 변경합니다.

5. remark-html을 이용하여 마크다운을 html로 변경합니다.

6. html을 toString 메소드를 이용하여 string으로 변경 후 출력합니다.

### **getStaticPaths**

- 동적 라우팅과 getStaticProps를 사용하는 경우 정적인 경로의 목록을 정의합니다.
- 현재 [id].js와 같은 동적 페이지에서 getStaticPaths를 export하면
- 지정된 모든 경로를 정적으로 미리 랜더링합니다.

### [id].tsx

- 해당 파일에 위의 함수들을 정의하면 파라메터로 getStaticProps에서 리턴한 toString(html)값을 받을 수 있습니다.
- 해당 값을 dangerouslySetInnerHTML로 파싱하여 다시 html로 보여주면 짜잔!