import PropTypes from 'prop-types'

const Section = ({title, children}) => (
        <div>
                <h2>{title}</h2>
                <div>{children}</div>
                </div>
);

Section.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.object.isRequired
}

export default Section