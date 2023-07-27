import Layout from "../Layout/Layout";
import { useState } from "react";
import ListView from "../helperComponents/ListView";
import ListViewheader from "../helperComponents/ListViewheader";
import FormForIncome from "../helperComponents/FormForIncome";

const IncomeTransactions = () => {
    const [itemList, setItemList] = useState([]);
    function addToItem(temp){
        setItemList((previous) => [...previous, temp]);
    }
    function removeFromItem(temp){
        setItemList(itemList.filter(item => item.id!= temp));
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