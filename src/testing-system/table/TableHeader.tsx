import { StyledSpan, TableHeaderColumn, TableHeaderRow } from './Table.styled'

const TableHeader = () => {
    return (
        <TableHeaderRow>
            <TableHeaderColumn>
                <StyledSpan>ID</StyledSpan>
            </TableHeaderColumn>
            <TableHeaderColumn>
                <StyledSpan>Name</StyledSpan>
            </TableHeaderColumn>
            <TableHeaderColumn>
                <StyledSpan>IOS Version</StyledSpan>
            </TableHeaderColumn>
            <TableHeaderColumn>
                <StyledSpan>Prerequisite</StyledSpan>
            </TableHeaderColumn>
            <TableHeaderColumn>
                <StyledSpan>Threshold</StyledSpan>
            </TableHeaderColumn>
            <TableHeaderColumn>
                <StyledSpan>Test Timeout</StyledSpan>
            </TableHeaderColumn>
            <TableHeaderColumn>
                <StyledSpan>Test Site</StyledSpan>
            </TableHeaderColumn>
            <TableHeaderColumn>
                <StyledSpan>Summary</StyledSpan>
            </TableHeaderColumn>
        </TableHeaderRow>
    )
}

export default TableHeader