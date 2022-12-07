import { FC, useEffect } from "react";
import getAllProducts from "../../api/getAllProducts";

export const LandingPage: FC = () => {
    useEffect(() => {
        getAllProducts().then((data) => console.log);
    }, []);
    return(
        <div>
            <h1>hello!</h1>
        </div>
    );
}