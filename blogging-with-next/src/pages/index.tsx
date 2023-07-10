import RootLayout from '@/app/layout';
import Link from 'next/link';
import { getAllPostIds } from '../lib/post';

const buttonStyle = "border px-4 py-1 rounded-lg bg-slate-600 text-white hover:text-slate-600 hover:bg-white border-slate-600 transition-all "

function Home() {
    return (
        <RootLayout>
            <div className="text-lg flex flex-col justify-center items-center gap-2">
                hello Blog
                    <Link className={buttonStyle} href={`test`}>test</Link>
                    <Link className={buttonStyle} href={`blog1`}>blog1</Link>
                    <Link className={buttonStyle} href={`blog2`}>blog2</Link>
            </div>
        </RootLayout>
    );
}
export default Home