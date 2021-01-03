import React, { Component } from "react";
import {  Collapse, Card, TabPane, TabContent, NavLink, Nav, Row, Col, Button, CardBody, CardTitle, CardImg, CardText, CardHeader,Container } from "reactstrap";

import { Link } from "react-router-dom";
import img2 from "../../assets/images/small/img-2.jpg";
import ModalVideo from "react-modal-video";
import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class StartTrening extends Component {

	state = {
		breadcrumbItems : [
			{ title : "Основни обучения", link : "#" },
			{ title : "Задачи за правилен старт", link : "#" },
		],
		tasks: [
			{ id: 1, title: 'Етап 1', body: 'Текст за първата задача за изпълнение , моля разгледайте всички линкове !'},
			{ id: 2, title: 'Етап 2', body: 'Текст за втората задача за изпълнение , моля разгледайте всички линкове !'},
			{ id: 3, title: 'Етап 3', body: 'Текст за третата задача за изпълнение , моля разгледайте всички линкове !'}
		],
		tasksConditions: [
			true,
			false,
			false
		],
		isOpen: false
	};


	openTaskHandler = (num) => {
		console.log(num);
		const newTasksConditions = this.state.tasksConditions;
		for (let id in newTasksConditions) {
			if (num === Number(id) ) {
				newTasksConditions[id] = !newTasksConditions[id];
			} else {
				newTasksConditions[id] = false;
			}
		}
		this.setState({tasksConditions: newTasksConditions});
	} 
	

	render() {

		return (
			<React.Fragment>
				<div className="page-content">
					<Container fluid>
					<Breadcrumbs title="Задачи за правилен старт" breadcrumbItems={this.state.breadcrumbItems} />



						<Row>
					
							<Col xl={12}>

								<Card>
									<CardBody>
										<h4 className="card-title">Списък със задачи</h4>
										<p className="card-title-desc">
											Текст за всички задачи
                    					</p>

										<div id="accordion">

										{this.state.tasks.map( (task, index) => {
											return (
												<Card key={index} className="mb">
													<Link to="#" onClick={() => this.openTaskHandler(index)} style={{ cursor: "pointer" }} className="text-dark" >
													<CardHeader  id="headingOne">
														<h4 style={{padding:20}} className="m-0 font-14">
																{task.title}
																<i className={this.state.tasksConditions[index] ? "mdi mdi-minus float-right accor-plus-icon" : "mdi mdi-plus float-right accor-plus-icon"}></i>
														</h4>
													</CardHeader>
													</Link>
													<Collapse isOpen={this.state.tasksConditions[index]}>
															<CardBody>
																<h5 style={{textAlign:"center", padding: 20}}>{task.body}</h5>
																
																<Row>
                                                                <Col xl={12}>
                                                                    <Card>
                                                                        <CardBody>
                                                                            <CardImg className="img-fluid" src={img2} alt="Nazox" />
                                                                        </CardBody>
                                                                    </Card>
                                                                </Col>
																</Row>
															</CardBody>
													</Collapse>
												</Card>
											)
										})}


										</div>
									</CardBody>
								</Card>
							</Col>
						
						
						</Row>

					</Container>
				</div>

			</React.Fragment>
		);
	}
}

export default StartTrening;
