import React from "react";
import styled from "styled-components";
import { CardsContext } from "../../CardsDataContext/Context";
import { useContext, useEffect } from "react";
import Spinner from '../../Spinner.svg'
import Spinner2 from '../../VAyR.gif'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-basis: 33.333333%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 1rem;
  background: hsla(45, 100%, 88%, 1);

  background: linear-gradient(
    180deg,
    hsla(45, 100%, 88%, 1) 0%,
    hsla(0, 0%, 100%, 1) 100%
  );

  background: -moz-linear-gradient(
    180deg,
    hsla(45, 100%, 88%, 1) 0%,
    hsla(0, 0%, 100%, 1) 100%
  );

  background: -webkit-linear-gradient(
    180deg,
    hsla(45, 100%, 88%, 1) 0%,
    hsla(0, 0%, 100%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FFEFC1", endColorstr="#FFFFFF", GradientType=1 );
`;

const Card = styled.div`
 width: 30%;
 height:35rem;
 border-radius: 2rem;
 margin-top: 2rem;
 
 @media (min-width: 576px) and (max-width:968px){
    width:47%
 }
 
 @media (max-width: 576px){
    width:97%
 }

`;
const StyledPara = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledHeading = styled.h5`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const ImageWrapper = styled.div`
  height: 22rem;
  padding: 1rem;
  border-radius: 2rem;
  background-color: #ffff;
`;

const Content = () => {
  const { cardsData,setcardsData,loading,setloading } = useContext(CardsContext);
  console.log("cardsData", cardsData);

  const handleInitialData = async () => {
    //setLoading(true)
    setloading(true)
    const url = `https://fakestoreapi.com/products?limit=20`;
    const res = await (await fetch(url)).json();
    setloading(false)
    setcardsData(res)
  };
  
  useEffect(() => {
    handleInitialData()
  }, [])
  
    useEffect(() => {
     renderContent()
  }, [cardsData]);

    const renderContent = ()=>{
    return (<>
    {cardsData.length === 0 && <div>SORRY NO SUCH ARTICLE FOUND</div>}
    {cardsData?.map((obj) => {
        return (
          <Card
            className="card  bg-light"
            
          >
            <ImageWrapper>
              <img
                className="card-img-top"
                src={obj.image}
                alt="Card image cap"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </ImageWrapper>
            <div className="card-body" style={{ background: "" }}>
              <StyledHeading className="card-title">{obj.title}</StyledHeading>
              <StyledPara className="card-text" style={{}}>
                {obj.description}
              </StyledPara>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button type="button" class="btn btn-info m-2">
                  {obj.price}$
                </button>
                <button type="button" class="btn btn-info m-2">
                  {obj.rating.rate}/5
                </button>
                <button type="button" class="btn btn-info m-2">
                  {obj.rating.votes} Votes
                </button>
              </div>
            </div>
          </Card>
        );
      })}</>)
  }

  return (
    <Wrapper>
      {loading?<img src={Spinner2} alt="React Logo" />:renderContent()}
    </Wrapper>
  );
};

export default Content;
