const Button = ({onGood, onNeutral, onBad}) => (
            <div className="">
<button 
    type="button" 
    onClick={onGood} 
    >Good</button>
<button 
    type="button" 
    onClick={onNeutral} 
    >Neutral</button>
<button 
    type="button" 
    onClick={onBad} 
    >Bad</button>
</div>);

export default Button