import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {sampleAction} from "src/features/sample/sampleReducer.jsx";

const Sample = () => {

    const dispatch = useDispatch();


    useEffect(() => {
        console.log(sampleAction);
        dispatch(sampleAction.getPokemon())
    }, []);


    return (
        <div>
            cccccccccccccccccc
        </div>
    );
};

export default Sample;