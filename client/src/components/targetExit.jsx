
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { callApi } from '../redux/action';
import styles from '../styleComponents/form.module.css';

export default function TargetExit() {

    const history = useHistory();
    const dispatch = useDispatch()

    const handlerClick = () => {
        dispatch(callApi())
        history.push('/countries');

    }

    return (
        <>
       <div className={styles.TargetExit}>
            <div className={styles.info}>

            <h1>Exit</h1>
            <br />
            <p>the activity has been successfully registered in our
                 <strong>DataBase</strong>
            </p>
            
            </div>
            <div className={styles.botones}>
            <button onClick={() => handlerClick()}>Exit</button>
            </div>
        </div>
        </>
    )
}