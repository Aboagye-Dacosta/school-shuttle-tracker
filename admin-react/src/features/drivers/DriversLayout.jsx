import PropTypes from "prop-types"
import styled from "styled-components"

const StyledDriversLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 2rem;
`



function DriversLayout ({children})
{
    return <StyledDriversLayout>
        {children}
    </StyledDriversLayout>

}

DriversLayout.propTypes = {
  children: PropTypes.any
}


export default DriversLayout;