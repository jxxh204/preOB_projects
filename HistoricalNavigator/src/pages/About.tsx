import { useRouter } from '../Router/Router';
function About() {
    const router = useRouter()

    const onClickGoRoot = () =>{
        router.push("/")
    }
    return <>
    "about page"
    <p>
        <button onClick={onClickGoRoot}>Root</button>
    </p>
    </>;
}

export default About;