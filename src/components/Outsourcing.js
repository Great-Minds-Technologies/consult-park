import IconCard from "./IconCard";
import "./Outsourcing.css";
import { Col, Container, Row } from "react-bootstrap";
import { HardDrive, Phone, HandCoins, Cpu, Settings } from "lucide-react";

const Outsourcing = () => {
    return (
        <Container className="outsourcing-container">
            <h2>Business Process Outsourcing</h2>
            <h3>BPO Solutions</h3>
            <Row className="bpo-solutions">
                <Col md="4" className="process-column">
                    <IconCard icon={<Phone size={40} className="process-icons"/>} title={"Call Center & Help Desk Support"} 
                    description={"With our global team of call center workers as well as our highly trained team of receptionists and help desk workers, we are able to provide quality support services to your customers no matter their needs or wants."}/> 
                </Col>
                <Col md="4" className="process-column">
                    <IconCard icon={<HardDrive size={40} className="process-icons"/>} title={"Back-Office & Data Processing"} 
                    description={"With multiple data centers with a team of elite data handlers at your disposal, Consult Park provides an stress experience when it comes to your business' data and back-office work."}/> 
                </Col>
                <Col md="4" className="process-column">
                    <IconCard icon={<HandCoins size={40} className="process-icons"/>} title={"HR & Payroll Management"} 
                    description={"We have an entire team of expert HR managers and Bookkeepers with expertise in various business and logistical softwares such as Sage, Oracle, Xero, PaySpace and many softwares in order to provide your business with a flexible and personalised payroll experience."}/> 
                </Col>
            </Row>
            <h3>Business Optimisation</h3>
            <Row className="business-opimisation">
                <Col md="6" className="process-column">
                    <IconCard icon={<Cpu size={40} className="process-icons"/>} title={"Technical Support"} 
                    description={"Top of the line team multiple years worth of technical experience in various fields such as web administration, database management, api integration and much more."}/> 
                </Col>
                <Col md="6" className="process-column">
                    <IconCard icon={<Settings size={40} className="process-icons"/>} title={"Workflow Automation & Efficiency Audits"} 
                    description={"We use up to date programs and logistical frameworks to automate your business' workflow and conduct regular audits to ensure inefficiencies are regularly pruned."}/> 
                </Col>
            </Row>
        </Container>
    )
}

export default Outsourcing;