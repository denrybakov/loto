
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNum, removeNum } from '../../redux/actions/selectedField';
import { addNum_2, removeNum_2 } from '../../redux/actions/selectedField_2';
import { ButtonNum } from '../ButtonNum';
import { Card } from '../Card';
import { EIcon, Icon } from '../Icon';
import { EColor, Text } from '../Text'

function App() {
  const [counter, setCounter] = useState<number>(8)
  const [counter_2, seCounter_2] = useState<number>(1)
  const [arrUserNum, setUserNum] = useState<number[]>([])
  const [arrBtn] = useState(Array(19).fill(''))
  const [arrBtn_2] = useState(Array(2).fill(''))
  const dispatch = useDispatch()

  const clickHandlerBtn = (e: any, isActive: boolean) => {
    if (isActive) {
      setCounter(count => count + 1)
      dispatch(removeNum(+e.target.name))
    } else {
      setCounter(count => count - 1)
      dispatch(addNum(+e.target.name))
    }
  }

  const clickHandlerBtn_2 = (e: any, isActive: boolean) => {
    if (isActive) {
      seCounter_2(count => count + 1)
      dispatch(removeNum_2(+e.target.name))
    } else {
      seCounter_2(count => count - 1)
      dispatch(addNum_2(+e.target.name))
    }
  }

  const onResults = () => {
    console.log('arr User', arrUserNum)
  }

  return (
    <div className="App">
      <Card>
        <div className='App__header'>
          <Text
            As={'h1'}
            size={20}
            color={EColor.black}
            bold
          >
            Билет 1
          </Text>
          <Icon type={EIcon.magic} width={30} height={30} />
        </div>
        <Text As={'span'} children={'Поле 1'} size={18} bold />
        <Text As={'span'} children={`Отметьте ${counter} чисел.`} size={18} />
        <div className='App__grid-btns'>
          <div className='App__grid-line'>
            {
              arrBtn.map((_, i) => (
                <ButtonNum
                  key={i}
                  text={`${i + 1}`}
                  onClick={clickHandlerBtn}
                  name={`${i + 1}`}
                  active={false}
                  disabled={counter === 0 ? true : false}
                />
              ))
            }
          </div>
          <Text As={'span'} children={'Поле 2'} size={18} bold />
          <Text As={'span'} children={`Отметьте ${counter_2} число.`} size={18} />
          <div className="App__grid-line">
            {
              arrBtn_2.map((_, i) => (
                <ButtonNum
                  key={i}
                  text={`${i + 1}`}
                  onClick={clickHandlerBtn_2}
                  name={`${i + 1}`}
                  active={false}
                  disabled={counter_2 === 0 ? true : false}
                />
              ))
            }
          </div>
        </div>
        <button
          className={'btn-primary'}
          onClick={onResults}
        >
          Показать результаты
        </button>
      </Card>

    </div>
  );
}

export default App;
