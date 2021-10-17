import React from 'react';


const AppointmentTable = ({myInfo}) => {
    return (
        <div>
            <table className="table table-borderless text-white bg-secondary">
                <thead>
                    <tr>
                        <th className=" text-left" scope="col">Sr No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myInfo.map((appointment, index) =>

                            <tr>
                                <td>{index + 1}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.gender}</td>
                                <td>{appointment.age}</td>
                                <td>{appointment.weight}KG</td>
                                <td>{appointment.phone}</td>
                                <td>{appointment.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentTable;