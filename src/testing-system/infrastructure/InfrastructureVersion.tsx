import { useState } from "react";
import { Box, DivColumn, DivRow, MainContainer, TestingContainer } from "../GeneralStyles.styled";
import {
  Dropdown,
  ApplyBtn,
} from "./InfrastructureVersion.styled";
import { useNavigate } from 'react-router-dom';

const InfrastructureVersion = () => {
  const navigate = useNavigate();     

  const [infrastructure, setInfrastructure] = useState({
    versions: ["Major", "SE", "DBSim", "CGF", "IG"],
    project: ["CLS", "Motion", "Vibration", "LDH", "Testing System"],
  });

  const onClickExit = () =>
  {    
    navigate(-1)
  }

  const onClickApply = () =>
  {    
    navigate(-1)
  }

  return (
    <TestingContainer>
      <MainContainer width="540px">
        <DivColumn>
          <h3>Elbit Testing System</h3>
        </DivColumn>
        <hr />
        <br />
        <DivColumn gap="10px 0">
          <Box>
            <h4>Infrastructure Version</h4>
            <DivRow>
              <DivColumn>
                {infrastructure.versions.map((version) => {
                  return (
                    <DivRow justify="space-between" key="i">
                      <p>{version} Version</p>
                      <Dropdown>
                        <option value="Version 1.12938">Version 1.12938</option>
                      </Dropdown>
                    </DivRow>
                  );
                })}
              </DivColumn>
            </DivRow>
          </Box>
        </DivColumn>
        <br />
        <DivColumn gap="10px 0">
          <Box>
            <h4>ATH Project Version</h4>
            <DivRow>
              <DivColumn>
                {infrastructure.project.map((version) => {
                  return (
                    <DivRow justify="space-between" key="i">
                      <p>{version} Version</p>
                      <Dropdown>
                        <option value="Version 1.12938">Version 1.12938</option>
                      </Dropdown>
                    </DivRow>
                  );
                })}
              </DivColumn>
            </DivRow>
          </Box>
        </DivColumn>
        <br />
        <hr />
        <br />
      <DivRow style={{gap: '0 10px'}}>
        <ApplyBtn bgcolor="#ccc" color="#333" onClick={onClickExit}>Cancel</ApplyBtn>
        <ApplyBtn bgcolor="dodgerblue" onClick={onClickApply}>Apply</ApplyBtn>
      </DivRow>
      </MainContainer>
    </TestingContainer>
  );
};

export default InfrastructureVersion;
