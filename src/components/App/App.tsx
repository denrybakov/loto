
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRandomField_1 } from '../../redux/actions/randomField_1';
import { getRandomField_2 } from '../../redux/actions/randomField_2';
import { postResults } from '../../redux/actions/results';
import { addNum, removeNum } from '../../redux/actions/selectedField';
import { addNum_2, removeNum_2 } from '../../redux/actions/selectedField_2';
import { findCorrectNum } from '../../utils/findCorrectNum';
import { ButtonNum } from '../ButtonNum';
import { Card } from '../Card';
import { EIcon, Icon } from '../Icon';
import { Modal } from '../Modal';
import { EColor, Text } from '../Text'

function App() {
  const storeField_1 = useSelector((state: any) => state.randomField_1)
  const storeField_2 = useSelector((state: any) => state.randomField_2)
  const storeSelectedField_1 = useSelector((state: any) => state.selectedField)
  const storeSelectedField_2 = useSelector((state: any) => state.selectedSecondField)
  const dispatch = useDispatch()

  const [counter, setCounter] = useState<number>(8)
  const [counter_2, seCounter_2] = useState<number>(1)

  const [arrUserNum, setUserNum] = useState<number[]>([])
  const [rndField_1, setRndField_1] = useState([])

  const [arrBtn] = useState(Array(19).fill(''))
  const [arrBtn_2] = useState(Array(2).fill(''))

  const [isWin, setIsWin] = useState<boolean>(false)
  const [isModal, setIsModal] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getRandomField_1())
    dispatch(getRandomField_2())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const concatArr = storeField_1.concat(storeField_2)
    setRndField_1(concatArr)
  }, [storeField_1, storeField_2])

  useEffect(() => {
    const concatArr = storeSelectedField_1.concat(storeSelectedField_2)
    setUserNum(concatArr)
  }, [storeSelectedField_1, storeSelectedField_2])


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
    findCorrectNum(rndField_1, arrUserNum).length >= 4 ? setIsWin(true) : setIsWin(false)
    setIsModal(true)

    dispatch(postResults({
      selectedNumber: {
        firstField: rndField_1,
        secondField: arrUserNum
      },
      isTicketWon: isWin
    }))
  }

  return (
    <div className="App">
      <Card>
        <div className='App__header'>
          <Text
            As={'h1'}
            size={20}
            color={EColor.black}
            children={'Билет 1'}
            bold
          />
          <Icon type={EIcon.magic} width={30} height={30} />
        </div>
        <div className='App__title'>
          <Text As={'span'} children={'Поле 1 '} size={18} bold />
          <Text As={'span'} children={`Отметьте ${counter} чисел.`} size={18} />
        </div>
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
          <div className='App__title'>
            <Text As={'span'} children={'Поле 2 '} size={18} bold />
            <Text As={'span'} children={`Отметьте ${counter_2} число.`} size={18} />
          </div>
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
        <div className='App__footer'>
          <button
            className={'btn-primary'}
            onClick={onResults}
          >
            Показать результаты
          </button>
        </div>
      </Card>
      {
        isModal && (
          <Modal
            title={'Результаты:'}
            children={`${isWin ? 'Ого, Вы выйграли! Поздравляем' : 'Проиграли :('}`}
            isWin={isWin}
            onClose={() => setIsModal(false)}
          />
        )
      }

    </div>
  );
}

export default App;
