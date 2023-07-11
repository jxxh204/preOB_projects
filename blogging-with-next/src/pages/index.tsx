import RootLayout from '@/app/layout';
import Link from 'next/link';
import { getAllPostData } from '../lib/post';
import { InferGetStaticPropsType } from 'next';

const buttonStyle = "border px-4 py-1 rounded-lg bg-slate-600 text-white hover:text-slate-600 hover:bg-white border-slate-600 transition-all "

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if(posts.length !== 0);
  const postList = posts.map((post) => {
        <div><Link key={post.id} className={buttonStyle} href={`blog/test`}>{post.title}</Link></div>
    });
console.log(postList,posts)
    return (
        <RootLayout>
            <div className="text-lg flex flex-col justify-center items-center gap-2">
                hello Blog
              {postList}
            </div>
        </RootLayout>
    );
}

export async function getStaticProps() {
  const posts = getAllPostData() as DataType[]
      return {
        props: {
          posts
        },
      };
    }
export default Home