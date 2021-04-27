import { useContext, useState } from "react"
import { transContext } from "./transContext"

const AddTransaction = () => {
    let [newName, setName] = useState("");
    let [newAmount, setAmount] = useState("");
    let {add_Transaction} = useContext(transContext);
    let id = Math. floor(Math. random() * 100);

    const HandleAddition = (event) => {
       
        event.preventDefault();
        if(Number(newAmount) === 0){
            alert("Please Enter correct value")
            return false;
        }

        add_Transaction({
            id: id,
            amount: Number(newAmount),
            name: newName
        });

        setName('');
        setAmount('');
    }

    return(
        <div>
            <div>
                <br />
                <h3>Note!: Put "-" sign before your Expenses</h3>
                <hr />
            </div>
            <form className="addtransaction" onSubmit = { HandleAddition }>
                <label>
                    Enter Name <br />
                    <input type="text" value={newName} placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" value={newAmount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} required/>
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}

export default AddTransaction;