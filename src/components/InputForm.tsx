import styled from "styled-components"

export const InputForm = () => {
    return (
        <>
            <StyledContainer>
                <StyledInput 
                placeholder="검색"
                />
                <StyledBtn />
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    display: flex;
`
const StyledInput = styled.input`
    width: 400px;
    height: 30px;
    border: none;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
`
const StyledBtn = styled.button`
    height: 30px;
    width: 55px;
    border-radius: 0px;
    border-top-right-radius: 10px;
`