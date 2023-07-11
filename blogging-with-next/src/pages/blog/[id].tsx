
import { getAllPostIds, getPostData } from '@/lib/post';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import RootLayout from '../../app/layout';

let cache:any = null;
export async function getStaticProps({ params }:ParamsType) {
  // 서버에서 빌드전에 실행된다.
  // props : id가 포함된 prams가 주어진다.
  // getStaticProps를 export할 경우 next.js는 빌드 시점에 getStaticProps가 
  // 반환한 프로퍼티를 사용하여 이 페이지를 미리 랜더링한다.

    if(params.id && cache) {
      if(cache.id === params.id) 
      return {
        props: {
          cache,
        },
      };
    }  

    const postData = await getPostData(params.id);
    if(!cache) cache = postData
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() { 
  // 동적 라우팅과 getStaticProps를 사용하는 경우 정적인 경로의 목록을 정의한다.
  // 현재 [].tsx와 같은 동적 페이지에서 getStaticPaths를 export하면
  // 지정된 모든 경로를 정적으로 미리 랜더링한다.
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}:PostDataType):ReactNode {
  const [post, setPost] = useState<DataType>()
  useEffect(() => {
    setPost(postData)}, [])


  const router = useRouter();
  const id = router.query.id
    return (        
      <RootLayout>
        <Head>
          <title>{post?.title}</title>
        </Head>
        <h1>{post?.title}</h1>
        <p>
        description : {post?.description}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post?.contentHtml }}></div>
      </RootLayout>
      )
  
}