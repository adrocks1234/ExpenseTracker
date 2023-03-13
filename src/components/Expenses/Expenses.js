import './Expenses.css';

import Expenseitem from './Expenseitem';

import Card from '../UI/card';

const Expenses=(props)=>{

    return(

           
        <Card className ="expenses">{

            props.item.map(

                expense=>(

                    <Expenseitem
            
                    date={ expense.date }
                    title={ expense.title }
                    amount={ expense.amount }/>

                )
            )
        }

         

        </Card>

           
        
    );
}

export default Expenses;