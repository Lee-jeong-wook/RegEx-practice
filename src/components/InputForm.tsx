import { useState } from "react"
import styled from "styled-components"

export const InputForm = () => {
    const [value, setValue] = useState<String>("");
    const inputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value.replace(/\s/g, "");
        setValue(text);
        console.log(value);
    }
    const submitHandler = () => {

    }
    return (
        <>
            <StyledContainer>
                <StyledInput 
                placeholder="검색"
                onChange={inputChange}
                />
                <StyledBtn 
                onClick={submitHandler}
                />
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