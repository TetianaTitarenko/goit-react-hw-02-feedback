import PropTypes from 'prop-types'

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

Button.propTypes = {
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired,
}

export default Button