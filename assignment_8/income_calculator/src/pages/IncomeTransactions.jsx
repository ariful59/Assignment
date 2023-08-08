import Layout from "../Layout/Layout";
import { useState } from "react";
import ListView from "../helperComponents/ListView";
import ListViewheader from "../helperComponents/ListViewheader";
import FormForIncome from "../helperComponents/FormForIncome";
import { useEffect } from "react";

const IncomeTransactions = () => {
    const typeOfAction = "Income";
    const incomeArray = ['Income Source', 'Salary', 'Freelancing', 'Business', 'Other Sources'];

    useEffect(() => {
        if (localStorage.getItem(typeOfAction) !== null) {
            const t = JSON.parse(localStorage.getItem(typeOfAction));
            setItemList(t);
        }
    },[])

    const [itemList, setItemList] = useState([]);
    function addToItem(temp){
        setItemList((previous) => [...previous, temp]);
        setValueInLocalST([...itemList, temp]);
    }
    function removeFromItem(temp){
        const t = itemList.filter(item => item.id!= temp);
        setItemList(t);
        setValueInLocalST(t);
    }
    function setValueInLocalST(item){
        const t = JSON.stringify(item);
        localStorage.setItem(typeOfAction, t);
    }
    return (
        <Layout>
            <div>
                <FormForIncome addToItem={addToItem} type={typeOfAction} dropDownMenu = {incomeArray}></FormForIncome>
            </div>
            <div>
                <ListViewheader type={typeOfAction}></ListViewheader>
                <ol> {
                    itemList?.map((item) =><ListView cartItem={item} key={item.id} remove={removeFromItem}/>)
                }
                </ol>
            </div>
        </Layout>
    );
};

export default IncomeTransactions;