import React from "react";
import "./Table.css"

function tableInfo(prop) {
    console.log(prop)
    return (
        <>
            <table>
                <thead>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </thead>
                <tbody>
                  <tr class="infoTbl">
                    <th>
                        <img alt={prop.picture} src={prop.image} />
                    </th>
                    <th>
                        {prop.first} {prop.last}
                    </th>
                    <th>
                        {prop.phone}
                    </th>
                    <th>
                        <a href="{prop.email}" target="_top">{prop.email}</a>
                    </th>
                    <th>
                        {prop.dob}
                    </th>
                </tr>
                </tbody>
            </table>
        </>
    );
}
export default tableInfo;