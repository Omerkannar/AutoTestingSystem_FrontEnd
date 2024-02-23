import { StyledBtn, StyledSpan, TableColumn, TableFooterRow } from './Table.styled'

interface Ifooter {
    //addRow: () => void;
    clearTable: () => void;
}

const TableFooter = ({clearTable}: Ifooter) => {
    return (
        <TableFooterRow>
            {/* <TableColumn footer>
                <StyledBtn>From Flight</StyledBtn>
                <StyledBtn>From Start</StyledBtn>
            </TableColumn> */}
            {/* <TableColumn footer>
            </TableColumn>
            <TableColumn footer>
            </TableColumn> */}
            <TableColumn footer>
                <StyledSpan>Collection</StyledSpan>
                {/* <StyledBtn onClick={addRow}>Add</StyledBtn> */}
                <StyledBtn onClick={clearTable}>Clear</StyledBtn>
            </TableColumn>
        </TableFooterRow>
        //<div />
    )
}

export default TableFooter