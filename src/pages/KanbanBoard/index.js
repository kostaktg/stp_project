import React, { Component } from 'react';
import { Container, Row, Col, Media, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';
import KanbanBoard from "./KanbanBoard";

//Import Logo
import logosmlight from "../../assets/images/logo-sm-light.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";

//Import scss
import "./kanban-style.scss";


class IndexKanban extends Component {
    constructor(props) {
        super(props);
        this.state={
            columns: [
				{
					id: 1,
                    title: 'Да направя',
                    columnsubtitle : "3 Задачи",
					cards: [
						{
							id: 11,
							content: {
                                id : "#NZ1220", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "14 Oct, 2019", progressValue: 75,
                                team : [                                    
                                    { id : 1, name : "joseph", img : avatar2 },
                                    { id : 2, name : "joseph", img : avatar4 },
                                ]
							}
						},
						{
							id: 12,
							content: {
                                id : "#NZ1219", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: " 15 Apr, 2020", progressValue: 50,
                                team : [
                                    { id : 3, name : "Misty", img : "Null" },
                                ]
							}
						},
						{
							id: 13,
							content: {
                                id : "#NZ1218", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "12 Apr, 2020", progressValue: 65,
                                team : [
                                    { id : 4, name : "joseph", img : avatar5 },
                                    { id : 5, name : "Jenice Bliss", img : "Null" },
                                    { id : 6, name : "John", img : avatar6 },
                                ]
							}
						},
					]
				},
				{
					id: 2,
                    title: 'В процес на изпълнение',
                    columnsubtitle : "3 Задачи",
					cards: [
						{
							id: 21,
							content: {
                                id : "#NZ1217", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "05 Apr, 2020", progressValue: 45,
                                team : [
                                    { id : 7, name : "joseph", img : avatar7 },
                                    { id : 8, name : "Edward", img : "Null" },
                                    { id : 9, name : "John", img : avatar8 },
                                ]
							}
						},
						{
							id: 22,
							content: {
                                id : "#NZ1216", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "02 Apr, 2020", progressValue: 80,
                                team : [
                                    { id : 10, name : "joseph", img : avatar7 },
                                    { id : 11, name : "John", img : avatar2 },
                                ]
							}
						},
						{
							id: 23,
							content: {
                                id : "#NZ1215", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "28 Mar, 2020", progressValue: 85,
                                team : [
                                    { id : 12, name : "Amver", img : avatar4 },
                                ]
							}
						},

					]
				},
				{
					id: 3,
                    title: 'Завършен',
                    columnsubtitle : "3 Задачи",
					cards: [
						{
							id: 31,
							content: {
                                id : "#NZ1214", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "24 Mar, 2020", progressValue: 80,
                                team : [
                                    { id : 13, name : "Karen", img : "Null" },
                                ]
							}
						},
						{
							id: 32,
							content: {
                                id : "#NZ1218", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "20 Mar, 2020", progressValue: 77,
                                team : [
                                    { id : 15, name : "Ricky", img : "Null" },
                                    { id : 16, name : "John", img : avatar5 },
                                ]
							}
						},
						{
							id: 33,
							content: {
                                id : "#NZ1212", title: "Да направя списък на всички ...", subtitle : "може да потърся за идеи във...", date: "14 Mar, 2020", progressValue: 40,
                                team : [
                                    { id : 17, name : "joseph", img : avatar2 },
                                    { id : 18, name : "John", img : avatar1 },
                                ]
							}
						},

					]
				}
			]
        }
    }
    render() {
        const breadcrumbItems = [
            { title : "Списък", link : "#" },
            { title : "Задачи", link : "#" },
        ];
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Списък със задачи" breadcrumbItems={breadcrumbItems} />
                        
                        <Row className="mb-2">
                            <Col lg={6}>
                                <Media>
                                    <div className="mr-3">
                                        <img src={logosmlight} alt="" style={{width:200, height:100}} className="avatar-xs"/>
                                    </div>
                                    <Media body>
                                        <h5>Задачи </h5>
                                        <span className="badge badge-soft-success">Отворени</span>
                                    </Media>
                                </Media>
                            </Col>
          
                        </Row>
                        

                        <Row>
                        <KanbanBoard board={this.state} content={this.state.columns}/>
                        </Row>
                        

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default IndexKanban;