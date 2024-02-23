import { StyledSpan, TableColumn, TableRow } from './Table.styled'
import { AutoTestPlanListItem } from './Table.types'
import { useState } from 'react'

const onlyLettersAndNumbers = (str: string) => {
    return /^[A-Za-z0-9]*$/.test(str)
}

const Row = ({ TestID, Name, MainVersion, Prerequisite, ResultThreshold, RunTimeout, StartPoint, Summary, handleRowSelection }: AutoTestPlanListItem & any, ) => {

    // console.log(CrashReason === undefined ? null : CrashReason.replace(/\W/ig, ""))
    // let c = JSON.stringify(CrashReason?.split('\\u'))?.split('\\u0000')[0]?.split('["')[1]

    const [selected, setSelected] = useState<boolean>(false)

    const handleClick = (e: any) => {
        console.log('AS:Row:handleRowSelection:Selected:')
        //console.log('click', Name)
        if (selected === true) {
            setSelected(false);
            //console.log('isNotSelected')
            console.log('AS:Row:handleRowSelection:Selected:false =>', Name)
            handleRowSelection(Name);
        } else {
            setSelected(true);
            console.log('AS:Row:handleRowSelection:Selected:true =>', Name)
            //console.log('isSelected')
            handleRowSelection(Name);
        }
    }

    return (
        // <TableRow color={Group === 'Malfunction' ? 'red' : Group === 'Event' ? 'grey' : 'auto'}>
        //     <TableColumn><StyledSpan>{UpdateTime?.split(' ')[0]}</StyledSpan></TableColumn>
        //     <TableColumn><StyledSpan>{Group}</StyledSpan></TableColumn>
        //     <TableColumn><StyledSpan>{SwitchName}</StyledSpan></TableColumn>
        //     <TableColumn><StyledSpan>{SwitchValue}</StyledSpan></TableColumn>
        //  <TableColumn><StyledSpan>
        //      MLS: {Number(HeightMSL).toFixed(2)} [ft], AGL: {Number(HeightASL).toFixed(2)} [ft], Fuel: {Fuel} [Kg], CAS: {Number(Velocity).toFixed(2)} [kts], ROC: {Number(RateOfClimb * 60).toFixed(2)} [ft/min]
        //       {SwitchName === 'Hellicopter-LHD-Crash' ? [', Crash Reason: ', JSON.stringify(CrashReason?.split('\\u'))?.split('\\u0000')[0]?.split('["')[1]] : null}
        //   </StyledSpan></TableColumn>
        // <TableColumn><StyledSpan>
        //     MLS: {Number(HeightMSL).toFixed(2)} [ft], AGL: {Number(HeightASL).toFixed(2)} [ft], Fuel: {Fuel} [Kg], CAS: {Number(Velocity).toFixed(2)} [kts], ROC: {Number(RateOfClimb * 60).toFixed(2)} [ft/min]
        //     {SwitchName === 'Hellicopter-LHD-Crash' ? [', Crash Reason: ', CrashReason?.replace(/\W/ig, " ")] : null}
        // </StyledSpan></TableColumn>

        //</TableRow>



        <TableRow color={selected === true ? 'brown' : 'auto'} onClick={handleClick}>
            <TableColumn ><StyledSpan>{TestID}</StyledSpan></TableColumn>
            <TableColumn><StyledSpan>{Name}</StyledSpan></TableColumn>
            <TableColumn><StyledSpan>{MainVersion}</StyledSpan></TableColumn>
            <TableColumn><StyledSpan>{Prerequisite}</StyledSpan></TableColumn>
            <TableColumn><StyledSpan>{ResultThreshold}</StyledSpan></TableColumn>
            <TableColumn><StyledSpan>{RunTimeout}</StyledSpan></TableColumn>
            <TableColumn><StyledSpan>{StartPoint}</StyledSpan></TableColumn>
            <TableColumn><StyledSpan>{Summary}</StyledSpan></TableColumn>

        </ TableRow>

    )
}

export default Row