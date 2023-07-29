import Layout from "../Layout/Layout";
import { useState } from "react";
import ListView from "../helperComponents/ListView";
import ListViewheader from "../helperComponents/ListViewheader";
import FormForIncome from "../helperComponents/FormForIncome";
import { useEffect } from "react";

const IncomeTransactions = () => {

    useEffect(() => {
        if (localStorage.getItem('income') !== null) {
            const t = JSON.parse(localStorage.getItem('income'));
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
        localStorage.setItem('income', t);
    }
    return (
        <Layout>
            <div>
                <FormForIncome addToItem={addToItem}></FormForIncome>
            </div>
            <div>
                <ListViewheader type={'Income'}></ListViewheader>
                <ol> {
                    itemList.map((item, index) =><ListView cartItem={item} key={item.id} remove={removeFromItem}/>)
                }
                </ol>
            </div>
        </Layout>
    );
};

export default IncomeTransactions;