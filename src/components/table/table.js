import React from "react";
import "./table.css"

function tableInfo() {
    return (
        <>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                <tr class="infoTbl">
                    <th>
                        <img src="https://via.placeholder.com/45"></img>
                    </th>
                    <th>{Name}</th>
                    <th>{Phone}</th>
                    <th>{Email}</th>
                    <th>{DOB}</th>
                </tr>
            </table>
        </>
    );
}
export default tableInfo;