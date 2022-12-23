import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMarkets } from "../../redux/actions/actionCreators";

export const MapPage: FC = () => {
    const dispath = useDispatch();

    useEffect(() => {
        dispath(getAllMarkets());
    }, [dispath]);
    return(
        <div>
            <h1>Карта</h1>
        </div>
    );
}