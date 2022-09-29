import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/Pipe 14.png";
import { Widget } from '@maticnetwork/wallet-widget'
import ContactForm from "./ContactForm";




export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #64ee85;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton2 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton3 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledButton4 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton5 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton6 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton7 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton8 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledButton9 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton10 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;
export const StyledButton11 = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  font-weight: bold;
  color: #000000;
  width: 85px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  width: 600px;
  height: 600px;
  @media (min-width: 767px) {
    width: 400px;
    height: 250px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;





  function App() {

 
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("Connect below for your product. CAD and Burn coming soon!");
  const [claimingNft, setClaimingNft] = useState(false);
  const Form = useSelector((state) => state.ContactForm);
   const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback("Cooking the product");
    setClaimingNft(true);
      blockchain.smartContract.methods
      .WebMint(_amount, "https://gateway.pinata.cloud/ipfs/QmTjDiwPQvWsEaCtCTcXiXeUUxnhF9QwV85iZ2GSXRDV4E/1.json")
      .send({
        gasLimit: "500000",
        to: "0xBC5d1aF69b2c35aA6Ef79543e77b23a629e3c938",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((0.001 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "You've got your pair!"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };


  
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen style={{ backgroundColor: "#000000" }}>
      <s.Container flex={1} ai={"center"} style={{ padding: 50 }}>
              
        <s.SpacerMedium />
        <ResponsiveWrapper flex={1} style={{ padding: 0 }}>
          <s.Container flex={1} jc={"center"} ai={"center"}>
            <s.TextTitle
              style={{ textAlign: "center", fontSize: 28, fontWeight: "bold", color: "white" }}
            >
              MXNIAΩ
            </s.TextTitle>
            <s.SpacerXSmall />
            <s.TextDescription style={{ textAlign: "center", fontSize: 15, color: "white" }}>
              The Repository of DRE
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 18, color: "white" }}>
              The product catalog designed and curated by _Dre
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            Soul Bound NFTs - Hold for CAD Plans and Digital Wearables, Burn for Physical Object
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
           Full functionality pending future updates.
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            Coming Soon: 
            </s.TextDescription>
            <s.SpacerXSmall />
            <s.TextDescription style={{ textAlign: "center", fontSize: 10, color: "white" }}>
            In-browser CAD File viewer
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 10, color: "white" }}>
            Whitepaper
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 10, color: "white" }}>
            MXNIAΩ TOKEN - Utility for payment discounts and governance.
            </s.TextDescription>
            <s.SpacerMedium />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            Wanna donate? Send ETH, MATIC, BNB, or BTC to mxniaq3d.x
            </s.TextDescription>
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
            We will reward with governance share on token launch!
            </s.TextDescription>
            <s.SpacerXSmall />
            <s.TextDescription style={{ textAlign: "center", fontSize: 12, color: "white" }}>
              Check out my <a href="http://www.andrewmerriman.com/" rel="noreferrer">
                Website
              </a>
            </s.TextDescription>
          </s.Container>
          <s.SpacerMedium />
          <s.Container
            flex={1}
            jc={"center"}
            ai={"center"}
            style={{ backgroundColor: "#808080", padding: 0 }}
          >
            {Number(data.totalSupply) == 1000 ? (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  The sale has ended.
                </s.TextTitle>
                <s.SpacerSmall />
                <s.TextDescription style={{ textAlign: "center" }}>
                  This receipt collection has temporarily closed {" "}
                  <a
                    target={"_blank"}
                    href={"https://opensea.io/collection/SNKRFRKZXBLOOT"}
                  >
                    Opensea.io
                  </a>
                </s.TextDescription>
              </>
            ) : (
              <>
                <s.TextTitle style={{ textAlign: "center" }}>
                  Smoker's Pipe
                </s.TextTitle> 
                <StyledImg alt={"example"} src={i1} />
                                              
                <s.SpacerXSmall />
                
                <s.TextDescription style={{ textAlign: "center" }}>
                  {feedback}
                </s.TextDescription>
                <s.SpacerXSmall />
                {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.TextDescription style={{ textAlign: "center" }}>
                      Connect to the Optimism Mainnet
                    </s.TextDescription>
                    <s.SpacerSmall />
                    <StyledButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                      
                    >
                      CONNECT
                    </StyledButton>
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.SpacerSmall />
                        <s.TextDescription style={{ textAlign: "center" }}>
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <StyledButton
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(1);
                        getData();
                        
                      }}
                    >
                      {claimingNft ? "BUSY" : "Get Yours!"}
                    </StyledButton>
                  </s.Container>

                )}
                 <s.SpacerXSmall />
                 
                  
                
              </>
            )}
          </s.Container>
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription style={{ textAlign: "center", fontSize: 12}}>
            Please make sure you are connected to the right network (Optimism
            Mainnet).
          </s.TextDescription>
          <s.SpacerSmall />
          <s.TextDescription style={{ textAlign: "center", fontSize: 10}}>
            Please note: Payment transactions cannot be reversed.
          </s.TextDescription>
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
