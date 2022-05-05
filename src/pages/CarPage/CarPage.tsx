import {FC} from "react";
import {Outlet} from "react-router-dom";

import {CarForm, Cars} from "../../components";


const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <br/>
            <div>
                <Cars/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarPage};