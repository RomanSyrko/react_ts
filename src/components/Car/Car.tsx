import {FC} from "react";
import {ICar} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car: {id, price, model, year}}) => {
    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <br/>
            <Link to={`${id}`}>
                <button>Get Details</button>
            </Link>
            <hr/>
        </div>
    );
};

export {Car};