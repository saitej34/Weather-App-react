import React,{useState} from "react";
import {Link} from 'react-router-dom'
import Home from './Home'
import { Button,Navbar,Container,Nav,Card,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Data() {
  const [rep,setrep]=useState('');
  const [det,setdet] = useState({
    city:'',
    reg:'',
    con:'',
    lt:''
  });
  const [temp,settemp] = useState({
    tempc:'',
    tempf:'',
    cond:'',

  });
  const [time,settime] = useState('');
  const [data,setdata] = useState('');
  const [link,setlink] = useState('');
  const ch = (e)=>{
    setdata(e.target.value);
  }
  const chan = async (e)=>{
    e.preventDefault();
    var url = 'http://api.weatherapi.com/v1/current.json?key=aca8f848e92d4d84a3873243221704&q='+data+'&aqi=no';
    fetch(url,{
      method: 'GET',
      headers:{
        "Transfer-Encoding": "chunked",
        "Connection": "keep-alive",
        "Vary": "Accept-Encoding",
        "CDN-PullZone": "93447",
        "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
        "CDN-RequestCountryCode": "GB",
        "CDN-ProxyVer": "1.02",
        "CDN-RequestPullSuccess": "True",
        "CDN-RequestPullCode": "200",
        "CDN-CachedAt": "04/17/2022 07:34:33",
        "CDN-EdgeStorageId": "576",
        "CDN-Status": "200",                                          
        "CDN-RequestId": "49e165bd12794112a509f97dbc0cb054",
        "CDN-Cache": "MISS",
        "Cache-Control": "public, max-age=180",
        "Content-Type": "application/json",
        "Date": "Sun, 17 Apr 2022 07:34:33 GMT",
        "Server": "BunnyCDN-FR1-576"
      }
    }).then(response=>response.json())
    .then(response=>{
      var j = JSON.parse(JSON.stringify(response))
      setrep("Weather Report");
      setdet({
        city: "Place :  "+j.location.name,
        reg: "Region : "+j.location.region,
        con:"Country : "+j.location.country,
        lt : "Local Time is "+j.location.localtime
      });
      settemp({
        tempc:"Temperature (celsius) : "+j.current.temp_c,
        tempf:"Temperature (fahrenheit): "+j.current.temp_f,
        cond:"Condition : "+j.current.condition.text

      });
      var li = (j.current.condition.link);
      setlink(li);
    })
    .catch(err=>console.log(err))

  }
  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Weather App</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="#pricing">Get Weather</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
     <Container style={{width:"50%"}}>
     <Card className="text-center">
  <Card.Header>Weather Report</Card.Header>
  <Card.Body>
    <Card.Title>Get Weather Report By City Name</Card.Title>
    <Card.Text>You can get weather data in any location on the earth. The current weather data are updated online based on data from more than 40,000 weather stations.</Card.Text>
    <Form onSubmit={chan} >
    <Form.Label>City Name</Form.Label>
    <Form.Control type="text" placeholder="City Name" onChange={ch} />
    <br />
    <Button variant="primary" type="submit" >Get Data</Button>
    </Form>
    <br />
    <h3 align="center">{rep}</h3><br />
    <Card.Text>{det.city}</Card.Text>
    <Card.Text>{det.reg}</Card.Text>
    <Card.Text>{det.con}</Card.Text>
    <Card.Text>{det.lt}</Card.Text>
    <Card.Text>{temp.tempc}</Card.Text>
    <Card.Text>{temp.tempf}</Card.Text>
    <Card.Text>{temp.cond}</Card.Text>
    <img src={link} alt={link} />
  </Card.Body>
</Card>
      </Container>
    </div>
  );
}

export default Data;

