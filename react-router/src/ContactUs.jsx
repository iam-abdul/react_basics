import { useParams, useSearchParams, useNavigate } from "react-router-dom";

const ContactUS = () => {
    const { location } = useParams();
    const [params] = useSearchParams();
    const navigate = useNavigate()

    const takeMeToHomePage = () => {

        navigate("about", {
            replace: true,
        })
    }
    console.log(params)
    return <div>
        Contact details of the location {location} and office {params.get("office")}:
        <button onClick={takeMeToHomePage}>Take me to home</button>
    </div>
}

export default ContactUS;