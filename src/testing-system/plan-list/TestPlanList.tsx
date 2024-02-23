import React, { useState, useEffect } from "react";
import {
  Box,
  DivColumn,
  DivRow,
  MainContainer,
  TestingContainer,
} from "../GeneralStyles.styled";
import { ApplyBtn } from "../infrastructure/InfrastructureVersion.styled";
import PlanListFooter from "./PlanListFooter";
import PlanListHeader from "./PlanListHeader";
import TableList from "./TableList";
import EnhancedTable from "./SimpleTable";
import TableApp from "../table/Table";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Checkbox } from "@mui/material"
import { AutoTestPlanListItem } from '../table/Table.types'



// const tableData = [
//   {
//     name: "Test 1",
//     description: "Ownship Flight 10 km",
//     group: "Ownship",
//     time: "15:30 m / 15 steps",
//     results: "10/4",
//   },
//   {
//     name: "Test 2",
//     description: "CGF Hell Flight 150 km",
//     group: "CGF",
//     time: "15:30 m / 15 steps",
//     results: "2/0",
//   },
//   {
//     name: "Test 3",
//     description: "IG Perfomance Test",
//     group: "IG",
//     time: "15:30 m / 15 steps",
//     results: "20/15",
//   },
//   {
//     name: "Test 4",
//     description: "IG Perfomance Test",
//     group: "All System Test",
//     time: "15:30 m / 15 steps",
//     results: "20/15",
//   },
//   {
//     name: "Test 5",
//     description: "IG Perfomance Test",
//     group: "DOM IGs",
//     time: "15:30 m / 15 steps",
//     results: "20/15",
//   },
// ];

