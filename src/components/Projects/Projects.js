import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Content Management System"
              description="CMS is a comprehensive full-stack web application built on the Ruby on Rails framework.It serves as a centralised platform for managing various aspects of company operations, including employee data, projects, clients, and salaries. utilising cron jobs, it effectively manages email communication and other transactions.The system facilitates dynamic project management, from initial inquiry to project completion. Hosted on Amazon EC2, it ensures reliability and scalability."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DripShipper (Drop Shipping Service)"
              description="DripShipper is a robust web application built on the Ruby on Rails framework, specialising in coffee and tea products.It seamlessly integrates with various e-commerce platforms such as Shopify, WIX, WooCommerce, TikTok, etc., offering users the ability to manage their product listings and orders effortlessly.Through the utilisation of webhooks and cron jobs, DripShipper ensures synchronisation between user stores and the application. it provides support to beginners by guiding them through the process of setting up their stores,including essential elements such as logos and custom labels.it provides dedicated panels for suppliers, enabling them to efficiently manage orders and sync them with their respective e-commerce platforms. With a dedicated customer service panel, representatives can address order-related inquiries, ensuring high levels of customer satisfaction. DripShipper is hosted on the Heroku platform and integrates with Stripe for payment processing."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shopify Script/Function"
              description=" This project involves the development of a Shopify checkout script to manage all aspects related to order shipping. Additionally, the script has been migrated from Shopify's native script environment to a functional implementation. This functionality is similar to that of a third-party application., facilitating seamless interaction between Shopify stores and multiple users for their shipping workflows."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Appraisal Pro (Car Base Service)"
              description="Appraisal Pro is a vehicle diagnostic and management platform. Our mobile app provides users with in-depth car engine performance analysis and maintenance recommendations based on vehicle scans. Additionally, we offer a comprehensive employee dashboard for managing customer data and tracking vehicle information."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FeedOps (MareketPlace Integration)"
              description="FeedOps implementing integrations with a number of marketplaces.For each marketplace, they require full order synchronisation, with orders made or cancelled in the marketplaces being pushed back into Magento for fulfilment / cancellation. In addition, Intelligent Reach claims to push any stock availability / price updates to all channels within 10-15 minutes, and any solution we come up with would need to match this."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
