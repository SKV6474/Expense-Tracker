
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpensesItem(props) {


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item-description">
                <h1>
                    {props.title}
                </h1>
                <div className="expense-item-price">
                    {props.curr}{props.amount}
                </div>
            </div>
        </Card>
    );
}

export default ExpensesItem;