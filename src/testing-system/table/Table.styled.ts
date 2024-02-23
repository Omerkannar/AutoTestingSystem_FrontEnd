import styled from "styled-components"

//const gridColums = '140px 2fr 2fr 120px'
//const gridColums = '1fr 1fr 2fr 1.5fr 5fr'
//const gridColums = '100px 100px 100px 100px 100px 100px 100px 100px'
const gridColumsHead = '1fr 2fr 1.5fr 1.5fr 1.5fr 1.5fr 1fr 5fr 0.2fr'
const gridColumsRow = '1fr 2fr 1.5fr 1.5fr 1.5fr 1.5fr 1fr 5fr'

export const TableContainer = styled.div`
    position: relative;
    width:100%;
    height: 900px;
    background: #464c5c;
    border: 1px solid #f2f2f2;
    color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const TableRow = styled.div<{color?: string}>`
    width: 100%;
    display: grid;
    grid-template-columns: ${gridColumsRow};
    background: ${p => p.color};
`

export const TableFooterRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${gridColumsRow};
    position: absolute;
    bottom: 0;
    background-color: #464c5c;
    border: 1px solid #f2f2f2;
    padding-top:10px;
    padding-bottom:10px;
`

export const TableHeaderRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: ${gridColumsHead};
    background: #606d8a;
    box-sizing: border-box;
`

export const TableHeaderColumn = styled.div<{width?: string}>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #f2f2f2;
    padding: 10px;
    width: ${p=> p.width};
`

export const TableColumn = styled.div<{footer?: boolean, width?: string}>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid ${p => p.footer ? 'transparent' : '#f2f2f2'};
    padding: 0 10px;
    gap: 10px;
    height: auto;
    width: ${p=> p.width};
`

export const RowContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px);
    overflow-y: scroll;
    box-sizing: border-box;
`

export const StyledSpan = styled.span`
    margin: 0;
    color: #f2f2f2;
    padding: 0;
`

export const StyledBtn = styled.button`
    margin: 4px 0;
    padding: 4px 16px;
    box-sizing: border-box;
    border: none;
    outline: none;
    background-color: dodgerblue;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;
    opacity: 0.8;
    transition: 0.1s ease-in-out;
    &:hover {
        opacity: 1;
    }
`