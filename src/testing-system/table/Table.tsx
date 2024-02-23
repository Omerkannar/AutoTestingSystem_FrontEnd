import { useState, useEffect } from 'react';

import { RowContainer, TableContainer, StyledBtn } from './Table.styled'
import TableFooter from './TableFooter'
import Row from './Row'
import TableHeader from './TableHeader'
import { AutoTestPlanListItem } from './Table.types'

const TableApp = ({handle} : any) => {

  // // const [state, setState] = useState<IArr[]>([])
  // const [hardwareIOChange, setHardwareIOChange] = useState<HardwareIOInterface[]>([]);

  // useEffect(() => {
  //   const interval = setInterval(() => {

  //     //if (autoRefreshProcessListFlag === true) {
  //     handleDataFromServer()
  //     //}
  //     // setRunningProcessStateData(
  //     //require("../../data/Launcher/ath_process_list.json")
  //     //);

  //     //dumpLauncherStatusFile();
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // const handleDataFromServer = () => {
  //   //fetch(variables.BE_REACT_URL + '/api/getATHProcessStatus', {
  //   fetch('http://192.168.18.8:3058/api/getATHHardware_Status', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'accept': '*/*'
  //     }
  //   })
  //     .then(Response => Response.json(),
  //       error => {
  //         //setIsServerUp(false);
  //         console.log('Unable to fetch data')
  //       })
  //     .then(data => {
  //       if (data !== undefined) {
  //         storeDatainTable(data);
  //         //setIsServerUp(true);
  //         //console.log(data);
  //       } else {
  //         //setIsServerUp(false);
  //       }
  //     },
  //       (error) => {
  //         console.log('Unable to parse data')
  //         //setIsServerUp(false);
  //       });
  // }

  // const storeDatainTable = (data: HardwareIOListInterface) => {
  //   //console.log(data?.data)
  //   const listHWChanges = data.data;
  //   listHWChanges.forEach((process, key) => {
  //     //console.log(process, key)
  //     process.id = key;
  //   })
  //   // //console.log('listOfProcess -->', listOfProcess);
  //   setHardwareIOChange(listHWChanges);
  // }

  // const addRow = () => {
  //   // if(state.length < arr.length) {
  //   //   let i = state.length
  //   //   if ( i < arr.length ) {
  //   //     let newArrRow = arr[i]
  //   //     setState(prev => [...prev, newArrRow])
  //   //     i++
  //   //   }
  //   // } else {
  //   //   const time = new Date().getDay() + '/' + new Date().getMonth() + '/' + new Date().getFullYear()
  //   //   const newRow = { id: state.length + 1, icon: null, name: `Test ${state.length + 1}`, time: time, value: 'valid' };
  //   //   setState(prev => [...prev, newRow])
  //   // }
  // }

  // const clearTable = () => {
  //   setHardwareIOChange([])
  //   fetch('http://192.168.18.8:3058/api/deleteHWLogger', {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'accept': '*/*'
  //     }
  //   })
  //     .then(Response => Response.json(),
  //       error => {
  //         //setIsServerUp(false);
  //         console.log('Unable to fetch data')
  //       })
  //     .then(data => {
  //       if (data !== undefined) {
  //         //storeDatainTable(data);
  //         //setIsServerUp(true);
  //         //console.log(data);
  //       } else {
  //         //setIsServerUp(false);
  //       }
  //     },
  //       (error) => {
  //         console.log('Unable to parse data')
  //         //setIsServerUp(false);
  //       });
  // }

  // const toggleSwitch = (id: number) => {
  //   setHardwareIOChange(prev => {
  //     let item = prev.filter((ob) => ob.id === id)[0]
  //     let newstate = prev.map(el => el.id === item.id ? item : el)
  //     return newstate
  //   })
  // }


  const [temp, setTemp] = useState(0)
  const [dataFromDB, setDataFromDB] = useState<AutoTestPlanListItem[]>([]);
  const [numberOfSelectedRows, setNumberOfSelectedRows] = useState<number>(0)

  const readData = () => {
    fetch("http://127.0.0.1:5000/get_all_test", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
      }
    })
      .then(Response => Response.json()
        , error => {
          console.log('Error')
        }
      )
      .then(data => {
        console.log(data);
        setDataFromDB(data);
      }, error => console.log('Error')
      );
  }

  useEffect(() => {
    const tempInterval = setInterval(() => {
      setTemp((prevTemp) => prevTemp + 1)
    }, 20000);
    return () => {
      clearInterval(tempInterval);
    }
  }, []);

  useEffect(() => {
    readData()
  }, [temp]);

  const handleRowSelection = (e: any) => {    
    handle(e)
    console.log('AS:Table:handleRowSelection: ', e)
  }

  return (
    <TableContainer>
      <TableHeader />
      <RowContainer>
        {dataFromDB.map((item, i) => {
          return (
            <Row key={i}
              TestID={item.test_id}
              Name={item.test_name}
              MainVersion={item.main_version}
              Prerequisite={item.test_prerequisite}
              ResultThreshold={item.test_threshold}
              RunTimeout={item.test_runtime}
              Summary={item.test_summary}
              {...{handleRowSelection}}
            />)
        })}
      </RowContainer>
    </TableContainer>
  )
}

export default TableApp