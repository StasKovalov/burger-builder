import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orderFrom: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:'Your Name'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touch: false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:'Street'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touch: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:'ZIP Code'
                    },
                    value: '',
                     validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touch: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder:'Country'
                    },
                    value: '',
                     validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touch: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder:'Your Mail'
                    },
                    value: '',
                     validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5
                    },
                    valid: false,
                    touch: false
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [{value: 'fastest', displayValue: 'Fastest'}, 
                                  {value: 'cheapest', displayValue: 'Cheapest'}]
                    },
                    value: '',
                    valid: true,
                    validation: {},
                }
            },
            formIsValid: false,
            loading: false
          }   
    }

    orderHandler = (e) => {
        e.preventDefault();
        console.log(this.props.ingridients);
        this.setState( {loading: true} );
        const formData = {};
        for (const key in this.state.orderFrom) {
                formData[key] = this.state.orderFrom[key].value;
        }
        const order = {
            ingridients: this.props.ingridients,
            price: this.props.price,
            order: formData
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
                
            })
            .catch( error => {
                this.setState( {loading: false} );
            } );
    }

    inputChangeHandler = (event, key) => {
        const orderFrom = {...this.state.orderFrom};
            orderFrom[key].value = event.target.value;
            orderFrom[key].valid = this.checkValidity(event.target.value, orderFrom[key].validation)
            orderFrom[key].touch = true;
            console.log(orderFrom[key].touch);
            let formIsValid = true;
            for (const key in this.state.orderFrom) {
                formIsValid = this.state.orderFrom[key].valid && formIsValid;
            }

            this.setState({orderFrom, formIsValid});
    }

    checkValidity(value, rules) {
        let isValid = false;
        
        if(!rules.hasOwnProperty('required')) {
            isValid = true;
        }

        if(rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.minLength && rules.maxLength) {
            if(rules.minLength <= value.length && rules.maxLength >= value.length) {
                isValid = true;
            } else {
                isValid = false;
            }
        }
        return isValid;
    }
    
    render() {
        const formElementsArray = [];
        for (const key in this.state.orderFrom){
            formElementsArray.push({
                id: key,
                config: this.state.orderFrom[key]
            })
        }
        let form = (
                <form>
                  {formElementsArray.map(el =>  <Input  elementType={el.config.elementType} 
                                                        elementConfig={el.config.elementConfig} 
                                                        value={el.config.value}
                                                        key = {el.id}
                                                        validation = {el.config.validation}
                                                        valid = {!el.config.valid}
                                                        touch = {el.config.touch}
                                                        changed = {(event)=> this.inputChangeHandler(event, el.id)}/>)}
                   <Button disabled = {!this.state.formIsValid} clicked = {this.orderHandler} btnType = 'success' >ORDER</Button>
               </form>
        )

        if (this.state.loading) {
            form = <Spinner/>
        }

       return (
           <div className='contact-data'>
               <h4>Enter your Contact Data</h4>
               {form}
           </div>
       ) 
    }
}

export default withRouter(ContactData);