import { addExpense, removeExpense, editExpense } from './../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
   const action = editExpense('123abc', {note: 'new note value'});
   expect(action).toEqual( {
      type:'EDIT_EXPENSE',
      id: '123abc',
      updates: {
        note: 'new note value'
      }
   });
})

test('should setup add expense object with provided values', () =>{
   const expenseDate = {
    description: 'rent',
    amount: 109500,
    createdAt: 1000,
    note: 'this is last month rent'
   };
   const action = addExpense(expenseDate);
   expect(action).toEqual({
     type: 'ADD_EXPENSE',
     expense: {
       ...expenseDate,
       id: expect.any(String)
     }       
   })
})

test('should setup add expense object with default values', () =>{
const action = addExpense();
expect(action).toEqual({
  type: 'ADD_EXPENSE',
   expense: {
    id: expect.any(String),
    description: '',
    note: '',
    amount:0,
    createdAt: 0
    }       
   })
})
