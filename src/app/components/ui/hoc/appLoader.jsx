import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getAccountsLoadingStatus,
    loadAccountsList,
} from "../../../store/accounts";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getAccountsLoadingStatus());
    console.log(isLoading);
    useEffect(() => {
        dispatch(loadAccountsList());
    }, []);
    if (isLoading) return "Loading...";
    return children;
};

export default AppLoader;
