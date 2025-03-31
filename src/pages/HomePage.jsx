import {Button} from "src/shared/components/lib/shadcn/components/ui/button.jsx";
import {useNavigate} from "react-router";

const HomePage = () => {



    const navigate = useNavigate();
    return <div className={' h-full w-500'}>


        <Button
            onClick={() => {navigate('/sample/sample')}}
        >asdasdsa</Button>

    </div>
}

export default HomePage
