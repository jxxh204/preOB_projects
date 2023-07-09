import fs from 'fs';
import path from "path"
import matter from 'gray-matter';
import {remark} from "remark"
import remarkHtml from 'remark-html';

const postPath = '/src/__posts'

export async function getPostData(id:string) { // id : md 파일 이름.
  console.log(id)
  const postsDirectory = path.join(process.cwd(), postPath);
    const fullPath = path.join(postsDirectory, `${id}.md`);
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(remarkHtml)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }
export function getAllPostIds() {
  // const dirPath = path.resolve(__dirname, postPath)
    const postsDirectory = path.join(process.cwd(), postPath);
    const fileNames = fs.readdirSync(postsDirectory); // 대상 디렉토리의 모든 파일을 들고옴.
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }
