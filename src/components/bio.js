/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        textAlign: `center`
      }}
    >      
      <p>
        A website for the local tech scene in Baton Rouge, Louisiana, dedicated to the 
        user groups, freelancers, and events going on in the area.
      </p>
    </div>
  )
}

export default Bio
