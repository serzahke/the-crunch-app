"use client"

import Script from 'next/script'
import React, { useEffect, useRef } from 'react'

const Tableau = () => {

    return (
        <>
            <Script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js"></Script>

            <tableau-viz  id="tableauViz"
                src="https://prod-uk-a.online.tableau.com/t/thecrunchapp/views/BlackRockDashboard/SummaryPage"
                // token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IjUxMTQ4NjhhLWUxOGQtNGVlMi1iNDkzLTE3YzFlZDJhMjQ4YSIsImlzcyI6Ik5DaGNsRCtnbEJMZkJGcEcxZ1JsRmJoTHdtMkladFQ4aVpHNVVLUjg3eTg9In0.eyJpc3MiOiIwOTc2ODdjNC04MDM4LTQzMDItOGUwNi02NjY0MjgwNzJhMjciLCJleHAiOjE3MDMwMDU0MDAsImp0aSI6IjVhMDkxNmZiLWI3YTAtNGFhYy05ZDJjLTAxYmU1NDkzMWViNCIsImF1ZCI6InRhYmxlYXUiLCJzdWIiOiJoZWxsb0B0aGVjcnVuY2guYXBwIiwic2NwIjpbInRhYmxlYXU6dmlld3M6ZW1iZWQiLCJ0YWJsZWF1Om1ldHJpY3M6ZW1iZWQiXSwiaHR0cHM6Ly90YWJsZWF1LmNvbS9vZGEiOiJ0cnVlIiwiaHR0cHM6Ly90YWJsZWF1LmNvbS9ncm91cHMiOlsiQ29udHJhY3RvcnMiLCJUZWFtIEMiXSwiUmVnaW9uIjoiRWFzdCJ9.wc9MJHawxYKjZlZfTWYaK3JY3DEh2IJxVQgN3kOgM0I"
                iframe-auth>
            </tableau-viz>
        </>
    )
}

export default Tableau