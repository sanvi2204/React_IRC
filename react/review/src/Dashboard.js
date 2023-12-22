import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {

    }, []);

    return (
        <div>
            { 
            <img src={""}></img>}
            <h1 className="text-center">KareXpert</h1>
            { <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Patient name</td>
                        <td>Token number</td>
                        <td>age</td>
                        <td>phone</td>
                        <td>appointment</td>
                    </tr>
                </thead>
                <tbody>
                    {customerlist &&
                        customerlist.map(item => (
                            <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.phone}</td>
        <td>{item.appointment}</td>
                            </tr>

                        ))
                    }
                </tbody>

            </table> }
        </div>
    );
}

export default Home;