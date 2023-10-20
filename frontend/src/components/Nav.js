import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex align-items-start">
      <div className="container d-flex flex-column">
        <h4 className="dashboard-title shadow-sm my-4" style={{color:"#C70039"}}>DASHBOARD</h4>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse d-flex flex-column align-items-start" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/add-user" className="nav-link">
                Create User
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/get-user" className="nav-link">
                Get User
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/add-location" className="nav-link">
                Add Location
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/get-location" className="nav-link">
                Get Location
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/all-attendence" className="nav-link">
              All Attendence
              </NavLink>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
              User Login
              </NavLink>
            </li>
          </ul> */}
        
        </div>
      </div>
    </nav>
  );
};

export default Nav;






// import OpenAI from 'openai'; 

// //  OpenAI API client
// const openai = new OpenAI('YOUR_API_KEY'); 

// //  consolidate best practices multiple articles
// async function consolidatePractices(articles) {
//   const consolidatedList = [];

//   for (const article of articles) {
//     const articleHeadline = article.headline;
//     const articleBody = article.body;

//     const bestPractices = await extractPractices(articleBody);

//     for (const bestPractice of bestPractices) {
//       let existingPractice = findPractice(consolidatedList, bestPractice);

//       if (existingPractice) {
//         existingPractice.citations.push(articleHeadline);
//       } else {
//         const newPractice = {
//           practice: bestPractice,
//           citations: [articleHeadline],
//           discussions: []
//         };
//         consolidatedList.push(newPractice);
//       }

//       const discussionSummary = await extractDiscussionSummary(articleBody, bestPractice);
//       const updatedPractice = findPractice(consolidatedList, bestPractice);
//       updatedPractice.discussions.push(discussionSummary);
//     }
//   }

//   return consolidatedList;
// }

// function findPractice(consolidatedList, bestPractice) {
//   return consolidatedList.find(practice => isSimilar(practice.practice, bestPractice));
// }

// function isSimilar(practice1, practice2) {
//   const similarityThreshold = 0.8; 

//   const similarityScore = calculateSimilarityScore(practice1, practice2);

//   if (similarityScore >= similarityThreshold) {
//     return true; 
//   } else {
//     return false; 
//   }
// }

// async function extractPractices(articleBody) {
//   const prompt = `best practices from the given article:\n\n${articleBody}`;

//   const response = await openai.complete({
//     prompt: prompt,
//     maxTokens: 100,
//     n: 5,
//     stop: '\n'
//   });

//   const bestPractices = response.choices.map(choice => choice.text.trim());

//   return bestPractices;
// }

