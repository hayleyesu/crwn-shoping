import { SpinnerContainer,SpinnerOverlay } from "./spinner.styles"; 
export const Spinner=()=>{
console.log('spinneris loaded.' )
return(
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
)
    
};

export default Spinner;