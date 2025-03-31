import {useEffect, useReducer} from "react";
import {useDispatch} from "react-redux";


import {sampleAction} from "src/features/sample/sampleReducer.jsx";
import {useNavigate} from "react-router";
import {Button} from "src/shared/components/lib/shadcn/components/ui/button.jsx";
import {toast} from "react-toastify";



const Sample = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        dispatch(sampleAction.getPokemon())
    }, []);


    const notify = () => toast('Wow so easy !');

    return (
        <div>
            <Button onClick={notify}>Notify !</Button>
            cccccccccccccccccc
            <Button
            onClick={() => navigate("/", {state: {asd:123414}})}
            >asdasd</Button>
        </div>
    );
};

export default Sample;