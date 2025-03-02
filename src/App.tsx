import './App.css';
import styled from 'styled-components';


function App() {
    return (
        <div className="App">
            <Title>Styled-components <span>.attrs</span> method</Title>

            <Form>
                <Field type='range'/>
                <Field type='password'/>
                <Field type='date'/>
                <Field placeholder='Hellooo'/>
                
                <Checkbox/>
                <CheckboksSimplySintaksis/>
            </Form>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 32px;
    span {
        color: #e91e63;
    }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs(() => ({
    placeholder: 'Type smth...', //!!!Важно , что здесь не значение, а ТИП 
    title: 'Goodbye'
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

const Checkbox = styled.input.attrs(() => {
    return {
        //пишем те атттрибуты, который хотим пришить этому элементу
        type: 'checkbox'
    }
})`
    //стилизация 
`

//более сокращенный синтаксис без прописывания return
//(вместо ретурн оборочиваем в круглые скобки)
const CheckboksSimplySintaksis = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
    
`
