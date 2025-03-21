import { Container, Row } from "react-bootstrap";
import CopyrightContact from "../CopyRight/Copy";

export default function About() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <div className="about">
            <h1 className=" mb-5" style={{color:"#030349"}}>
              About
            </h1>
            <p className="mb-4 text-center fw-bold">
              The TN 12th public exam time table 2025 is now live at the
              official website of Directorate of Government Examinations
              (DGE), Tamil Nadu so that all the students of class 12th can
              check and note the subject wise exam dates. The 12th Public
              Exam Time Table 2025 was released online by the State
              Education Minister of Tamil Nadu, Anbil Mahesh Poyyamozhi at
              the online portal announcing the conduction of final
              examinations between March 03 and March 25, 2025. The direct
              link to download the time table PDF is added in the article
              below.
            </p>
            <h2 className=" mb-4" style={{color:"#030349"}}>
              10th And 12th Public Exam Time Table 2025 Out
            </h2>
            <p className="mb-4 text-center fw-bold">
              The Class 12 Public Exam Time Table 2025 is now available on
              the official website. Students are advised to check it
              carefully. According to the schedule, the final exams will
              begin on March 3, 2025. It is important for students to
              complete their preparations before the exams start.
              Additionally, the practical exams for Class 12 will be held
              from February 7 to February 14, 2025. Students should note
              these dates and get ready in advance. Make sure to manage
              your time well and revise all subjects thoroughly. Following
              the exam timetable properly will help you perform your best
              in the exams.
            </p>
            <h2 className="  mb-4" style={{color:"#030349"}}>
              TN 12th And 10th Public Exam Time Table 2025 Tamil Nadu
              Board
            </h2>
            <p className="text-center fw-bold">
              The TN HSC +2 Exams 2025 will be conducted in single shift
              starting at 10 am and ending at 01:15 pm. The first 15 minutes
              are given for reading the question paper and verifying
              details. More than 8 lakh students are expected to appear for
              these exams in around 2,500 schools. These exams are for the
              academic year 2024-25. The board has made proper arrangements
              to ensure a smooth process. Students will have enough time to
              complete their exams without any hurry.
            </p>
          </div>
        </Row>
      </Container>
      <div>
              <CopyrightContact />
            </div>
    </>
  );
}