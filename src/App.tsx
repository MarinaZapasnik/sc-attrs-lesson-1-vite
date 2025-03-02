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
                <Field placeholder='это передали в пропсах' title='Это передали в пропсах'/>
                
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

// метод аттрс работает только с традиционными аттрибутами, которые есть в HTML
// с придуманными атрибутами не работает!
// типизировать аттрибуты для inputa не нужно, они типизированы под капотом
//вытягиваем аттрибуты из пропсов

const Field = styled.input.attrs((props) => ({
    placeholder: props.placeholder || 'Если в пропсах ничего не передали', //!!!Важно , что здесь не значение, а ТИП 
    title: props.title || 'Если в пропсах ничего не передали',
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;

//примечание!!! 
//если нам не нужны все переданные пропсы, то мы можем сделать деструктуризацию
//вместо пропс напишем только то, что нам нужно в {}
// и если например передали еще какие то пропсы в теге, то мы их не учтем


// const Field = styled.input.attrs(({placeholder, title}) => ({
//     placeholder: placeholder || 'Если в пропсах ничего не передали', //!!!Важно , что здесь не значение, а ТИП 
//     title: title || 'Если в пропсах ничего не передали',
// }))`




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