const TestPlanList = () => {

  const [selectedTestID, setSelectedTestID] = useState<string>("Null")
  const [selectedCommandName, setSelectedCommandName] = useState<string>("Null")
  const [temp, setTemp] = useState(0)
  const [dataFromDB, setDataFromDB] = useState<AutoTestPlanListItem[]>([]);
  const [numberOfSelectedRows, setNumberOfSelectedRows] = useState<number>(0)
  //const [isSelected, setIsSelected] = useState<Boolean[]>(new Array(1000).fill(false));
  const [isSelected, setIsSelected] = useState<Number[]>([]);



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
    }, 1 * 60 * 1000);
    return () => {
      clearInterval(tempInterval);
    }
  }, []);

  useEffect(() => {
    readData()
  }, [temp]);

  const handle = (e: any) => {
    console.log('Selected TestID: ', e)
    setSelectedTestID(e)
  }

  const selectedCommand = (e: any) => {
    console.log('AS:TestPlanList:selected Command:', e)
    setSelectedCommandName(e)
    switch (e) {

      case "Show Test": {
        showTest()
        break;
      }

      case "Prepare Test": {
        prepareTest()
        break;
      }

      case "Run Create Step": {
        runCreteStep()
        break;
      }



      case "Stop Test": {
        stopTest()
        break;
      }

      case "Generate ATP From Test": {
        generateAtpFromTest()
        break;
      }

      case "Duplicate Test": {
        duplicateTest()
        break;
      }

      case "Delete Test": {
        deleteTest()
        break;
      }

      case "Schegular Test": {
        schegularTest()
        break;
      }

      default: {
        console.log('AS:TestPlanList:UnkonCommand:', e)
        break;
      }
    }
  }


  const prepareTest = () => {
    console.log('AS:TestPlanList:PrepareTest -> Call Rest API -> http://127.0.0.1:5000/prepare_test')
    console.log(isSelected)
    // const rowsToRun: any = isSelected.filter(item => {
    //   for (let index = 0; index < dataFromDB.length; index++) {
    //     if (Number(dataFromDB[index]['test_id']) == item) {
    //       return dataFromDB[index]
    //     }
    //   }
    // })
    const rowsToRun: any = dataFromDB.filter(data => {
      for (let index = 0; index < isSelected.length; index++) {
        if (Number(data['test_id']) == isSelected[index])
          return data
      }
    })
    console.log(rowsToRun)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: rowsToRun,
          // test_name: rowsToRun['test_name'],
        })
    };
    fetch("http://127.0.0.1:5000/prepare_test", requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }

  const runCreteStep = () => {
    console.log('AS:TestPlanList:runCreteStep -> Call Rest API -> http://127.0.0.1:5000/create_test_step')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ TestID: selectedTestID })
    };
    fetch("http://127.0.0.1:5000/create_test_step", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }


  const stopTest = () => {
    console.log('AS:TestPlanList:StopTest -> Call Rest API -> http://127.0.0.1:5000/stop_test')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ TestID: selectedTestID })
    };
    fetch("http://127.0.0.1:5000/stop_test", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const generateAtpFromTest = () => {
    console.log('AS:TestPlanList:GenerateAtpFromTest -> Call Rest API -> http://127.0.0.1:5000/generate_ATP')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ TestID: selectedTestID })
    };
    fetch("http://127.0.0.1:5000/generate_ATP", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const duplicateTest = () => {
    console.log('AS:TestPlanList:DuplicateTest -> Call Rest API -> http://127.0.0.1:5000/duplicate_test')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ TestID: selectedTestID })
    };
    fetch("http://127.0.0.1:5000/duplicate_test", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const deleteTest = () => {
    console.log('AS:TestPlanList:DeleteTest -> Call Rest API -> http://127.0.0.1:5000/delete_test')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ TestID: selectedTestID })
    };
    fetch("http://127.0.0.1:5000/delete_test", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const schegularTest = () => {
    console.log('AS:TestPlanList:SchegularTest -> Call Rest API -> http://127.0.0.1:5000/schegular_test')
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ TestID: selectedTestID })
    };
    fetch("http://127.0.0.1:5000/schegular_test", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  const showTest = () => {
    console.log('AS:TestPlanList:showTest -> Call Rest API -> http://127.0.0.1:5000/show_test')

    fetch("http://127.0.0.1:5000/show_test", {
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
        //setDataFromDB(data);
      }, error => console.log('Error')
      );
  }

  const setSelectedRow = (row: any) => {
    // //console.log(row["test_id"])
    readData()
    const tempArr: Number[] = isSelected
    let tempArr1: Number[] = []
    let isExist: boolean = false
    for (let index = 0; index < tempArr.length; index++) {
      if (tempArr[index] === Number(row["test_id"])) {
        isExist = true
      }
    }
    //const isExist = tempArr.find(row["test_id"])
    if (isExist === false) {
      tempArr.push(Number(row["test_id"]))
      setIsSelected(tempArr)
    } else {
      tempArr1 = tempArr.filter(idw => {
        if (idw !== Number(row["test_id"])) {
          return idw
        }
      })
      setIsSelected(tempArr1)
    }
    console.log(isSelected)


    // //console.log(idToSelect)
    // let tempArr : boolean[] = new Array(false)
    // for (let index = 0; index < 1000; index++) {
    //   tempArr[index] = false;

    // }
    // tempArr[idToSelect] = true
    // if isSelected[idToSelect]

  }

  const handleSelection = (e: any) => {

  }



  return (
    <TestingContainer>
      <MainContainer>
        <PlanListHeader />
        <TableContainer component={Paper} sx={{ maxHeight: '650px' }} >
          <Table stickyHeader >
            <TableHead>
              <TableRow sx={{ width: '100%' }}>
                <TableCell sx={{ fontSize: "larger", width: "5%" }}>ID</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "10%" }}>Test Name</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "10%" }}>IOS Version</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "10%" }}>Threshold</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "10%" }}>Prerequisite</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "10%" }}>Environment</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "10%" }}>TimeOut</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "10%" }}>Site</TableCell>
                <TableCell sx={{ fontSize: "larger", width: "40%" }}>Summary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataFromDB.map((row) => (
                <TableRow sx={{
                  background: isSelected.map(selectedItem => {
                    return selectedItem === Number(row.test_id) ? 'lightGrey' : null
                  })
                }}
                  onClick={() => setSelectedRow(row)}
                  key={row.test_id} >
                  <TableCell>{row.test_id}</TableCell>
                  <TableCell>{row.test_name}</TableCell>
                  <TableCell>{row.main_version}</TableCell>
                  <TableCell>{row.test_threshold}</TableCell>
                  <TableCell>{row.test_prerequisite}</TableCell>
                  <TableCell>{row.test_environment}</TableCell>
                  <TableCell>{row.test_runtime}</TableCell>
                  <TableCell>{row.test_site}</TableCell>
                  <TableCell>{row.test_summary}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TableApp {...{handle}}/>
         */}
        <PlanListFooter {...{ selectedCommand }} />
      </MainContainer>
    </TestingContainer>
  );
};

export default TestPlanList;
