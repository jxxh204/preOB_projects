import { useRouter } from "../Router/Router";


function Root() {
    const router = useRouter()

    const onClickGoAbout = () =>{
        router.push("about")
    }

    return <div>
        "root component"
        <p>
            <button onClick={onClickGoAbout}>about</button>
        </p>
    </div>;
}

export default Root;