import React, { Component } from "react";
import {  Collapse, Card, TabPane, TabContent, NavLink, Nav, Row, Col, Button, CardBody, CardTitle, CardImg, CardText, CardHeader,Container } from "reactstrap";

import { Link } from "react-router-dom";
import img2 from "../../assets/images/small/img-2.jpg";
import ModalVideo from "react-modal-video";
import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class StartTasks extends Component {

	state = {
		breadcrumbItems : [
			{ title : "Основни обучения", link : "#" },
			{ title : "Задачи за правилен старт", link : "#" },
		],
		tasks: [
			{ id: 1, title: 'Задача 1', body: 'Текст за първата задача за изпълнение , моля разгледайте всички линкове !'},
			{ id: 2, title: 'Задача 2', body: 'Текст за втората задача за изпълнение , моля разгледайте всички линкове !'},
			{ id: 3, title: 'Задача 3', body: 'Текст за третата задача за изпълнение , моля разгледайте всички линкове !'}
		],
		tasksConditions: [
			true,
			false,
			false
		],
		customActiveTab: "1",
		isOpen: false
	};


	toggleCustom(tab) {
		if (this.state.customActiveTab !== tab) {
			this.setState({
				customActiveTab: tab
			});
		}
	}


	openModal = () => {
		this.setState({ isOpen: true });
	}

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
																	<Col lg={6}>
																		<Card>
																			<Row className="no-gutters align-items-center">
																				<Col md={4}>

																				<Button
																				color="light"
																				onClick={this.openModal}
																				>
																				<CardImg className="img-fluid" src={img2} alt="Skote" />
																				</Button>{" "}
																				<ModalVideo
																				videoId='L61p2uyiMSo'
																				channel="youtube"
																				isOpen={this.state.isOpen}
																				onClose={() => this.setState({ isOpen: false })}
																				/>
																					
																				</Col>
																				<Col md={8}>
																					<CardBody>
																						<CardTitle>Основно видео</CardTitle>
																						<CardText>Тук пише цялата информация за видеото</CardText>
																						<CardText><small className="text-muted">Задача за изпълнение от infinity21</small></CardText>
																					</CardBody>
																				</Col>
																			</Row>
																		</Card>

																		<Card>
																			<CardBody>
																				<h4 className="card-title">Допълнителна информация</h4>
																				<p className="card-title-desc"> Примерни табове </p>
																				<Row>
																					<Col md={3}>
																						<Nav pills className="flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
																						<NavLink id="v-pills-home-tab" style={{ cursor: "pointer" }}
																							className={classnames({
																								active: this.state.customActiveTab === "1"
																							},"mb-2")}
																							onClick={() => {
																								this.toggleCustom("1");
																							}} aria-controls="v-pills-home" aria-selected="true">
																							Основна информация
																						</NavLink>
																						<NavLink id="v-pills-profile-tab" style={{ cursor: "pointer" }}
																							className={classnames({
																								active: this.state.customActiveTab === "2"
																							},"mb-2")}
																							onClick={() => {
																								this.toggleCustom("2");
																							}} aria-controls="v-pills-home" aria-selected="true">
																							Препоръки за задачата
																						</NavLink>
																						<NavLink id="v-pills-messages-tab" style={{ cursor: "pointer" }}
																							className={classnames({
																								active: this.state.customActiveTab === "3"
																							},"mb-2")}
																							onClick={() => {
																								this.toggleCustom("3");
																							}} aria-controls="v-pills-home" aria-selected="true">
																							Защо го правим?
																						</NavLink>
																						<NavLink id="v-pills-settings-tab" style={{ cursor: "pointer" }}
																							className={classnames({
																								active: this.state.customActiveTab === "4"
																							})}
																							onClick={() => {
																								this.toggleCustom("4");
																							}} aria-controls="v-pills-home" aria-selected="true">
																							Източници
																						</NavLink>
																						</Nav>
																					</Col>
																					<Col md={9}>
																						<TabContent activeTab={this.state.customActiveTab} className="text-muted mt-4 mt-md-0" id="v-pills-tabContent">
																							<TabPane tabId="1" role="tabpanel" aria-labelledby="v-pills-home-tab">
																								<p>
																									В тази задача сме приготвили ................. и за целта сме предоставили ............ така предвидените задачи ....
																								</p>
																								<p>Когато изпълните всички точки ...........</p>
																							</TabPane>
																							<TabPane tabId="2" role="tabpanel" aria-labelledby="v-pills-profile-tab">
																								<p>
																									Ако не знаете как да започнете .............. може да направите................
																								</p>
																								<p className="mb-0"> имайте в предвид , че .....................</p>
																							</TabPane>
																							<TabPane tabId="3" role="tabpanel" aria-labelledby="v-pills-messages-tab">
																								<p>
																									Изпълнението на тази задача ........... по този  начин ще успеете да постигнете ............
																								</p>
																								<p className="mb-0">От вас се очаква да .......</p>
																							</TabPane>
																							<TabPane tabId="4" role="tabpanel" aria-labelledby="v-pills-settings-tab">
																								<p>
																									Източниците предоставени в тази задача са специално подбрани .......... разбирасе бихте могли да посетите още и следните линкове
																								</p>
																								<p className="mb-0">В бъдеще може да очаквате още полезни линкове.
																								</p>
																							</TabPane>
																						</TabContent>
																					</Col>
																				</Row>
																				
																			</CardBody>
																		</Card>
							
																	</Col>
																	
																	<Col lg={6}>
																		<Card>
																			<CardBody>
																				<h2>1</h2>
																				<p className="card-title-desc">
																				In this example lazy-loading of images is enabled for the next image based on move direction.{" "}
																				</p>

																				<Row>
																				<Col>
																					<Button
																					color="light"
																					onClick={this.openModal}
																					>
																					Видео
																					</Button>{" "}
																					<ModalVideo
																					videoId='L61p2uyiMSo'
																					channel="youtube"
																					isOpen={this.state.isOpen}
																					onClose={() => this.setState({ isOpen: false })}
																					/>
																				</Col>
																				</Row>
																			</CardBody>
																		</Card>
																		<Card>
																			<CardBody>
																				<h2>2</h2>
																				<p className="card-title-desc">
																				In this example lazy-loading of images is enabled for the next image based on move direction.{" "}
																				</p>

																				<Row>
																				<Col>
																				<Link
																					to="www.google.bg"
																					style={{ cursor: "pointer" }}
																					className="btn btn-primary mo-mb-2"
																				> Линк </Link>
																					
																				</Col>
																				</Row>
																			</CardBody>
																		</Card>
																		<Card>
																			<CardBody>
																				<h2>3</h2>
																				<p className="card-title-desc">
																				In this example lazy-loading of images is enabled for the next image based on move direction.{" "}
																				</p>

																				<Row>
																				<Col>
																					<Button
																					color="light"
																					onClick={this.openModal}
																					>
																					Видео
																					</Button>{" "}
																					<ModalVideo
																					videoId='L61p2uyiMSo'
																					channel="youtube"
																					isOpen={this.state.isOpen}
																					onClose={() => this.setState({ isOpen: false })}
																					/>
																					<Link
																					to="www.google.bg"
																					style={{ cursor: "pointer" }}
																					className="btn btn-primary mo-mb-2"
																				> Линк </Link>
																				</Col>
																				</Row>
																			</CardBody>
																		</Card>
																	</Col>
																</Row>
																<h2 className="card-title" style={{textAlign:"center", padding: 20}}> Допълнителни видеа </h2>
																<p className="card-title-desc"  style={{textAlign:"center", padding: 20}}>
																	текст към видеата текст към видеата текст към видеата текст към видеата текст към видеата
																</p>
																<Row>
																	
																	<Col xl={3}>
																		<Card>
																			<CardBody>
												
																				<h4 className="card-title">Responsive embed video 16:9</h4>
																				<p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
												
																			
																				<div className="embed-responsive embed-responsive-16by9">
																					<iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
																				</div>
																			</CardBody>
																		</Card>
																	</Col> 
												
																	<Col xl={3}>
																		<Card>
																			<CardBody>
												
																				<h4 className="card-title">Responsive embed video 16:9</h4>
																				<p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
												
																			
																				<div className="embed-responsive embed-responsive-16by9">
																					<iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
																				</div>
																			</CardBody>
																		</Card>
																	</Col> 
																		<Col xl={3}>
																			<Card>
																				<CardBody>
													
																					<h4 className="card-title">Responsive embed video 16:9</h4>
																					<p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
													
																				
																					<div className="embed-responsive embed-responsive-16by9">
																						<iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
																					</div>
																				</CardBody>
																			</Card>
																		</Col> 
													
																		<Col xl={3}>
																			<Card>
																				<CardBody>
													
																					<h4 className="card-title">Responsive embed video 16:9</h4>
																					<p className="card-title-desc">Aspect ratios can be customized with modifier classes.</p>
													
																				
																					<div className="embed-responsive embed-responsive-16by9">
																						<iframe title="video4" className="embed-responsive-item" src="https://www.youtube.com/embed/1y_kfWUCFDQ"></iframe>
																					</div>
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

export default StartTasks;
