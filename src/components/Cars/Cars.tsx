import {FC} from "react";

import {useAppSelector} from "../../hook";



const Cars: FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    return (
        <div>

        </div>
    );
};

export {Cars};