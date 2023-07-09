
import { getAllPostIds, getPostData } from '@/lib/post';
import RootLayout from '../../app/layout';
import Head from 'next/head';
import { ReactNode } from 'react';

type ParamsType = {
  params:{
    id:string
  }
}
type PostDataType = {
  postData:{
    title:string;
    id:string;
    data:any;
    contentHtml:any
  }
}
export async function getStaticProps({ params }:ParamsType) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({postData}:PostDataType):ReactNode {
    return (        
      <RootLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
        <h1>{postData.title}</h1>
        <br />
        {postData.id}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </RootLayout>
      )
  
}