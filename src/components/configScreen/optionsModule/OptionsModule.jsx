import './OptionsModule.css'
import ButtonModule from '../buttonModule/ButtonModule';

export default function OptionsModule({ optionsName, typeButton,  buttonsTest, setButtonsTest }) {

    const selectActiveButton = (buttonName, )=> {
        const buttons = buttonsTest.map(button=>{

            if(buttonName !== button.name){
                return{
                    ...button,
                    active: false
                }
            }
            return{  
                ...button,
                active: true
            }
        })
        setButtonsTest((prev)=>{
            return{
                ...prev,
                [`${typeButton}`]: buttons
            }
        })
    }

                
    const buttons = buttonsTest.map((button, index)=>
        <ButtonModule
            nameButtons={button.name}
            selectActiveButton={selectActiveButton}
            active={button.active}
            key={index}
        />)

    return (
        <div className='options-styles'>
            <h2>{optionsName}</h2>
            <div className={'buttons-main'}>
                {buttons}
            </div>
        </div>
    )
}
