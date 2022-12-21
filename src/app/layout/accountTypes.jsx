import React, { useEffect, useState } from "react";
import accountTypesService from "../services/accountTypes.service";

function AccountTypes() {
    const [accountTypes, setAccountTypes] = useState([]);
    useEffect(async () => {
        const { data } = await accountTypesService.fetchAll();
        setAccountTypes(data);
    }, []);
    return (
        <div>
            {accountTypes.map((at) => (
                <div key={at._id}>{at.name}</div>
            ))}
        </div>
    );
}

export default AccountTypes;
